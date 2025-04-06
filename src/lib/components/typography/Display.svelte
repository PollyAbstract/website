<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet;
    small?: boolean;
    align?: 'left' | 'center' | 'right';
  }

  let { children, align = 'left', small = false, class: className, ...rest }: Props = $props();
</script>

<h1 class={['display', small && 'display--small', className]} style="text-align: {align}" {...rest}>
  {@render children()}
</h1>

<style lang="scss">
  @use '~styles/mixins' as *;

  .display {
    text-transform: uppercase;
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
      font-size: 14rem;
      line-height: 11rem;
      text-shadow: -6px 8px black;
    }

    @include lgUp {
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

  .display--small {
    -webkit-text-stroke: 1.5px black;
    font-size: 5rem;
    line-height: 4rem;
    text-shadow: -2px 3px black;

    @include smUp {
      -webkit-text-stroke: 2px black;
      font-size: 6rem;
      line-height: 4.875rem;
      text-shadow: -2.5px 3.5px black;
    }

    @include mdUp {
      font-size: 7.5rem;
      line-height: 6rem;
      text-shadow: -3px 4.5px black;
    }

    @include lgUp {
      font-size: 9rem;
      line-height: 7.125rem;
      text-shadow: -3.75px 5.25px black;
    }

    @include xlUp {
      -webkit-text-stroke: 2.5px black;
      font-size: 10.5rem;
      line-height: 8.25rem;
      text-shadow: -4.5px 6px black;
    }

    @include xxlUp {
      font-size: 12rem;
      line-height: 9.375rem;
      text-shadow: -5.25px 6.75px black;
    }
  }
</style>
