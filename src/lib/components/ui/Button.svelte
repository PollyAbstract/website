<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface ButtonProps extends HTMLButtonAttributes {
    iconPosition?: 'left' | 'right';
    href?: string;
    icon?: Snippet;
    block?: boolean;
  }

  let {
    iconPosition = 'left',
    disabled = false,
    type = 'button',
    href = undefined,
    block = false,
    class: className = '',
    icon = undefined,
    children = undefined,
    ...rest
  }: ButtonProps = $props();

  const isLink = $derived(href !== undefined);
  const hasIcon = $derived(icon !== undefined);

  const target = $derived.by(() =>
    isLink && href && href.startsWith('http') ? '_blank' : '_self',
  );

  const assignHref = (node: HTMLElement) => {
    if (isLink && !disabled) {
      node.setAttribute('href', href!);
    }
  };
</script>

<svelte:element
  this={isLink ? 'a' : 'button'}
  use:assignHref
  class={[`button`, className]}
  class:block
  class:button--disabled={disabled}
  type={!isLink ? type : undefined}
  disabled={!isLink ? disabled : undefined}
  tabindex={isLink && disabled ? -1 : undefined}
  aria-disabled={isLink && disabled ? true : undefined}
  {target}
  {...rest}
>
  <span class="button__content" class:button--reverse={iconPosition === 'right' && hasIcon}>
    {#if hasIcon}
      <span class="button__icon">{@render icon?.()}</span>
    {/if}
    {@render children?.()}
  </span>
</svelte:element>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    font-family: 'TTTrailers', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: $spacing-sm $spacing-lg;
    font-size: 24px;
    height: 48px;
    background-color: $color-primary;
    color: $color-black;
    border: 3px solid $color-black;

    &.block {
      width: 100%;
    }

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: $color-primary-dark;
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: $color-primary-darker;
    }

    &--disabled,
    &:disabled,
    &[aria-disabled='true'] {
      cursor: not-allowed;
      opacity: 0.6;
      touch-action: none;
    }
  }

  .button__content {
    align-items: center;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;

    &.button--reverse {
      flex-direction: row-reverse;
    }
  }

  .button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
