<script>
  import ArrowLeft from "../icons/ArrowLeft.svelte";

  function goBack() {
    window.history.back();
  }
</script>

<div class="buttonContainer">
  <button class="btn" aria-label="Go back" on:click={goBack}
    ><ArrowLeft />Tilbake</button
  >
</div>

<style>
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer button {
    background: none;
    color: #695356;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 5px;
    border-radius: 15px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
