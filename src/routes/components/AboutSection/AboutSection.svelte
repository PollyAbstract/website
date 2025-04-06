<script lang="ts">
  import { Section } from '~components/layout';
  import { Display, Paragraph } from '~components/typography';
  import PollyBoxImage from '~assets/images/polly_box.png?enhanced';

  interface Props {
    title: string;
    description: string[];
  }

  let { title, description }: Props = $props();
</script>

<Section background="#FEDEFF">
  <div class="about-image__wrapper">
    <enhanced:img src={PollyBoxImage} alt="Polly holding a box" class="about-image" />
  </div>
  <div class="about-layout">
    <Display class="about-layout__title" small>
      {title}
    </Display>
    <div class="about-layout__text">
      {#each description as line (line)}
        <Paragraph>{line}</Paragraph>
      {/each}
    </div>
  </div>
</Section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .about-layout {
    position: relative;
    display: grid;
    gap: 2rem;

    @include smUp {
      padding-bottom: 20px;
    }

    @include lgUp {
      padding-bottom: 0;
      gap: 1rem;
      grid-template-columns: 1fr 2fr;
      align-items: center;
    }

    :global(.about-layout__title) {
      text-align: center !important;

      @include lgUp {
        text-align: left !important;
      }
    }
  }

  .about-layout__text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: black;
    opacity: 0.9;

    @include smUp {
      padding-left: 100px;
    }

    @include lgUp {
      padding-left: 0;
    }
  }

  .about-image__wrapper {
    position: absolute;
    left: -20px;
    bottom: 0;
    width: 100%;
    max-width: 200px;
    aspect-ratio: 2083 / 2026;
    opacity: 0.2;

    @include smUp {
      opacity: 1;
    }

    @include xlUp {
      left: -40px;
      max-width: 300px;
    }
  }

  .about-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
    transform-origin: left bottom;

    &:hover {
      transform: scale(1.2);
    }
  }
</style>
