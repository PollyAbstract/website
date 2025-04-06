<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    image?: { src: any, alt?: string };
  }

  let { children, image, ...rest }: Props = $props();
</script>

<header class="scene" {...rest}>
  {#if image}
    <div class="scene__background">
      <enhanced:img src={image.src} alt={image.alt || "Scene background"} class="scene__background__image" />
    </div>
  {/if}
  <div class="scene__content">
    {@render children()}
  </div>
</header>

<style lang="scss">
  @use '~styles/mixins' as *;

  .scene {
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .scene__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .scene__background__image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-position: 10%;
    object-fit: cover;

    @include mdUp {
      object-position: 80%;
    }

    @include xlUp {
      object-position: center;
    }
  }

  .scene__content {
    height: 100%;
    width: 100%;
    z-index: 1;
    @include container;
    @include flexCenter;
  }
</style>
