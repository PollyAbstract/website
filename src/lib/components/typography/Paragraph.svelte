<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    bold?: boolean;
    children: Snippet;
  }

  let { size = 'md', bold = false, children, ...rest }: ParagraphProps = $props();
</script>

<p class={[`paragraph`, `paragraph--${size}`]} style="font-weight: {bold ? 700 : 500};" {...rest}>
  {@render children()}
</p>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .paragraph {
    font-family: 'Onest', sans-serif;
    margin: 0;

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
  }
</style>
