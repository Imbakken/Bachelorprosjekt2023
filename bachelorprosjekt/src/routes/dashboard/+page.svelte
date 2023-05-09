<script>
  // Import necessary modules from Firebase and Svelte
  import { db } from "../../lib/firebase/firebase";
  import { authStore } from "../../store/store";
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

  import Footer from "../../components/Footer.svelte";
  import LogOut from "../../components/buttons/LogOut.svelte";

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

      // Get messages that were posted today or until 2 weeks ago, sorted by date

      const today = new Date();
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(today.getDate() - 14); // subtract 14 days

      const messagesQuery = query(
        collection(db, "messages"),
        where("createdAt", ">=", Timestamp.fromDate(twoWeeksAgo)),
        orderBy("createdAt", "desc"),
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
      <div class="mainContainerContent">
        <div class="mainContainerHeader">
          <h1>Hei {name}</h1>
          <LogOut />
        </div>
        <h2>Beskjeder du må få med deg</h2>
        <div class="mainContainerPartContent">
          {#each messages as message}
            <div class="mainCard">
              <div class="mainCardItem">
                <div class="mainCardText">
                  <h3>{message.title}</h3>
                  <p class="small">
                    <strong
                      >{message.createdAt.toDate().toLocaleString()}</strong
                    >
                  </p>
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
          <a aria-label="more messages" href="/messages">Flere beskjeder</a>
        </div>

        <h2>Arrangementer de kommende dagene</h2>

        <div class="mainContainerPartContent">
          {#each events as event}
            <div class="mainCard">
              <div class="mainCardItem">
                <div class="mainCardText">
                  <h3>{event.title}</h3>
                  <div class="dateContainer">
                    <DateIcon />
                    <p>
                      <strong>{event.date.toDate().toLocaleString()}</strong>
                    </p>
                  </div>
                  <div class="placeContainer">
                    <PlaceIcon />
                    <p>{event.place}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        <div class="mainContainerLink">
          <a aria-label="more events" href="/events">Flere arrangementer</a>
        </div>
        <h2>Nyttig informasjon</h2>
      </div>
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
      <Footer />
    </div>
  </div>
{/if}

<style>
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1em;
  }
  button {
    cursor: pointer;
  }
  .mainContainer {
    min-height: 100vh;
    padding-top: 50px;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("/backgroundapp/bakgrunnDashboard.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .mainContainerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mainContainerRectangle {
    background-color: #fefaef;
    border-radius: 30px 30px 0 0;
    height: 75%;
    width: 100%;
    position: absolute;
    bottom: 0;
    overflow: scroll;
  }
  .mainContainerPartContent {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mainContainerContent {
    padding: 30px;
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
    margin: 2px 0;
    font-size: 0.9em;
  }
  .dateContainer {
    display: flex;
    align-items: center;
    margin: 2px 0;
    font-size: 0.9em;
  }
  .small {
    font-size: 0.9em;
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
  .scrollMenu {
    display: flex;
    align-items: center;
    margin-bottom: 8em;
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
    font-size: 0.9em;
    height: 160px;
    width: 110px;
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
    margin-right: 0.2rem;
    margin-left: 0.2rem;
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
    width: 1em;
    height: 1em;
    border: none;
    background: none;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
    }
    .scrollMenu {
      justify-content: center;
    }
    .mainContainerContent {
      padding: 2em 10em;
    }
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    h2 {
      font-size: 1.2em;
    }
    .mainContainer {
      max-width: 1920px;
      background-image: url("/backgrounddesktop/BackgroundDesktop1.jpg");
    }
    .scrollMenu {
      justify-content: center;
    }
    .mainContainerContent {
      padding: 2em 12em;
    }
    .mainContainerPartContent {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      align-content: center;
    }
  }
</style>
