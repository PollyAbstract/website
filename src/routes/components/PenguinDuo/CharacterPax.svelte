<script lang="ts">
  import PaxImage from '~assets/images/character_pax.png?enhanced';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLImageElement> {}

  let { class: className, ...rest }: Props = $props();
</script>

<enhanced:img
  src={PaxImage}
  alt="Pax standing towards Polly"
  class={['penguin-duo__pax', className]}
  {...rest}
/>

<style lang="scss">
  @use '~styles/mixins' as *;

  @keyframes fadeInFromBottomLeft {
    0% {
      opacity: 0;
      transform: translate(-10%, 30%);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .penguin-duo__pax {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
    width: 140px;
    aspect-ratio: 151 / 227; /* ≈ 0.665 */
    animation: fadeInFromBottomLeft 1.2s ease-out forwards;

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
