<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    background?: string;
  }

  let { background, children }: Props = $props();
</script>

<section class="section" style="background: {background};">
  <div class="section__content">
    {@render children()}
  </div>
</section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .section {
    border-top: 3px solid black;

    @include mdUp {
      border-top: 4px solid black;
    }
  }

  .section__content {
    @include container;
  }
</style>
