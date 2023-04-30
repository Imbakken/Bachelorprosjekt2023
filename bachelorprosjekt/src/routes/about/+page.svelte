<div class="mainContainer">
  <div class="mainContainerContainer">
    <div class="textContainer">
      <h1>Om prosjektet</h1>
      <p>
        I en gruppe på to studenter har vi jobbet over to semestre i samarbeid
        med Gjestvang Eiendom og Vaager Innovasjon med å utvikle en applikasjon
        for studenter som bor i studentbolig. Målet har vært å lage en
        applikasjon som gjør at opplevelsen av å bo i en studentbolig blir mer
        forutsigbart, sosialt og mindre ensomt. Gjennom hele prosessen har vi
        tatt i bruk innsiktsmetodikk som; intervjuer, spørreundersøkelser,
        personas og designmetoder som; wireframes, lo-fi og hi-fi prototyper.
        Det ferdige produktet er en applikasjon som gjør det mulig å lage
        arrangementer innad i egen studentbolig, se arrangementer i nærheten og
        nødvendig informasjon fra utleier.
      </p>
      <div class="linkContainer">
        <p>
          <a href="/">Kom igang</a>
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
    background: #fefaef;
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
    .textContainer {
      width: 60%;
    }
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
    }
    .textContainer {
      width: 60%;
    }
  }
</style>
