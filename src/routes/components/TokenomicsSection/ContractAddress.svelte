<script lang="ts">
  import { CheckIcon, CopyIcon, XIcon } from '@lucide/svelte';
  import copy from 'clipboard-copy';

  type CopyState = 'undetermined' | 'success' | 'error';

  interface Props {
    ca: string;
  }

  let { ca }: Props = $props();

  let copyState = $state<CopyState>('undetermined');
  let timeout = $state<ReturnType<typeof setTimeout> | null>(null);

  async function copyToClipboard() {
    try {
      await copy(ca);
      copyState = 'success';
    } catch (err) {
      console.error('Could not copy to clipboard', err);
      copyState = 'error';
    } finally {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        copyState = 'undetermined';
      }, 1_000);
    }
  }
</script>

<button class="tokenomics-layout__ca" onclick={copyToClipboard}>
  {#if copyState === 'success'}
    <CheckIcon class="tokenomics-layout__ca__icon" />
  {:else if copyState === 'error'}
    <XIcon class="tokenomics-layout__ca__icon" />
  {:else}
    <CopyIcon class="tokenomics-layout__ca__icon" />
  {/if}
  {ca}
</button>

<style lang="scss">
  @use '~styles/mixins' as *;

  .tokenomics-layout__ca {
    outline: none;
    border: none;
    background: none;
    display: flex;
    margin: 0 auto;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    opacity: 0.5;
    font-size: 0.7rem;

    &:hover {
      text-decoration: underline;
      cursor: copy;
    }

    @include smUp {
      font-size: 0.8rem;
    }

    @include mdUp {
      font-size: 0.9rem;
    }

    @include lgUp {
      font-size: 1rem;
    }

    @include xlUp {
      font-size: 1.1rem;
    }

    @include xxlUp {
      font-size: 1.2rem;
    }
  }

  :global(.tokenomics-layout__ca__icon) {
    aspect-ratio: 1;
    width: 16px;

    @include smUp {
      width: 20px;
    }

    @include mdUp {
      width: 24px;
    }

    @include lgUp {
      width: 28px;
    }

    @include xlUp {
      width: 32px;
    }
  }
</style>
