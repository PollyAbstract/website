<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet;
  }

  let { children, class: className, ...rest }: Props = $props();
</script>

<h1 class={[`headline`, className]} {...rest}>
  {@render children()}
</h1>

<style lang="scss">
  @use '~styles/mixins' as *;

  .headline {
    margin: 0;
    display: block;
    font-family: 'Fobble', sans-serif;
    color: #3D072E;
    font-size: 3rem;
    line-height: 2.5rem;

    @include smUp {
      font-size: 3.5rem;
      line-height: 3rem;
    }

    @include mdUp {
      font-size: 4rem;
      line-height: 3.5rem;
    }

    @include lgUp {
      font-size: 4.5rem;
      line-height: 4rem;
    }

    @include xlUp {
      font-size: 5rem;
      line-height: 4.5rem;
    }

    @include xxlUp {
      font-size: 5.5rem;
      line-height: 5rem;
    }
  }
</style>
