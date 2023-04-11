<script>
  import { db } from "../../lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
  import {
    collection,
    orderBy,
    limit,
    query,
    getDocs,
    getDoc,
    getFirestore,
    doc,
  } from "firebase/firestore";
  import { onMount, onDestroy } from "svelte";
  import { getAuth } from "firebase/auth";

  let messages = [];
  let name = "";
  let unsubscribe = null;

  onMount(() => {
    const auth = getAuth();

    unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const db = getFirestore();
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          name = userSnapshot.data().name;
        }
      } else {
        name = "";
      }
    });
  });

  onMount(async () => {
    // Query the 'posts' collection and order by the 'date' field and limit to 2
    const q = query(
      collection(db, "messages"),
      orderBy("date", "asc"),
      limit(2)
    );

    // Execute the query and retrieve the data
    const querySnapshot = await getDocs(q);

    // Map the data to an array and store it in the 'messages' variable
    messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    (err) => {
      console.error(err);
    };
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <h1>Hei {name}</h1>
      <h2>Dette må du få med deg</h2>
      <div class="mainContainerContent">
        {#each messages as message}
          <div class="messageCard">
            <div class="messageCardItem">
              <div class="messageCardText">
                <h3>{message.title}</h3>
                <p>{message.description}</p>
                <div class="messageCardParagraph">
                  <p>{message.date}</p>
                  <p>Skrevet av {message.author}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mainContainerLink">
        <a href="/messages">Flere beskjeder</a>
      </div>
      <div class="buttonContainer">
        <button on:click={authHandlers.logout}>
          <i class="fa-solid fa-right-from-bracket" />
          <p>Logout</p></button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .mainContainer {
    min-height: 100vh;
    padding-top: 50px;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("../../assets/bakgrunnDashboard.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .mainContainerRectangle {
    background-color: #fefaef;
    border-radius: 30px 30px 0 0;
    height: 75%;
    width: 100%;
    padding: 30px;
    position: absolute;
    bottom: 0;
    overflow: scroll;
  }
  h2 {
    color: #000;
  }
  .mainContainerContent {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .messageCard {
    background: #fbc9be;
    border-radius: 15px;
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
  .messageCard p {
    color: #000000;
  }
  .messageCardItem {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .messageCardParagraph {
    font-size: 0.8em;
  }
  .mainContainerLink {
    display: flex;
    justify-content: flex-end;
  }
  .mainContainerLink a {
    text-decoration: none;
    color: #db7b65;
  }
  .mainContainerLink a:hover {
    font-weight: bold;
  }

  .mainContainer button {
    background: #db7b65;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer button {
    margin: 10px;
    padding: 20px;
  }
</style>
