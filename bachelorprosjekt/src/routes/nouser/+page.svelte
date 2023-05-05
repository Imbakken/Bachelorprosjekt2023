<script>
  import ArrowLeft from "../../components/icons/ArrowLeft.svelte";
</script>

<div class="mainContainer">
  <div class="mainContainerContainer">
    <div class="textContainer">
      <h1>Har du ikke bruker?</h1>
      <p>
        Denne appen er kun for eksisterende brukere, som bor i en studentbolig
        tilknyttet oss. Vennligst gå inn på hjemmesiden vår for å lage en
        bruker.
      </p>
      <div class="linkContainer">
        <div class="arrowContainer">
          <a class="btn" aria-label="Back to login" href="/"
            ><ArrowLeft />Tilbake til innlogging</a
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .mainContainer {
    min-height: 100vh;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    padding-top: 6em;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/backgroundapp/landingPage.jpg");
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
  .mainContainerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10%;
    color: #695356;
  }
  h1 {
    font-family: "Comfortaa", cursive;
  }
  .linkContainer {
    padding-top: 10px;
  }
  .linkContainer a {
    color: #695356;
  }
  .linkContainer a:hover {
    font-weight: bold;
  }
  .btn {
    display: flex;
    align-items: center;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
      background-image: url("/backgroundapp/BackgroundIpad.jpg");
    }
    .textContainer {
      width: 60%;
    }
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
      background-image: url("/backgrounddesktop/BackgroundInfo.jpg");
    }
    .textContainer {
      width: 60%;
    }
  }
</style>
