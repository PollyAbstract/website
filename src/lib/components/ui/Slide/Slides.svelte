<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Button, Card } from '~components/ui';
  import SlidesProgress from './SlidesProgress.svelte';
  import { ChevronRight as NextIcon } from '@lucide/svelte';

  interface Props {
    children: Snippet;
    slideCount: ReturnType<typeof $bindable<number>>;
    currentSlide: number;
  }

  let { children, slideCount, currentSlide = $bindable() }: Props = $props();

  const canPressNext = $derived(currentSlide < slideCount - 1);
  const canPressBack = $derived(currentSlide > 0);

  function nextSlide() {
    if (canPressNext) currentSlide += 1;
  }

  function prevSlide() {
    if (canPressBack) currentSlide -= 1;
  }
</script>

{#snippet NextButtonIcon()}
  <NextIcon />
{/snippet}

<div class="slideshow">
  <Card class="slideshow__slide">
    <div class="slideshow__slide__content">
      {@render children()}
    </div>
    <div class="slideshow__slide__actions">
      <Button disabled={!canPressBack} onclick={prevSlide}>Back</Button>
      <Button
        disabled={!canPressNext}
        onclick={nextSlide}
        icon={NextButtonIcon}
        iconPosition="right"
      >
        Next
      </Button>
    </div>
  </Card>
  <SlidesProgress count={slideCount} current={currentSlide} />
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .slideshow {
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    flex-direction: column;

    @include mdUp {
      flex-direction: row;
    }

    :global(.slideshow__slide) {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 32px;
      overflow: hidden;
    }
  }

  .slideshow__slide__actions {
    z-index: 1;
    display: flex;
    gap: 8px;
  }
</style>
