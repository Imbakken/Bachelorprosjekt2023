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
    <img src="/logo/Heimat.png" alt="Heimat logo" />
  </div>
  <form>
    {#if error}
      <p class="error">
        Informasjonen du har skrevet inn stemmer ikke, vennligst prøv igjen.
      </p>
    {/if}
    <label>
      <input bind:value={email} type="email" placeholder="Email" />
    </label>
    <label>
      <input bind:value={password} type="password" placeholder="Password" />
    </label>

    <div class="submitBtn">
      <button on:click={handleAuthenticate} type="button">
        {#if authenticating}
          <i class="fa-solid fa-spinner loadingSpinner" />
        {:else}
          Logg inn
        {/if}
      </button>
    </div>
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
    margin-bottom: 5em;
  }
  .logoContainer {
    padding: 4em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logoContainer img {
    width: 80%;
    height: auto;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  form,
  .options {
    width: 80%;
    margin: 0 auto;
  }
  form input {
    width: 100%;
  }
  form label {
    position: relative;
    border-bottom: 1px solid #db7b65;
  }
  form input {
    border: none;
    background: transparent;
    color: #695356;
    padding: 7% 0;
    font-size: 1em;
    font-family: "Poppins", sans-serif;
  }
  form button {
    background: #fbc9be;
    color: #695356;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
    padding: 14px 0;
    margin: 5px;
    border-radius: 15px;
    width: 10em;
    cursor: pointer;
    display: grid;
    place-items: center;
    border: none;
  }
  .submitBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7%;
  }
  .error {
    color: #695356;
    font-size: 1em;
    text-align: center;
  }
  .options {
    padding: 14px 0;
    overflow: hidden;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .options p a {
    color: #695356;
    text-decoration: none;
  }
  .options p a:hover {
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
  @media (min-width: 1200px) and (max-width: 1920px) {
    .logoContainer img {
      width: 40%;
      height: auto;
    }
    form {
      width: 40%;
    }
  }
</style>
