<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<section class="section__container">
  {@render children()}
</section>

<style lang="css">
  .section__container {
    width: 100%;
    background: beige;
  }
</style>
