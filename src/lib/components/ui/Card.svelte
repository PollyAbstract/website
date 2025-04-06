<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
  }

  let { children, class: className, ...rest }: Props = $props();
</script>

<div class={['card', className]} {...rest}>
  {@render children()}
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .card {
    padding: 1rem;
    width: 100%;
    border: 2px solid black;
    background: white;
    border-radius: 12px;

    @include smUp {
      padding: 1.5rem;
    }

    @include mdUp {
      border-radius: 16px;
      padding: 2rem;
    }

    @include lgUp {
      padding: 2.5rem;
    }

    @include xlUp {
      border-radius: 20px;
      padding: 3rem;
    }

    @include xxlUp {
      padding: 3.5rem;
    }
  }
</style>
