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
    where,
    Timestamp,
  } from "firebase/firestore";
  import { onMount, onDestroy } from "svelte";
  import { getAuth } from "firebase/auth";

  let messages = [];
  let events = [];
  let name = "";
  let unsubscribe = null;

  onMount(async () => {
    try {
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

      const today = new Date();
      const messagesQuery = query(
        collection(db, "messages"),
        orderBy("date", "asc"),
        limit(2)
      );

      const messagesSnapshot = await getDocs(messagesQuery);

      messages = messagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const eventsQuery = query(
        collection(db, "events"),
        where("date", ">=", Timestamp.fromDate(today)),
        orderBy("date", "asc"),
        limit(2)
      );

      const eventsSnapshot = await getDocs(eventsQuery);

      events = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error(error);
    }
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
                <div class="messageCardParagraph">
                  <p>{message.date}</p>
                  <p>Skrevet av {message.author}</p>
                </div>
                <h3>{message.title}</h3>
                <p>{message.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mainContainerLink">
        <a href="/messages">Flere beskjeder</a>
      </div>
      <div class="mainContainerContent">
        {#each events as event}
          <div class="messageCard">
            <div class="messageCardItem">
              <div class="messageCardText">
                <div class="messageCardParagraph">
                  <p>{event.date.toDate().toLocaleString()}</p>
                  <p>Skrevet av {event.organizer}</p>
                </div>
                <h3>{event.title}</h3>
                <p>{event.info}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mainContainerLink">
        <a href="/events">Flere arrangementer</a>
      </div>
      <div class="buttonContainer">
        <button on:click={authHandlers.logout}>Logg ut</button>
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
    display: flex;
    justify-content: space-between;
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
    cursor: pointer;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer button {
    background: #fbcec3;
    color: #db7b65;
    border: 1px solid #db7b65;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 24px 0;
    border-radius: 40px;
    width: 50%;
  }
</style>
