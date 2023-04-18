<script>
  function goBack() {
    window.history.back();
  }
</script>

<div class="buttonContainer">
  <button on:click={goBack}>Tilbake</button>
</div>

<style>
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer button {
    background: #fbc9be;
    color: #db7b65;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 10px 5px;
    border-radius: 15px;
    width: 50%;
  }
</style>
