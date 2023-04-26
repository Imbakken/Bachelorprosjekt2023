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

  import BackButton from "../../components/buttons/BackButton.svelte";
  import DateIcon from "../../components/icons/DateIcon.svelte";

  let message = {
    title: "",
    description: "",
    date: Timestamp.fromDate(new Date()),
    author: "",
  };

  let messages = [];
  let inputElement;
  let editStatus = false;
  let currentId = "";
  let error = false;

  // Get events from Firestore and store them in the events array
  onMount(async () => {
    const today = new Date(); // get today's date
    const q = query(
      collection(db, "messages"),
      where("date", ">=", Timestamp.fromDate(today)),
      orderBy("date", "asc")
    );
    const querySnapshot = await getDocs(q);

    messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    (err) => {
      console.log(err);
    };
  });

  // Add the message object to Firestore
  const addMessage = async () => {
    const currentUser = auth.currentUser;
    try {
      await addDoc(collection(db, "messages"), {
        ...message,
        createdAt: Timestamp.now(),
        createdBy: currentUser.uid,
      });
      Toastify({
        text: "New message created",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
      error = true;
    }
  };

  // Check if the current user can edit the message based on their uid
  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    return currentUser && createdBy === currentUser.uid;
  }

  // Populate the message object with the data of the selected message and enable edit mode
  const editMessage = (currentMessage) => {
    currentId = currentMessage.id;
    message.title = currentMessage.title;
    message.description = currentMessage.description;
    message.date = currentMessage.date;
    message.author = currentMessage.author;
    editStatus = true;

    // Scroll to the form
    const form = document.getElementById("mainForm");
    form.scrollIntoView({ behavior: "smooth" });
  };

  // Remove the message with the given id from Firestore
  const removeMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      Toastify({
        text: "Message deleted",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
    }
  };

  // Update the event with the currentId in Firestore with the data from the event object
  const updateMessage = async () => {
    try {
      await updateDoc(doc(db, "messages", currentId), message);
      Toastify({
        text: "Message updated",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
      error = true;
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!message.title) return;
    message.date = Timestamp.fromDate(new Date(message.date));
    if (!editStatus) {
      addMessage();
    } else {
      updateMessage();
      editStatus = false;
      currentId = "";
    }
    message = {
      title: "",
      description: "",
      date: Timestamp.fromDate(new Date()),
      author: "",
    };
    inputElement.focus();
  };

  // Cancel
  const onCancel = () => {
    editStatus = false;
    currentId = "";
    message = {
      title: "",
      description: "",
      date: Timestamp.fromDate(new Date()),
      author: "",
    };
  };
</script>

<!-- Checks if the user is logged in -->
{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <h1>Beskjeder</h1>
      <div class="mainContainerContent">
        {#each messages as message}
          <div class="messageCard">
            <div class="messageCardItem">
              <div class="messageCardText">
                <h3>{message.title}</h3>
                <div class="dateContainer">
                  <DateIcon />
                  <p>
                    <strong>{message.date.toDate().toLocaleString()}</strong>
                  </p>
                </div>
                <p>Skrevet av {message.author}</p>
                <p>{message.description}</p>
              </div>
              <div class="messageCardButtons">
                {#if canEdit(message.createdBy)}
                  <button on:click={editMessage(message)}>
                    <p>Endre</p>
                  </button>
                  <button on:click={removeMessage(message.id)}>
                    <p>Slett</p>
                  </button>
                {/if}
              </div>
            </div>
          </div>
        {/each}

        <form
          on:submit|preventDefault={handleSubmit}
          id="mainForm"
          class="mainContainerForm"
        >
          <h2>Legg til en ny beskjed</h2>
          <div class="titleContainer">
            <label for="title" class="titleLabel">Tittel</label>
            <input
              type="text"
              bind:value={message.title}
              bind:this={inputElement}
              placeholder="Tittel"
              class="form-control"
            />
          </div>

          <div class="descriptionContainer">
            <label for="description" class="descriptionLabel">Beskjed</label>
            <textarea
              bind:value={message.description}
              rows="3"
              placeholder="Skriv din beskjed her"
              class="form-control"
            />
          </div>
          <div class="date">
            <label for="date" class="dateLabel">Dato og klokkeslett</label>
            <input
              type="datetime-local"
              bind:value={message.date}
              placeholder="Dato og klokkeslett"
              class="form-control"
            />
          </div>
          <div class="authorContainer">
            <label for="author" class="authorLabel">Skrevet av</label>
            <input
              type="text"
              bind:value={message.author}
              placeholder="Skrevet av"
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
            <button class="saveButton" disabled={!message.title}>
              <span class="ms-2">
                {#if !editStatus}Lagre{:else}Oppdater{/if}
              </span>
            </button>

            {#if editStatus}
              <button on:click={onCancel} class="cancelButton">Avbryt</button>
            {/if}
          </div>
        </form>
        <BackButton />
      </div>
    </div>
  </div>
{/if}

<style>
  /* Heading styles */
  h1 {
    padding-bottom: 30px;
  }
  h2 {
    padding: 30px 0 30px 0;
  }
  h3 {
    font-size: 1.5em;
  }

  /* General styles */
  .mainContainer {
    min-height: 100vh;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("../../assets/bakgrunnBeskjeder.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 50px;
  }
  .mainContainerContent {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 25px;
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

  /* Message card styles */
  .messageCard {
    background: #fbc9be;
    border-radius: 15px;
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
  .messageCardButtons {
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
  }
  .messageCardButtons button {
    background: #fefaef;
    color: #695356;
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    text-decoration: none;
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    width: 10em;
  }

  .messageCardItem {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .error {
    margin: 15px;
    font-size: 0.8em;
  }

  .dateContainer {
    display: flex;
    align-items: center;
  }

  /* Form styles */
  .mainContainerForm {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .mainContainerForm input,
  textarea,
  input[type="datetime-local"] {
    background: #fbc9be;
    color: #695356;
    border: none;
    border-radius: 15px;
    display: block;
    padding: 15px;
    min-width: 100%;
    min-height: 2.4em;
  }

  /* Button styles */
  .mainContainer button,
  .buttonContainer button {
    border: none;
    cursor: pointer;
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
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
      width: 100%;
    }

    .messageCardButtons {
      display: flex;
      flex-direction: column;
    }
    .messageCardItem {
      display: flex;
      flex-direction: row;
    }
    .messageCardText {
      width: 80%;
    }
  }
</style>
