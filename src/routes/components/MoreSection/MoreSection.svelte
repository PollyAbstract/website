<script lang="ts">
  import { Display, Paragraph } from '~components/typography';
  import { Section } from '~components/layout';
  import { Button } from '~components/ui';

  type Action = Readonly<{ title: string; href: string }>;

  interface Props {
    title: string;
    description: string[];
    actions: Action[];
  }

  let { title, description, actions }: Props = $props();
</script>

<Section background="#F2F2F2">
  <div class="more-layout">
    <Display align="center" small>{title}</Display>
    <div class="more-layout__text">
      {#each description as line (line)}
        <Paragraph bold>{line}</Paragraph>
      {/each}
    </div>
    <div class="more-layout__actions">
      {#each actions as action (action.title)}
        <Button href={action.href} block>{action.title}</Button>
      {/each}
    </div>
  </div>
</Section>

<style lang="scss">
  @use '~styles/mixins' as *;

  .more-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .more-layout__text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: black;
    opacity: 0.8;
  }

  .more-layout__actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    @include mdUp {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }
</style>
