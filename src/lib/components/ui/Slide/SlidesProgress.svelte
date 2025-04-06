<script lang="ts">
  interface Props {
    count: number;
    current: number;
  }

  let { count, current }: Props = $props();

  let indicators = $derived(Array.from({ length: count }).map((_, i) => i));
</script>

<div class="slides__progress">
  {#each indicators as indicator}
    <div class="slides__progress__indicator" class:active={indicator === current}></div>
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
