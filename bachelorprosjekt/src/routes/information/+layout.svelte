<script>
  import BackButton from "../../components/buttons/BackButton.svelte";
</script>

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

<style>
  .mainContainer {
    min-height: 100vh;
    background: #fefaef;
    color: #db7b65;
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
</style>
