<script lang="ts">
  import HeartImage from '~assets/images/heart.png?enhanced';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLImageElement> {}

  let { class: className, ...rest }: Props = $props();
</script>

<enhanced:img src={HeartImage} alt="Heart beating to indicate love between them" class={["penguin-duo__heart", className]} {...rest} />

<style lang="scss">
  @use '~styles/mixins' as *;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0);
      transform-origin: bottom;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.15);
    }
    30% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.08);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  .penguin-duo__heart {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;
    width: 64px;
    aspect-ratio: 44 / 38; /* ≈ 1.158 */
    opacity: 0;
    transform: scale(0);
    animation: appear 0.6s ease-out 1.2s forwards, heartbeat 1.2s ease-in-out 1.8s infinite;
    transform-origin: center;

    @include smUp {
      width: 72px;
    }

    @include mdUp {
      width: 80px;
    }

    @include lgUp {
      width: 88px;
    }

    @include xlUp {
      width: 96px;
    }

    @include xxlUp {
      width: 104px;
    }
  }
</style>
