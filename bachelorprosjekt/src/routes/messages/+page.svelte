<script>
  import { db } from "../../lib/firebase/firebase";
  import { authHandlers, authStore } from "../../store/store";
  import { getDoc, doc, setDoc } from "firebase/firestore";
  import MessageItem from "../../components/MessageItem.svelte";

  let messageList = [];
  let currMessage = "";
  let error = false;

  authStore.subscribe((curr) => {
    messageList = curr.data.messages;
  });

  function addMessage() {
    error = false;
    if (!currMessage) {
      error = true;
    }
    messageList = [...messageList, currMessage];
    currMessage = "";
  }

  function editMessage(item) {
    let newMessageList = [...messageList].filter((val, i) => {
      console.log(i, item, i !== item);
      return i != item;
    });
    currMessage = messageList[item];
    messageList = newMessageList;
  }

  function removeMessage(item) {
    let newMessageList = [...messageList].filter((val, i) => {
      console.log(i, item, i !== item);
      return i != item;
    });
    messageList = newMessageList;
  }

  async function saveMessages() {
    try {
      const userRef = doc(db, "users", $authStore.user.uid);
      await setDoc(
        userRef,
        {
          messages: messageList,
        },
        { merge: true }
      );
    } catch (err) {
      console.log("There was an error saving your information");
    }
  }
</script>

{#if !$authStore.loading}
  <div class="mainContainer">
    <div class="headerContainer">
      <h1>message List</h1>
      <div class="headerBtns">
        <button on:click={saveMessages}>
          <i class="fa-regular fa-floppy-disk" />
          <p>Save</p></button
        >
        <button on:click={authHandlers.logout}>
          <i class="fa-solid fa-right-from-bracket" />
          <p>Logout</p></button
        >
      </div>
    </div>
    <main>
      {#if messageList.length === 0}
        <p>You have nothing to do!</p>
      {/if}
      {#each messageList as message, item}
        <MessageItem {message} {item} {removeMessage} {editMessage} />
      {/each}
    </main>
    <div class={"enterMessage " + (error ? "errorBorder" : "")}>
      <input bind:value={currMessage} type="text" placeholder="Enter message" />
      <button on:click={addMessage}>ADD</button>
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
