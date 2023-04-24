<script>
  import { db, auth } from "../../lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
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
  import BackButton from "../../components/buttons/BackButton.svelte";

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
      console.error(err);
    };
  });

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
    } catch (error) {
      console.error(error);
    }
  };

  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    Event;
    return currentUser && createdBy === currentUser.uid;
  }

  const editEvent = (currentEvent) => {
    currentId = currentEvent.id;
    event.title = currentEvent.title;
    event.info = currentEvent.info;
    event.date = currentEvent.date;
    event.duration = currentEvent.duration;
    event.place = currentEvent.place;
    event.organizer = currentEvent.organizer;
    editStatus = true;
  };

  const removeEvent = async (id) => {
    try {
      await deleteDoc(doc(db, "events", id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateEvent = async () => {
    try {
      await updateDoc(doc(db, "events", currentId), event);
      Toastify({
        text: "Event updated",
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

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

  const showEventDetails = (currentEvent) => {
    selectedEvent = currentEvent;
  };
</script>

<!-- Checks if the user is logged in -->
{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <h1>Arrangementer</h1>
      <div class="mainContainerContent">
        {#each events as event}
          <div class="messageCard">
            <div class="messageCardItem">
              <div class="messageCardText">
                <div class="messageCardParagraph">
                  <p>{event.date.toDate().toLocaleString()}</p>
                  <p>Arrangert av {event.organizer}</p>
                </div>
              </div>
              <h3>{event.title}</h3>
              <p class="placeContainer">{event.place}</p>
              <p>{event.info}</p>
              <div class="messageCardButtons">
                {#if canEdit(event.createdBy)}
                  <button on:click={editEvent(event)}>
                    <p>Endre</p>
                  </button>
                  <button on:click={removeEvent(event.id)}>
                    <p>Slett</p>
                  </button>
                {/if}
                <button on:click={() => showEventDetails(event)}>
                  <p>Detaljer</p></button
                >
              </div>
            </div>
          </div>
        {/each}
        {#if selectedEvent !== null}
          <div>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.info}</p>
            <p>
              Dato og klokkeslett: {selectedEvent.date
                .toDate()
                .toLocaleString()}
            </p>
            <p>Varighet: {selectedEvent.duration} timer</p>
            <p>Sted: {selectedEvent.place}</p>
            <p>Arrangør: {selectedEvent.organizer}</p>
            <button on:click={() => (selectedEvent = null)}>Close</button>
          </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="mainContainerForm">
          <h2>Legg til arrangement</h2>
          <div class="titleContainer">
            <label for="title" class="titleLabel">Navn</label>
            <input
              type="text"
              bind:value={event.title}
              bind:this={inputElement}
              placeholder="Navn på arrangementet"
              class="form-control"
            />
          </div>
          <div class="date">
            <label for="date" class="dateLabel">Dato og klokkeslett</label>
            <input
              type="datetime-local"
              bind:value={event.date}
              placeholder="Dato og klokkeslett"
              class="form-control"
            />
          </div>
          <div class="duration">
            <label for="duration" class="durationLabel">Varighet</label>
            <input
              type="number"
              bind:value={event.duration}
              placeholder="Varighet"
              class="form-control"
            />
          </div>
          <div class="place">
            <label for="place" class="placeLabel">Sted</label>
            <input
              type="text"
              bind:value={event.place}
              placeholder="Sted"
              class="form-control"
            />
          </div>
          <div class="organizerContainer">
            <label for="organizer" class="organizerLabel">Arrangør</label>
            <input
              type="text"
              bind:value={event.organizer}
              placeholder="arrangør"
              class="form-control"
            />
          </div>
          <div class="infoContainer">
            <label for="info" class="infoLabel">Info</label>
            <textarea
              bind:value={event.info}
              rows="3"
              placeholder="Info om arrangementet"
              class="form-control"
            />
          </div>

          <div class="buttonContainer">
            <button class="saveButton" disabled={!event.title}>
              <span class="ms-2">
                {#if !editStatus}Lagre{:else}Oppdater{/if}
              </span>
            </button>
            {#if editStatus}
              <button on:click={onCancel} class="cancelButton">Avbryt</button>
            {/if}
          </div>
          <BackButton />
        </form>
      </div>
    </div>
  </div>
{/if}

<style>
  h1 {
    padding-bottom: 30px;
  }
  .placeContainer {
    font-size: 0.7em;
  }
  .mainContainer {
    min-height: 100vh;
    padding-top: 50px;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("../../assets/bakgrunnKalender.jpg");
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mainContainerForm {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .mainContainerForm input,
  textarea {
    background: #fbc9be;
    border: none;
    border-radius: 15px;
    padding: 15px;
    color: #000000;
    width: 100%;
  }
  .messageCard {
    background: #fbc9be;
    border-radius: 15px;
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
  .messageCardParagraph {
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
  }

  .messageCardItem {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }

  .mainContainer button {
    border: none;
    cursor: pointer;
  }
  .messageCardButtons {
    display: flex;
    justify-content: space-between;
  }
  .messageCardButtons button {
    background: #db7b65;
    font-family: "Poppins", sans-serif;
    font-size: 0.8em;
    text-decoration: none;
    margin: 3px;
    padding: 3px;
    border-radius: 5px;
    width: 100%;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer button {
    background: #fbc9be;
    color: #db7b65;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 24px 5px;
    border-radius: 15px;
    width: 50%;
  }
</style>
