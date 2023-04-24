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
      console.error(err);
    };
  });

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
    } catch (error) {
      console.error(error);
    }
  };

  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    return currentUser && createdBy === currentUser.uid;
  }

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
                <p>{message.description}</p>
                <div class="messageCardParagraph">
                  <p>{message.date.toDate().toLocaleString()}</p>
                  <p>Skrevet av {message.author}</p>
                </div>
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
      </div>
    </div>
  </div>
{/if}

<style>
  h2 {
    padding: 30px 0 30px 0;
  }
  h1 {
    padding-bottom: 30px;
  }
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
  .messageCardParagraph {
    font-size: 0.8em;
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
  .messageCardButtons {
    display: flex;
    justify-content: space-between;
  }
  .messageCardItem {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  .mainContainer button {
    border: none;
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
