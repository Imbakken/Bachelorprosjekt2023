<script>
  import { db, auth } from "../../lib/firebase/firebase";
  import { authStore } from "../../store/store";
  import {
    collection,
    orderBy,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    query,
    getDocs,
    where,
    Timestamp,
  } from "firebase/firestore";

  import Toastify from "toastify-js";
  import { onMount } from "svelte";

  import Footer from "../../components/Footer.svelte";
  import PlaceIcon from "../../components/icons/PlaceIcon.svelte";
  import DateIcon from "../../components/icons/DateIcon.svelte";

  let event = {
    title: "",
    info: "",
    date: Timestamp.fromDate(new Date()),
    duration: null,
    place: "",
    organizer: "",
  };

  let events = [];
  let inputElement;
  let editStatus = false;
  let currentId = "";
  let selectedEvent = null;
  let error = false;

  // Get events from Firestore and store them in the events array
  onMount(async () => {
    const today = new Date(); // get today's date
    const q = query(
      collection(db, "events"),
      where("date", ">=", Timestamp.fromDate(today)),
      orderBy("date", "asc")
    );
    const querySnapshot = await getDocs(q);

    events = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    (err) => {
      console.log(err);
    };
  });

  // Add the event object to Firestore
  const addEvent = async () => {
    const currentUser = auth.currentUser;
    try {
      await addDoc(collection(db, "events"), {
        ...event,
        createdAt: Timestamp.now(),
        createdBy: currentUser.uid,
      });
      Toastify({
        text: "New event created",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
    }
  };

  // Check if the current user can edit the event based on their uid
  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    Event;
    return currentUser && createdBy === currentUser.uid;
  }

  // Populate the event object with the data of the selected event and enable edit mode
  const editEvent = (currentEvent) => {
    currentId = currentEvent.id;
    event.title = currentEvent.title;
    event.info = currentEvent.info;
    event.date = currentEvent.date;
    event.duration = currentEvent.duration;
    event.place = currentEvent.place;
    event.organizer = currentEvent.organizer;
    editStatus = true;

    // Scroll to the form
    const form = document.getElementById("mainForm");
    form.scrollIntoView({ behavior: "smooth" });
  };

  // Remove the event with the given id from Firestore
  const removeEvent = async (id) => {
    try {
      await deleteDoc(doc(db, "events", id));
      Toastify({
        text: "Event deleted",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
    }
  };

  // Update the event with the currentId in Firestore with the data from the event object
  const updateEvent = async () => {
    try {
      await updateDoc(doc(db, "events", currentId), event);
      Toastify({
        text: "Event updated",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
      error = true;
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!event.title) return;
    event.date = Timestamp.fromDate(new Date(event.date));

    if (!editStatus) {
      addEvent();
    } else {
      updateEvent();
      editStatus = false;
      currentId = "";
    }
    event = {
      title: "",
      info: "",
      date: Timestamp.fromDate(new Date()),
      duration: null,
      place: "",
      organizer: "",
    };
    inputElement.focus();
  };

  // Cancel
  const onCancel = () => {
    editStatus = false;
    currentId = "";
    event = {
      title: "",
      info: "",
      date: Timestamp.fromDate(new Date()),
      duration: null,
      place: "",
      organizer: "",
    };
  };

  // Shows the event details
  const showEventDetails = (currentEvent) => {
    if (selectedEvent === currentEvent) {
      // deselect the event if it is already selected
      selectedEvent = null;
    } else {
      // select the clicked event
      selectedEvent = currentEvent;
    }
  };

  function scrollTo() {
    const formSection = document.getElementById("mainForm");
    formSection.scrollIntoView({ behavior: "smooth" });
  }
</script>

<!-- Checks if the user is logged in -->
{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <div class="mainContainerHeader">
        <h1>Arrangementer</h1>
        <button
          aria-label="Add arangement"
          on:click={() => {
            scrollTo();
          }}
        >
          <p>Legg til et nytt arrangement</p>
        </button>
      </div>
      <div class="mainContainerContent">
        {#each events as event}
          <div class="eventCard">
            <div class="eventCardItem">
              <div class="eventCardText">
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

                {#if selectedEvent === event}
                  <div id="details">
                    <p>
                      <strong>Varighet:</strong>
                      {selectedEvent.duration} timer
                    </p>
                    <p><strong>Sted:</strong> {selectedEvent.place}</p>
                    <p><strong>Arrangør:</strong> {selectedEvent.organizer}</p>
                    <p><strong>Info:</strong>{selectedEvent.info}</p>
                  </div>
                {/if}
              </div>
              <div class="eventCardButtons">
                {#if canEdit(event.createdBy)}
                  <button aria-label="Change" on:click={editEvent(event)}>
                    <p>Endre</p>
                  </button>
                  <button aria-label="Delete" on:click={removeEvent(event.id)}>
                    <p>Slett</p>
                  </button>
                {/if}
                <button
                  aria-label="Details"
                  on:click={() => {
                    showEventDetails(event);
                  }}
                >
                  <p>Detaljer</p>
                </button>
              </div>
            </div>
          </div>
        {/each}

        <form
          on:submit|preventDefault={handleSubmit}
          id="mainForm"
          class="mainContainerForm"
        >
          <h2>Legg til arrangement</h2>
          <div class="titleContainer">
            <label aria-label="title" for="title" class="titleLabel">Navn</label
            >
            <input
              type="text"
              bind:value={event.title}
              bind:this={inputElement}
              placeholder="Navn på arrangementet"
              class="form-control"
            />
          </div>
          <div class="date">
            <label aria-label="date" for="date" class="dateLabel"
              >Dato og klokkeslett</label
            >
            <p class="formLabel">
              Husk å legge til dato og klokkeslett, også når du skal endre.
            </p>
            <input
              type="datetime-local"
              bind:value={event.date}
              class="form-control datetime-input"
            />
          </div>

          <div class="duration">
            <label aria-label="duration" for="duration" class="durationLabel"
              >Varighet</label
            >
            <input
              type="number"
              bind:value={event.duration}
              placeholder="Timer"
              class="form-control"
            />
          </div>
          <div class="place">
            <label aria-label="place" for="place" class="placeLabel">Sted</label
            >
            <input
              type="text"
              bind:value={event.place}
              placeholder="Sted"
              class="form-control"
            />
          </div>
          <div class="organizerContainer">
            <label aria-label="organizer" for="organizer" class="organizerLabel"
              >Arrangør</label
            >
            <input
              type="text"
              bind:value={event.organizer}
              placeholder="Arrangør"
              class="form-control"
            />
          </div>
          <div class="infoContainer">
            <label aria-label="Info" for="info" class="infoLabel">Info</label>
            <textarea
              bind:value={event.info}
              rows="3"
              placeholder="Info om arrangementet"
              class="form-control"
            />
          </div>
          {#if error}
            <div class="error">
              <p>
                Informasjonen du har skrevet inn stemmer ikke, vennligst prøv
                igjen. Har du husket å legge inn dato og klokkeslett?
              </p>
            </div>
          {/if}
          <div class="buttonContainer">
            <button
              aria-label="Save or update"
              class="saveButton"
              disabled={!event.title}
            >
              <span class="ms-2">
                {#if !editStatus}Lagre{:else}Oppdater{/if}
              </span>
            </button>
            {#if editStatus}
              <button
                aria-label="cancel"
                on:click={onCancel}
                class="cancelButton">Avbryt</button
              >
            {/if}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  </div>
{/if}

<style>
  /* Heading styles */
  h2 {
    padding-top: 30px;
    margin-bottom: 5px;
    font-size: 1.4em;
  }

  /* Main container styles */
  .mainContainer {
    background-image: url("/backgroundapp/bakgrunnKalender.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    max-width: 430px;
    min-height: 100vh;
    padding-top: 50px;
    position: relative;
    width: 100%;
  }

  /* Main container rectangle styles */
  .mainContainerRectangle {
    background-color: #fefaef;
    border-radius: 30px 30px 0 0;
    bottom: 0;
    height: 75%;
    overflow: scroll;
    padding: 30px;
    position: absolute;
    width: 100%;
  }

  /* Main container content styles */
  .mainContainerContent {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5em;
  }
  /*Main container header styles*/
  .mainContainerHeader {
    display: flex;
    flex-direction: column;
  }
  .mainContainerHeader Button {
    background: #fbc9be;
    color: #695356;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-size: 1em;
    padding: 1em;
    margin: 0.5em 0;
    border-radius: 5px;
    width: 100%;
  }

  /* Main container form styles */
  .mainContainerForm {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .mainContainerForm input,
  textarea,
  input[type="datetime-local"] {
    background: #fbc9be;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    border: none;
    border-radius: 15px;
    display: block;
    padding: 1em;
    margin: 0.5em 0;
    width: 100%;
    min-height: 3.5em;
  }

  .mainContainerForm textarea::placeholder {
    color: #695356;
  }

  .mainContainerForm input::placeholder {
    color: #695356;
  }

  .mainContainerForm label {
    font-size: 1.2em;
    margin: 0.5em 0;
  }

  .datetime-input {
    border: none;
    box-sizing: border-box;
    outline: 0;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }

  .formLabel {
    font-size: 0.8em;
    margin-bottom: 5px;
  }

  /* Event card styles */
  .eventCard {
    background: #fbc9be;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    width: 100%;
  }
  .eventCardButtons {
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
  }
  .eventCardButtons button {
    background: #fefaef;
    color: #695356;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    margin: 2px;
    padding: 5px;
    text-decoration: none;
    width: 8em;
  }
  .eventCardItem {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .error {
    margin: 15px;
    font-size: 0.8em;
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

  /* Button styles */
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
  .buttonContainer button {
    background: #fbc9be;
    color: #695356;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 5px;
    border-radius: 15px;
    width: 10em;
    height: 3em;
  }
  .mainContainer button {
    border: none;
    cursor: pointer;
  }

  /* Event detail styles */
  #details {
    background: #fbc9be;
    border-radius: 15px;
    width: 100%;
  }
  #details p,
  h3 {
    margin: 5px 0;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
      width: 100%;
    }
    .mainContainerContent {
      padding: 2em 10em;
    }
    .mainContainerHeader {
      padding: 2em 10em;
    }
    .eventCardButtons {
      display: flex;
      flex-direction: column;
    }
    .eventCardItem {
      display: flex;
      flex-direction: row;
    }
    .eventCardText {
      width: 80%;
    }
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
      background-image: url("/backgrounddesktop/BackgroundDesktop4.jpg");
    }
    .mainContainerContent {
      padding: 2em 10em;
    }
    .mainContainerHeader {
      padding: 2em 10em;
    }
    .eventCardButtons {
      display: flex;
      flex-direction: column;
    }
    .eventCardItem {
      display: flex;
      flex-direction: row;
    }
    .eventCardText {
      width: 80%;
    }
  }
</style>
