<script lang="ts">
  import { Section } from '~components/layout';
  import { Display, Paragraph } from '~components/typography';
  import TokenomicsGrid from './TokenomicsGrid.svelte';
  import TokenomicsImage from './TokenomicsImage.svelte';
  import ContractAddress from './ContractAddress.svelte';

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
</script>

<Section background="#B3C9FF">
  <TokenomicsImage />
  <div class="tokenomics-layout">
    <Display small>{title}</Display>
    <div class="tokenomics-layout__text">
      {#each description as line (line)}
        <Paragraph bold>{line}</Paragraph>
      {/each}
    </div>
    <TokenomicsGrid {subjects} />
    <ContractAddress {ca} />
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
</style>
