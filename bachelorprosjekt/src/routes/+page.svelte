<div class="mainContainer">
  <div class="mainContainerContainer">
    <div class="textContainer">
      <h1>Min studenthverdag</h1>
      <p>
        Dette er en app som gjør at du kan holde full oversikt over hva som
        skjer i boligen din, planlegge hverdagen og bli kjent med andre beboere
      </p>
      <div class="linkContainer">
        <p>
          <a href="/login">Kom igang</a>
        </p>
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
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/backgroundapp/landingPage.jpg");
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5em;
    align-items: center;
    overflow: scroll;
  }

  .textContainer {
    width: 85%;
    margin: 0 auto;
    color: #695356;
  }
  h1 {
    font-family: "Comfortaa", cursive;
    margin: 0.5em 0;
  }
  .linkContainer {
    padding-top: 10px;
  }
  .linkContainer p a {
    color: #695356;
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
