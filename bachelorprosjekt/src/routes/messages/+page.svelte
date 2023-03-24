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
  } from "firebase/firestore";
  import Toastify from "toastify-js";
  import { onDestroy } from "svelte";

  let message = {
    title: "",
    description: "",
  };

  let messages = [];
  let inputElement;
  let editStatus = false;
  let currentId = "";

  const unsub = onSnapshot(
    collection(db, "messages"),
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
    message = { title: "", description: "" };
    inputElement.focus();
  };

  const onCancel = () => {
    editStatus = false;
    currentId = "";
    message = { title: "", description: "" };
  };

  onDestroy(unsub);
</script>

{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRow">
      <div class="xxx">
        <form on:submit|preventDefault={handleSubmit} class="mainContainerForm">
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
            <button on:click={authHandlers.logout}>
              <i class="fa-solid fa-right-from-bracket" />
              <p>Logout</p></button
            >
          </div>

          <div class="buttonContainer">
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

        {#each messages as message}
          <div class="card card-body mt-2">
            <div class="d-flex justify-content-between">
              <h3>{message.title}</h3>
              <p>{message.description}</p>
              <button on:click={editMessage(message)}>
                <i class="fa-regular fa-pen-to-square" />
                <p>Endre</p>
              </button>
            </div>
            <div>
              <button on:click={removeMessage(message.id)}>
                <i class="fa-regular fa-trash-can" />
                <p>Slett</p>
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .mainContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 24px;
    padding: 24px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headerBtns {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .headerContainer button {
    background: #db7b65;
    color: #fefaef;
    padding: 10px 18px;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .headerContainer button i {
    font-size: 1.1rem;
  }
  .headerContainer button:hover {
    opacity: 0.7;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
  .enterMessage {
    display: flex;
    align-items: stretch;
    border: 1px solid #db7b65;
    border-radius: 5px;
    overflow: hidden;
  }
  .errorBorder {
    border-color: #db7b65 !important;
  }
  .enterMessage input {
    background: transparent;
    border: none;
    padding: 14px;
    color: #db7b65;
    flex: 1;
  }
  .enterMessage input:focus {
    outline: none;
  }
  .enterMessage button {
    padding: 0 28px;
    background: #db7b65;
    border: none;
    color: #fefaef;
    font-weight: 600;
    cursor: pointer;
  }
  .enterMessage button:hover {
    background: transparent;
  }
</style>
