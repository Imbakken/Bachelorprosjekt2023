<script>
  import { authHandlers } from "../../store/store";
</script>

<div class="buttonContainer">
  <button on:click={authHandlers.logout}>Logg ut</button>
</div>

<style>
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  .buttonContainer button {
    background: #fbc9be;
    color: #695356;
    font-family: "Poppins", sans-serif;
    font-size: 0.8em;
    text-decoration: none;
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    border: none;
    width: 10em;
  }
</style>
