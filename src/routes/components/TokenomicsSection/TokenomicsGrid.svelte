<script lang="ts">
  import { Card } from '~components/ui';
  import { Headline, Paragraph } from '~components/typography';

  type Subject = Readonly<{
    title: string;
    value: string | number;
  }>;

  interface Props {
    subjects: Subject[];
  }

  let { subjects }: Props = $props();

  function formatValue(value: Subject['value']) {
    return typeof value === 'number'
      ? new Intl.NumberFormat(navigator.language).format(value)
      : value;
  }
</script>

<div class="tokenomics-layout__grid">
  {#each subjects as subject (subject.title)}
    <Card class="tokenomics-layout__grid__item" compact>
      <Headline style="color: #001C61">{subject.title}</Headline>
      <Paragraph bold style="opacity: 0.7;">{formatValue(subject.value)}</Paragraph>
    </Card>
  {/each}
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

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
</style>
