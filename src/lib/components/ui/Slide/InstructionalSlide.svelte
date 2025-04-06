<script lang="ts">
  import { Headline, Paragraph } from '~components/typography';

  interface Props {
    title: string;
    description: string[];
    image?: { src: any; alt?: string };
  }

  let { title, description, image }: Props = $props();
</script>

<div class="instructional-slide">
  <div class="instructional-slide__content">
    <Headline>{title}</Headline>

    {#each description as line (line)}
      <Paragraph size="sm">{line}</Paragraph>
    {/each}
  </div>

  {#if image}
    <enhanced:img
      src={image.src}
      alt={image.alt || 'Illustration that compliments the description'}
      class="instructional-slide__image"
    />
  {/if}
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .instructional-slide__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 1;
    width: 100%;

    @include smUp {
      width: 85%;
    }

    @include lgUp {
      width: 70%;
    }

    @include xlUp {
      width: 60%;
    }
  }

  .instructional-slide__image {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 120%;
    object-fit: contain;
    object-position: right;
    opacity: 0.05;

    @include lgUp {
      opacity: 0.3;
    }
    //transform: translateY(-10%) translateX(15%);
  }
</style>
