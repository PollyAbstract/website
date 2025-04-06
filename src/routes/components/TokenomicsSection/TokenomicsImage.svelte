<script lang="ts">
  import PollyHatImage from '~assets/images/polly_hat.png?enhanced';
</script>

<div class="tokenomics-image__wrapper">
  <enhanced:img
    src={PollyHatImage}
    alt="Polly with a towel on it's head"
    class="tokenomics-image"
  />
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .tokenomics-image__wrapper {
    position: absolute;
    right: -20px;
    top: 0;
    width: 100%;
    max-width: 175px;
    aspect-ratio: 2129 / 1986;
    opacity: 0.2;

    @include smUp {
      opacity: 1;
    }

    @include xlUp {
      right: -40px;
      max-width: 250px;
    }
  }

  .tokenomics-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
    transform-origin: right top;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
