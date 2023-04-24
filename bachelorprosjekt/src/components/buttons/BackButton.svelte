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
    color: #695356;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 5px;
    border-radius: 15px;
    width: 10em;
  }
</style>
