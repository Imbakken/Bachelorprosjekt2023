<script>
  import BackButton from "../../components/buttons/BackButton.svelte";
  import { authStore } from "../../store/store";
</script>

{#if $authStore}
  <div class="mainContainer">
    <div class="mainContainerRectangle">
      <div class="mainContainerParagraph">
        <slot />
        <div class="buttonContainer">
          <BackButton />
        </div>
      </div>
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
    background-image: url("../../assets/bakgrunnInfo.jpg");
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
  .buttonContainer {
    margin: 15px;
  }
</style>
