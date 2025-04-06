<script lang="ts">
  import { Scene, Section } from '~components/layout';
  import SceneImage from '~assets/images/arctic_pink.png?enhanced';
  import { Display, Headline } from '~components/typography';
  import { AboutSection, BuyingSection, PenguinDuo, TokenomicsSection } from './components';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
  <meta property="og:image" content={data.seo.ogImage} />
</svelte:head>

<main>
  <Scene image={{ src: SceneImage, alt: 'Pink arctic ambiance' }}>
    <PenguinDuo />
    <div style="flex-direction: column;display: flex;justify-content: center;align-items: center">
      <Headline>Hey there, I'm</Headline>
      <Display>POLLY</Display>
      <Headline style="text-align: center">The one and only<br /> wife of Pax</Headline>
    </div>
  </Scene>
  <AboutSection title={data.sections.about.title} description={data.sections.about.description} />
  <BuyingSection
    title={data.sections.buying.title}
    description={data.sections.buying.description}
    steps={data.sections.buying.steps}
  />
  <TokenomicsSection
    title={data.sections.tokenomics.title}
    description={data.sections.tokenomics.description}
    ca={data.sections.tokenomics.ca}
    subjects={data.sections.tokenomics.subjects}
  />
  <Section background="#F2F2F2">
    <p>Section D</p>
  </Section>
</main>
