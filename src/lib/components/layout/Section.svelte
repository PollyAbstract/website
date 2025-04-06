<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    background?: string;
  }

  let { background, children, class: className, style, ...rest }: Props = $props();
</script>

<section class={['section', className]} style="background: {background}; {style}" {...rest}>
  <div class="section__content">
    {@render children()}
  </div>
</section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .section {
    position: relative;
    overflow: hidden;
    border-top: 3px solid black;

    @include mdUp {
      border-top: 4px solid black;
    }
  }

  .section__content {
    @include container;
  }
</style>
