<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.seo.title}</title>
    <meta name="description" content={data.seo.description} />
    <meta property="og:image" content={data.seo.ogImage} />
</svelte:head>


<h1>Hello, World!</h1>