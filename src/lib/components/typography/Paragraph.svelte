<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    bold?: boolean;
    children: Snippet;
  }

  let {
    size = 'md',
    bold = false,
    children,
    class: className,
    style,
    ...rest
  }: ParagraphProps = $props();
</script>

<p
  class={[`paragraph`, `paragraph--${size}`, className]}
  style="font-weight: {bold ? 700 : 500}; {style}"
  {...rest}
>
  {@render children()}
</p>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .paragraph {
    font-family: 'Onest', sans-serif;
    margin: 0;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    &--sm {
      font-size: 1.05rem;
      line-height: 1.35rem;

      @include smUp {
        font-size: 1.125rem;
        line-height: 1.425rem;
      }

      @include mdUp {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }

      @include lgUp {
        font-size: 1.275rem;
        line-height: 1.65rem;
      }

      @include xlUp {
        font-size: 1.35rem;
        line-height: 1.725rem;
      }

      @include xxlUp {
        font-size: 1.425rem;
        line-height: 1.8rem;
      }
    }

    &--md {
      font-size: 1.4rem;
      line-height: 1.8rem;

      @include smUp {
        font-size: 1.5rem;
        line-height: 1.9rem;
      }

      @include mdUp {
        font-size: 1.6rem;
        line-height: 2rem;
      }

      @include lgUp {
        font-size: 1.7rem;
        line-height: 2.2rem;
      }

      @include xlUp {
        font-size: 1.8rem;
        line-height: 2.3rem;
      }

      @include xxlUp {
        font-size: 1.9rem;
        line-height: 2.4rem;
      }
    }

    &--lg {
      font-size: 1.75rem;
      line-height: 2.25rem;

      @include smUp {
        font-size: 1.875rem;
        line-height: 2.375rem;
      }

      @include mdUp {
        font-size: 2rem;
        line-height: 2.5rem;
      }

      @include lgUp {
        font-size: 2.125rem;
        line-height: 2.75rem;
      }

      @include xlUp {
        font-size: 2.25rem;
        line-height: 2.875rem;
      }

      @include xxlUp {
        font-size: 2.375rem;
        line-height: 3rem;
      }
    }
  }
</style>
