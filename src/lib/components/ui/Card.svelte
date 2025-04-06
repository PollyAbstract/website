<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    compact?:boolean;
  }

  let { children, compact, class: className, ...rest }: Props = $props();
</script>

<div class={['card', className]} class:compact={compact} {...rest}>
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
    
    &.compact {
      padding: 0.75rem;
      
      @include smUp {
        padding: 0.875rem;
      }
      
      @include mdUp {
        padding: 1rem;
      }
      
      @include lgUp {
        padding: 1.125rem;
      }
      
      @include xlUp {
        padding: 1.25rem;
      }
      
      @include xxlUp {
        padding: 1.375rem;
      }
    }
  }
</style>
