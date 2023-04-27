<div class="mainContainer">
  <div class="textContainer">
    <h1>Har du ikke bruker?</h1>
    <p>
      Denne appen er kun for eksisterende brukere, som bor i en studentbolig
      tilknyttet oss. Vennligst gå inn på hjemmesiden vår for å lage en bruker.
    </p>
    <div class="linkContainer">
      <p>
        <a href="/">Tilbake til innlogging</a>
      </p>
    </div>
  </div>
</div>

<style>
  .mainContainer {
    min-height: 100vh;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../assets/backgroundapp/bakgrunnIkkeBruker2.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }
  .textContainer {
    width: 85%;
    margin: 0 auto;
    color: #000;
    text-align: center;
  }
  h1 {
    font-family: "Comfortaa", cursive;
    margin: 10px;
  }
  .linkContainer {
    padding-top: 10px;
  }
  .linkContainer p a {
    color: #000;
  }
  .linkContainer p a:hover {
    font-weight: bold;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
      background-image: url("../../assets/backgrounddesktop/BackgroundDesktop5.jpg");
    }
  }
</style>
