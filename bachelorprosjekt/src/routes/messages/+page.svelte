<script>
  import { db } from "../../lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
  import {
    onSnapshot,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    orderBy,
  } from "firebase/firestore";
  import Toastify from "toastify-js";
  import { onDestroy } from "svelte";

  let message = {
    title: "",
    description: "",
    date: null,
    author: "",
  };

  let messages = [];
  let inputElement;
  let editStatus = false;
  let currentId = "";

  const unsub = onSnapshot(
    collection(db, "messages"),
    orderBy("date", "asc"),
    (querySnapshot) => {
      messages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    },
    (err) => {
      console.error(err);
    }
  );

  const addMessage = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        ...message,
        createdAt: Date.now(),
      });
      Toastify({
        text: "New message created",
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const editMessage = (currentMessage) => {
    currentId = currentMessage.id;
    message.title = currentMessage.title;
    message.description = currentMessage.description;
    message.date = currentMessage.date;
    message.author = currentMessage.author;
    editStatus = true;
  };

  const removeMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateMessage = async () => {
    try {
      await updateDoc(doc(db, "messages", currentId), message);
      Toastify({
        text: "Message updated",
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    if (!message.title) return;
    if (!editStatus) {
      addMessage();
    } else {
      updateMessage();
      editStatus = false;
      currentId = "";
    }
    message = { title: "", description: "", date: null, author: "" };
    inputElement.focus();
  };

  const onCancel = () => {
    editStatus = false;
    currentId = "";
    message = { title: "", description: "", date: null, author: "" };
  };

  onDestroy(unsub);
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
                <p>{message.description}</p>
                <div class="messageCardParagraph">
                  <p>{message.date}</p>
                  <p>Skrevet av {message.author}</p>
                </div>
              </div>
              <div class="messageCardButton">
                <button on:click={editMessage(message)}>
                  <i class="fa-regular fa-pen-to-square" />
                  <p>Endre</p>
                </button>
                <button on:click={removeMessage(message.id)}>
                  <i class="fa-regular fa-trash-can" />
                  <p>Slett</p>
                </button>
              </div>
            </div>
          </div>
        {/each}

        <form on:submit|preventDefault={handleSubmit} class="mainContainerForm">
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
            <label for="date" class="dateLabel">Dato</label>
            <input
              type="date"
              bind:value={message.date}
              placeholder="Dato"
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

          <div class="buttonContainer">
            <button on:click={authHandlers.logout}>
              <i class="fa-solid fa-right-from-bracket" />
              <p>Logout</p></button
            >
            <button class="saveButton" disabled={!message.title}>
              <i class="fa-regular fa-floppy-disk" />
              <span class="ms-2">
                {#if !editStatus}Lagre{:else}Oppdater{/if}
              </span>
            </button>
            {#if editStatus}
              <button on:click={onCancel} class="cancelButton">Avbryt</button>
            {/if}
          </div>
        </form>
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
    background-image: url("../../assets/bakgrunnBeskjeder.jpg");
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
  .messageCard p {
    color: #000000;
  }
  .messageCardButton {
    display: flex;
    flex-direction: column;
  }
  .messageCardButton button {
    margin-top: 10px;
    padding: 10px;
  }
  h2 {
    padding: 30px 0 30px 0;
  }
  h1 {
    padding-bottom: 30px;
  }
  .messageCardItem {
    padding: 10px;
    display: flex;
    justify-content: space-between;
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
  .saveButton {
    color: #000000;
  }
  .messageCardParagraph {
    font-size: 0.6em;
  }
  .messageCardText {
    width: 75%;
  }
</style>
