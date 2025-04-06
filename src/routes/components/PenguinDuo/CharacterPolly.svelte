<script lang="ts">
  import PollyImage from '~assets/images/character_polly.png?enhanced';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLImageElement> {}

  let { class: className, ...rest }: Props = $props();
</script>

<enhanced:img 
  src={PollyImage} 
  alt="Polly standing towards Pax" 
  class={["penguin-duo__polly", className]} 
  {...rest} 
/>

<style lang="scss">
  @use '~styles/mixins' as *;

  @keyframes fadeInFromBottomRight {
    0% {
      opacity: 0;
      transform: translate(10%, 30%);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .penguin-duo__polly {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
    width: 140px;
    aspect-ratio: 144 / 224; /* ≈ 0.643 */
    animation: fadeInFromBottomRight 1.2s ease-out forwards;

    @include smUp {
      width: 160px;
    }

    @include mdUp {
      width: 180px;
    }

    @include lgUp {
      width: 200px;
    }

    @include xlUp {
      width: 220px;
    }

    @include xxlUp {
      width: 240px;
    }
  }
</style>
