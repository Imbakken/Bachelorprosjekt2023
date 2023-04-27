<script>
  import { onMount } from "svelte";
  import { auth, db } from "../lib/firebase/firebase";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  import { authStore } from "../store/store";
  import Footer from "../components/Footer.svelte";

  //export const prerender = true;
  const nonAuthRoutes = ["/", "product"];

  onMount(() => {
    console.log("Mounting");
    const unsub = auth.onAuthStateChanged(async (user) => {
      const currentPath = window.location.pathname;

      if (!user && !nonAuthRoutes.includes(currentPath)) {
        window.location.href = "/";
        return;
      }

      if (user && currentPath === "/") {
        window.location.href = "/dashboard";
        return;
      }

      if (!user) {
        return;
      }

      let dataToSetToStore;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.log("Creating User");
        const userRef = doc(db, "users", user.uid);
        dataToSetToStore = {
          email: user.email,
          name: user.name,
        };
        await setDoc(userRef, dataToSetToStore, { merge: true });
      } else {
        console.log("Fetching User");
        const userData = docSnap.data();
        dataToSetToStore = userData;
      }

      authStore.update((curr) => {
        return {
          ...curr,
          user,
          data: dataToSetToStore,
          loading: false,
        };
      });
    });
    return unsub;
  });
</script>

<div class="mainContainer">
  <slot />
</div>

<Footer />

<style>
  .mainContainer {
    overflow: hidden;
    min-height: 100vh;
    background: #fefaef;
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
