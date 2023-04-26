<script>
  // Import necessary modules from Firebase and Svelte
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

  // Import icons used in the component
  import CleaningIcon from "../../components/icons/CleaningIcon.svelte";
  import CommonAreaIcon from "../../components/icons/CommonAreaIcon.svelte";
  import InternetIcon from "../../components/icons/InternetIcon.svelte";
  import LaundryIcon from "../../components/icons/LaundryIcon.svelte";
  import PhoneIcon from "../../components/icons/PhoneIcon.svelte";
  import RulesIcon from "../../components/icons/RulesIcon.svelte";
  import WasteIcon from "../../components/icons/WasteIcon.svelte";
  import ArrowLeft from "../../components/icons/ArrowLeft.svelte";
  import ArrowRight from "../../components/icons/ArrowRight.svelte";
  import PlaceIcon from "../../components/icons/PlaceIcon.svelte";
  import DateIcon from "../../components/icons/DateIcon.svelte";

  // Define variables used in the component
  let messages = []; // Array to store messages
  let events = []; // Array to store events
  let name = ""; // Name of the authenticated user
  let unsubscribe = null; // Function to unsubscribe from Firebase events

  // Run this code when the component is mounted
  onMount(async () => {
    try {
      // Get the authenticated user
      const auth = getAuth();

      // Subscribe to changes in the authenticated user
      unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          // Get the user document from Firestore
          const db = getFirestore();
          const userDoc = doc(db, "users", user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            // If the user document exists, get the user's name
            name = userSnapshot.data().name;
          }
        } else {
          // If the user is not authenticated, set name to an empty string
          name = "";
        }
      });

      // Get messages that were posted today or later, sorted by date
      const today = new Date();

      const messagesQuery = query(
        collection(db, "messages"),
        where("date", ">=", Timestamp.fromDate(today)),
        orderBy("date", "asc"),
        limit(2)
      );

      // Get the messages and add them to the messages array
      const messagesSnapshot = await getDocs(messagesQuery);

      messages = messagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Get events that are happening today or later, sorted by date
      const eventsQuery = query(
        collection(db, "events"),
        where("date", ">=", Timestamp.fromDate(today)),
        orderBy("date", "asc"),
        limit(2)
      );

      // Get the events and add them to the events array
      const eventsSnapshot = await getDocs(eventsQuery);

      events = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error(error);
    }
  });

  // Run this code when the component is destroyed
  onDestroy(() => {
    // Unsubscribe from Firebase events
    if (unsubscribe) {
      unsubscribe();
    }
  });

  let scrollContainer; // Reference to the scrollContent div

  function scrollLeft() {
    scrollContainer.scrollLeft -= 100; // Scroll left by 100 pixels
  }

  function scrollRight() {
    scrollContainer.scrollLeft += 100; // Scroll right by 100 pixels
  }
</script>

{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <h1>Hei {name}</h1>
      <h2>Dette må du få med deg</h2>
      <div class="mainContainerContent">
        {#each messages as message}
          <div class="mainCard">
            <div class="mainCardItem">
              <div class="mainCardText">
                <h3>{message.title}</h3>
                <div class="dateContainer">
                  <DateIcon />
                  <p>
                    <strong>{message.date.toDate().toLocaleString()}</strong>
                  </p>
                </div>
                <p class="small">
                  Skrevet av <strong>{message.author}</strong>
                </p>
                <p>{message.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mainContainerLink">
        <a href="/messages">Flere beskjeder</a>
      </div>

      <h2>Dette skjer de kommende dagene</h2>

      <div class="mainContainerContent">
        {#each events as event}
          <div class="mainCard">
            <div class="mainCardItem">
              <div class="mainCardText">
                <h3>{event.title}</h3>
                <div class="placeContainer">
                  <PlaceIcon />
                  <p>{event.place}</p>
                </div>
                <div class="dateContainer">
                  <DateIcon />
                  <p>
                    <strong>{event.date.toDate().toLocaleString()}</strong>
                  </p>
                </div>
                <p>{event.info}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mainContainerLink">
        <a href="/events">Flere arrangementer</a>
      </div>
      <h2>Nyttig informasjon</h2>
      <div class="scrollMenu">
        <button class="arrowButton leftArrowButton" on:click={scrollLeft}>
          <span class="icon"><ArrowLeft /></span>
        </button>
        <div class="scrollContent" bind:this={scrollContainer}>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/laundry")}
          >
            <span>Vaskeri</span>
            <span class="icon"><LaundryIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/cleaning")}
          >
            <span>Renhold</span>
            <span class="icon"><CleaningIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/waste")}
          >
            <span>Avfall og kildesortering</span>
            <span class="icon"><WasteIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/commonarea")}
          >
            <span>Fellesareale</span>
            <span class="icon"><CommonAreaIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/rules")}
          >
            <span>Regler og rutiner</span>
            <span class="icon"><RulesIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/internet")}
          >
            <span>Internett</span>
            <span class="icon"><InternetIcon /></span>
          </button>
          <button
            class="scrollMenuItem"
            on:click|preventDefault={() =>
              (window.location.href = "/information/phone")}
          >
            <span>Viktige telefonnumre</span>
            <span class="icon"><PhoneIcon /></span>
          </button>
        </div>

        <button class="arrowButton rightArrowButton" on:click={scrollRight}>
          <span class="icon"><ArrowRight /></span>
        </button>
      </div>

      <div class="buttonContainer">
        <button on:click={authHandlers.logout}>Logg ut</button>
      </div>
    </div>
  </div>
{/if}

<style>
  h3 {
    font-size: 1.5em;
  }
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
  .mainContainerContent {
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mainCard {
    background: #fbc9be;
    border-radius: 15px;
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
  .mainCardItem {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
  .placeContainer {
    display: flex;
    align-items: center;
    font-size: 0.8em;
  }
  .dateContainer {
    display: flex;
    align-items: center;
    font-size: 0.8em;
  }
  .small {
    font-size: 0.8em;
  }
  .mainContainerLink {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .mainContainerLink a {
    color: #695356;
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
    margin: 1em 0;
  }
  .buttonContainer button {
    background: #fbc9be;
    color: #695356;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 24px 0;
    border-radius: 15px;
    width: 50%;
  }
  .scrollMenu {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  .scrollMenuItem {
    background: #fbc9be;
    color: #695356;
    text-decoration: none;
    white-space: normal;
    word-wrap: break-word;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    height: 160px;
    width: 100px;
    border-radius: 15px;
    border: none;
    padding: 10px 0;
    display: grid;
    grid-template-rows: 30% 60%;
    gap: 10px 0px;
    align-content: stretch;
    justify-items: center;
    align-items: center;
    flex-shrink: 0;
    margin-right: 1rem;
    scroll-snap-align: center;
  }
  .scrollContent {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
  .arrowButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
      width: 100%;
    }
  }
</style>
