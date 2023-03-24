<script>
  export let item;
  export let message;
  export let editMessage;
  export let removeMessage;
</script>

<div class="message">
  <p>
    {item}
    {message}
  </p>
  <div class="actions">
    <i
      on:click={() => {
        editMessage(item);
      }}
      on:keydown={() => {}}
      class="fa-regular fa-pen-to-square"
    />
    <i
      on:click={() => {
        removeMessage(item);
      }}
      on:keydown={() => {}}
      class="fa-regular fa-trash-can"
    />
  </div>
</div>

<style>
  .message {
    border-left: 1px solid #db7b65;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 1.3rem;
  }
  .actions i {
    cursor: pointer;
  }
  .actions i:hover {
    color: #db7b65;
  }
</style>
