<script lang="ts">
  import { CheckIcon, CopyIcon, XIcon } from '@lucide/svelte';
  import { Section } from '~components/layout';
  import { Display, Headline, Paragraph } from '~components/typography';
  import { Card } from '~components/ui';
  import PollyHatImage from '~assets/images/polly_hat.png?enhanced';
  import copy from 'clipboard-copy';

  type CopyState = 'undetermined' | 'success' | 'error';
  type Subject = Readonly<{
    title: string;
    value: string | number;
  }>;

  interface Props {
    title: string;
    description: string[];
    ca: string;
    subjects: Subject[];
  }

  let { title, description, ca, subjects }: Props = $props();

  let copyState = $state<CopyState>('undetermined');
  let timeout = $state<ReturnType<typeof setTimeout> | null>(null);

  function formatValue(value: Subject['value']) {
    return typeof value === 'number'
      ? new Intl.NumberFormat(navigator.language).format(value)
      : value;
  }

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

<Section background="#B3C9FF">
  <div class="tokenomics-image__wrapper">
    <enhanced:img
      src={PollyHatImage}
      alt="Polly with a towel on it's head"
      class="tokenomics-image"
    />
  </div>
  <div class="tokenomics-layout">
    <Display small>{title}</Display>
    <div class="tokenomics-layout__text">
      {#each description as line (line)}
        <Paragraph bold>{line}</Paragraph>
      {/each}
    </div>
    <div class="tokenomics-layout__grid">
      {#each subjects as subject (subject.title)}
        <Card class="tokenomics-layout__grid__item" compact>
          <Headline style="color: #001C61">{subject.title}</Headline>
          <Paragraph bold style="opacity: 0.7;">{formatValue(subject.value)}</Paragraph>
        </Card>
      {/each}
    </div>
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
  </div>
</Section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .tokenomics-layout {
    position: relative;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }

  .tokenomics-layout__text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: black;
    opacity: 0.8;
  }

  .tokenomics-layout__grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @include smUp {
      gap: 1.25rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @include lgUp {
      gap: 1.5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  :global(.tokenomics-layout__grid__item) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    @include lgUp {
      gap: 0;
    }
  }

  :global(.tokenomics-layout__grid__item > *) {
    text-align: center !important;
  }

  :global(.tokenomics-layout__grid__item) {
    :global(.tokenomics-layout__ca__icon) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }

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

  .tokenomics-image__wrapper {
    position: absolute;
    right: -20px;
    top: 0;
    width: 100%;
    max-width: 175px;
    aspect-ratio: 2129 / 1986;
    opacity: 0.2;

    @include smUp {
      opacity: 1;
    }

    @include xlUp {
      right: -40px;
      max-width: 250px;
    }
  }

  .tokenomics-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
    transform-origin: right top;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
