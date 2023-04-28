<script>
  import Footer from "../../components/Footer.svelte";
  import { authStore } from "../../store/store";
</script>

{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <div class="mainContainerParagraph">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
{/if}

<style>
  .mainContainer {
    min-height: 100vh;
    background: #fefaef;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-image: url("/backgroundapp/bakgrunnInfo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .mainContainerRectangle {
    background-color: #fefaef;
    border-radius: 30px 30px 0 0;
    height: 75%;
    width: 100%;
    padding: 30px;
    position: absolute;
    bottom: 0;
    overflow: scroll;
  }
  .mainContainerParagraph {
    margin-bottom: 5em;
  }

  @media (min-width: 430px) and (max-width: 1200px) {
    .mainContainer {
      max-width: 1200px;
      width: 100%;
    }
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    .mainContainer {
      max-width: 1920px;
      background-image: url("/backgrounddesktop/BackgroundDesktop2.jpg");
    }
  }
</style>
