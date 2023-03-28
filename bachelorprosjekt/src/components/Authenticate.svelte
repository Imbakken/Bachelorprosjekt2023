<script>
  import { authHandlers } from "../store/store";
  let email = "";
  let password = "";
  let confirmPass = "";
  let error = false;
  let noUser = false;
  let authenticating = false;
  async function handleAuthenticate() {
    if (authenticating) {
      return;
    }
    if (!email || !password || (noUser && !confirmPass)) {
      error = true;
      return;
    }
    authenticating = true;
    try {
      if (!noUser) {
        await authHandlers.login(email, password);
      }
    } catch (err) {
      console.log("There was an auth error", err);
      error = true;
      authenticating = false;
    }
  }
</script>

<div class="authContainer">
  <div class="logoContainer">
    <h1>VIVO</h1>
    <p>En enklere studenthverdag</p>
  </div>
  <form>
    {#if error}
      <p class="error">The information you have entered is not correct</p>
    {/if}
    <label>
      <input bind:value={email} type="email" placeholder="Email" />
    </label>
    <label>
      <input bind:value={password} type="password" placeholder="Password" />
    </label>

    <button on:click={handleAuthenticate} type="button" class="submitBtn">
      {#if authenticating}
        <i class="fa-solid fa-spinner loadingSpinner" />
      {:else}
        Logg inn
      {/if}
    </button>
  </form>
  <div class="options">
    <p>
      <a href="/nouser">Har du ikke bruker?</a>
    </p>
  </div>
</div>

<style>
  .authContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 24px;
  }
  .logoContainer {
    padding: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  form,
  .options {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }
  form input {
    width: 100%;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
  }
  form label {
    position: relative;
    border-bottom: 1px solid #db7b65;
  }
  form input {
    border: none;
    background: transparent;
    color: #db7b65;
    padding: 14px;
  }
  form input:focus {
    border: none;
    outline: none;
  }
  form label:focus-within {
    border-color: #db7b65;
  }
  form button {
    background: #fbcec3;
    color: #db7b65;
    border: 1px solid #db7b65;
    padding: 14px 0;
    margin: 24px 0;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1rem;
    display: grid;
    place-items: center;
  }
  .error {
    color: #db7b65;
    font-size: 0.9rem;
    text-align: center;
  }
  .options {
    padding: 14px 0;
    overflow: hidden;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .options a {
    color: #db7b65;
    text-decoration: none;
  }
  .options a:hover {
    font-weight: bold;
  }
  .loadingSpinner {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .logoContainer h1 {
    font-family: "Gloock", serif;
    color: #255f63;
    text-align: center;
    font-size: 3rem;
  }
  .logoContainer p {
    font-family: "Comfortaa", cursive;
    text-align: center;
    font-size: 1rem;
  }
</style>
