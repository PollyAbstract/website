<script lang="ts">
  import { Headline, Paragraph } from '~components/typography';
  import { Button } from '~components/ui';

  interface Props {
    title: string;
    description: string[];
    image?: { src: any; alt?: string };
    actionLink?: { url: string; text: string };
  }

  let { title, description, image, actionLink }: Props = $props();
</script>

<div class="instructional-slide">
  <div class="instructional-slide__content">
    <Headline>{title}</Headline>

    <div class="instructional-slide__description">
      {#each description as line (line)}
        <Paragraph size="sm">{line}</Paragraph>
      {/each}
    </div>

    {#if actionLink}
      <div class="instructional-slide__action">
        <Button href={actionLink.url}>
          {actionLink.text}
        </Button>
      </div>
    {/if}
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

  .instructional-slide {
    position: relative;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    @include mdUp {
      min-height: 350px;
    }
    
    @include lgUp {
      min-height: 400px;
    }
  }

  .instructional-slide__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 1;
    width: 100%;
    height: 100%;

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

  .instructional-slide__description {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 140px;
  }

  .instructional-slide__action {
    margin-top: 8px;
  }

  .instructional-slide__image {
    position: absolute;
    right: 0;
    top: 50%;
    height: 160%;
    object-fit: contain;
    object-position: right center;
    opacity: 0.15;
    transform: translateY(-40%) translateX(15%);

    @include mdUp {
      height: 170%;
      opacity: 0.1;
      transform: translateY(-40%) translateX(15%);
    }
    
    @include lgUp {
      opacity: 0.2;
      height: 160%;
      transform: translateY(-45%) translateX(25%);
    }
    
    @include xlUp {
      height: 170%;
    }
  }
</style>
