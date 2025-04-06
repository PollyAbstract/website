<script lang="ts">
  import { Section } from '~components/layout';
  import { Display, Headline, Paragraph } from '~components/typography';
  import PollyHatImage from '~assets/images/polly_hat.png?enhanced';
  import { Card } from '~components/ui';
  
  type Subject = Readonly<{
    title: string;
    value: string | number;
  }>

  interface Props {
    title: string;
    description: string[];
    ca: string;
    subjects: Subject[];
  }

  let { title, description, ca, subjects }: Props = $props();

  function formatValue(value: Subject['value']) {
    return typeof value === 'number'
           ? new Intl.NumberFormat(navigator.language).format(value)
           : value;
  }
</script>

<Section background="#B3C9FF">
  <div class="tokenomics-image__wrapper">
    <enhanced:img src={PollyHatImage} alt="Polly with a towel on it's head" class="tokenomics-image" />
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
  }

  :global(.tokenomics-layout__grid__item > *) {
    text-align: center !important;
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
