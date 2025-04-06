<script lang="ts">
  interface Props {
    count: number;
    current: number;
  }

  let { count, current = $bindable() }: Props = $props();

  const indicators = $derived(Array.from({ length: count }).map((_, i) => i));

  function handleClick(slideIndex: number) {
    current = slideIndex;
  }
</script>

<div class="slides__progress">
  {#each indicators as indicator (indicator)}
    <button 
      class="slides__progress__indicator" 
      class:active={indicator === current}
      onclick={() => handleClick(indicator)}
    ></button>
  {/each}
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .slides__progress {
    display: flex;
    flex-direction: row;
    gap: 12px;

    @include mdUp {
      flex-direction: column;
    }
  }

  .slides__progress__indicator {
    border: none;
    background: black;
    opacity: 0.3;
    width: 16px;
    height: 16px;
    border-radius: 6px;
    transition: all 0.3s ease;

    @include lgUp {
      width: 20px;
      height: 20px;
    }

    &.active {
      opacity: 0.6;
      width: 48px;

      @include mdUp {
        width: 16px;
        height: 48px;
      }

      @include lgUp {
        width: 20px;
        height: 60px;
      }
    }
  }
</style>
