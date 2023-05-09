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
    getDoc,
    getFirestore,
    where,
    Timestamp,
  } from "firebase/firestore";
  import Toastify from "toastify-js";
  import { onMount, onDestroy } from "svelte";
  import { getAuth } from "firebase/auth";

  import Footer from "../../components/Footer.svelte";

  let message = {
    title: "",
    description: "",
  };

  let messages = [];
  let inputElement;
  let editStatus = false;
  let currentId = "";
  let error = false;

  onMount(async () => {
    const today = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(today.getDate() - 14); // subtract 14 days

    const q = query(
      collection(db, "messages"),
      where("createdAt", ">=", Timestamp.fromDate(twoWeeksAgo)),
      orderBy("createdAt", "desc")
    );

    try {
      const querySnapshot = await getDocs(q);
      messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      console.log(err);
    }
  });

  const addMessage = async (message) => {
    const auth = getAuth();
    const db = getFirestore();

    // Subscribe to changes in the authenticated user
    auth.onAuthStateChanged(async (user) => {
      let name = "";
      if (user) {
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          // If the user document exists, get the user's name
          name = userSnapshot.data().name;
        }
      }
      const currentUser = auth.currentUser;
      try {
        await addDoc(collection(db, "messages"), {
          ...message,
          createdAt: Timestamp.now(),
          createdBy: currentUser.uid,
          author: name,
        });
        Toastify({
          text: "Ny beskjed er lagt til",
        }).showToast();
        location.reload(); // Refresh the page
      } catch (err) {
        console.log(err);
        error = true;
      }
    });
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
        text: "Beskjeden er slettet",
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
        text: "Beskjeden er oppdatert",
      }).showToast();
      location.reload(); // Refresh the page
    } catch (err) {
      console.log(err);
      error = true;
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!editStatus) {
      addMessage(message); // pass the message object as an argument
    } else {
      updateMessage();
      editStatus = false;
      currentId = "";
    }
    message = {
      title: "",
      description: "",
    };
    inputElement.focus();
  };

  function scrollTo() {
    const formSection = document.getElementById("mainForm");
    formSection.scrollIntoView({ behavior: "smooth" });
  }
  // Cancel
  const onCancel = () => {
    editStatus = false;
    currentId = "";
    message = {
      title: "",
      description: "",
    };
  };
</script>

<!-- Checks if the user is logged in -->
{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <div class="mainContainerHeader">
        <h1>Beskjeder</h1>
        <button
          aria-label="Add a new message"
          on:click={() => {
            scrollTo();
          }}
        >
          <p>Legg til en ny beskjed</p>
        </button>
      </div>
      <div class="mainContainerContent">
        {#each messages as message}
          <div class="messageCard">
            <div class="messageCardItem">
              <div class="messageCardText">
                <h3>{message.title}</h3>
                <p class="small">
                  <strong>{message.createdAt.toDate().toLocaleString()}</strong>
                </p>
                <p class="small">
                  Skrevet av <strong>{message.author}</strong>
                </p>
                <p>{message.description}</p>
              </div>
              <div class="messageCardButtons">
                {#if canEdit(message.createdBy)}
                  <button aria-label="Change" on:click={editMessage(message)}>
                    <p>Endre</p>
                  </button>
                  <button
                    aria-label="Delete"
                    on:click={removeMessage(message.id)}
                  >
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
          <h2>{editStatus ? "Endre beskjed" : "Legg til beskjed"}</h2>
          <p>Beskjeden blir liggende ute i 2 uker.</p>
          <div class="titleContainer">
            <label for="title" aria-label="Title" class="titleLabel"
              >Tittel</label
            >
            <input
              type="text"
              bind:value={message.title}
              bind:this={inputElement}
              placeholder="Tittel"
              class="form-control"
            />
          </div>

          <div class="descriptionContainer">
            <label
              for="description"
              aria-label="Message"
              class="descriptionLabel">Beskjed</label
            >
            <textarea
              bind:value={message.description}
              rows="3"
              placeholder="Skriv din beskjed her"
              class="form-control"
            />
          </div>
          {#if error}
            <div class="error">
              <p>
                Informasjonen du har skrevet inn stemmer ikke, vennligst prøv
                igjen.
              </p>
            </div>
          {/if}
          <div class="buttonContainer">
            <button
              class="saveButton"
              aria-label="Save or update button"
              disabled={!message.title}
            >
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

  /* General styles */
  .mainContainer {
    min-height: 100vh;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("/backgroundapp/bakgrunnBeskjeder.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 50px;
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
    font-size: 1em;
    text-decoration: none;
    padding: 1em;
    margin: 0.5em 0;
    border-radius: 15px;
    width: 100%;
  }
  .mainContainerContent {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5em;
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
  .small {
    font-size: 0.9em;
  }

  /* Form styles */
  .mainContainerForm {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .mainContainerForm input,
  textarea {
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
    height: 3em;
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
    .mainContainerContent {
      padding: 2em 10em;
    }
    .mainContainerHeader {
      padding: 2em 10em;
    }
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
      background-image: url("/backgrounddesktop/BackgroundDesktop3.jpg");
    }
    .mainContainerContent {
      padding: 2em 10em;
    }
    .mainContainerHeader {
      padding: 2em 10em;
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
