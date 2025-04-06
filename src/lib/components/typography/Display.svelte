<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet,
    class?: ClassValue
  }

  let { children, class: className, ...rest }: Props = $props();
</script>

<h1 class={[`display`, className]} {...rest}>
  {@render children()}
</h1>

<style lang="scss">
  @use '~styles/mixins' as *;

  .display {
    margin: 0;
    display: block;
    font-family: 'TTTrailers', sans-serif;
    color: white;
    -webkit-text-stroke: 3px black;
    font-size: 10rem;
    line-height: 8rem;
    text-shadow: -4px 6px black;

    @include smUp {
      -webkit-text-stroke: 4px black;
      font-size: 12rem;
      line-height: 9.5rem;
      text-shadow: -5px 7px black;
    }

    @include mdUp {
      -webkit-text-stroke: 4px black;
      font-size: 14rem;
      line-height: 11rem;
      text-shadow: -6px 8px black;
    }

    @include lgUp {
      -webkit-text-stroke: 4px black;
      font-size: 16rem;
      line-height: 12.5rem;
      text-shadow: -7px 9px black;
    }

    @include xlUp {
      -webkit-text-stroke: 5px black;
      font-size: 18rem;
      line-height: 14rem;
      text-shadow: -8px 10px black;
    }

    @include xxlUp {
      -webkit-text-stroke: 4px black;
      font-size: 20rem;
      line-height: 15.5rem;
      text-shadow: -9px 11px black;
    }
  }
</style>