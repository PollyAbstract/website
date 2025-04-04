<script lang="ts">
  import { Section } from '~components/ui';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.seo.title}</title>
  <meta name="description" content={data.seo.description} />
  <meta property="og:image" content={data.seo.ogImage} />
</svelte:head>

<Section>
  <h1>Polly - Wife of Pax</h1>
  <p>A showcase of our button component:</p>
</Section>
