<script lang="ts">
  import { Section } from '~components/layout';
  import { Display, Paragraph } from '~components/typography';
  import InstructionalSlide from '~components/ui/Slide/InstructionalSlide.svelte';
  import { Slides } from '~components/ui';

  let slideIndex = $state(0);

  type Step = {
    title: string;
    description: string[];
    image?: any;
    actionLink?: { url: string; text: string };
  };

  interface Props {
    title: string;
    description: string[];
    steps: Step[];
  }

  let { title, description, steps }: Props = $props();
</script>

<Section background="#FFF0CC">
  <div class="buying-layout">
    <Display class="buying-layout__title" align="center" small>
      {title}
    </Display>
    <div class="buying-layout__text">
      {#each description as line (line)}
        <Paragraph bold>{line}</Paragraph>
      {/each}
    </div>
    <Slides bind:currentSlide={slideIndex} slideCount={steps.length}>
      {#if steps && steps[slideIndex]}
        <InstructionalSlide
          title={steps[slideIndex].title}
          description={steps[slideIndex].description}
          image={{ src: steps[slideIndex].image }}
          actionLink={steps[slideIndex].actionLink}
        />
      {:else}
        <p>Step not found.</p>
      {/if}
    </Slides>
  </div>
</Section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .buying-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .buying-layout__text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: black;
    opacity: 0.8;
  }
</style>
