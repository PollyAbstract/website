<script lang="ts">
  import { Button } from '~components/ui';
</script>

<section class="navbar__navigation">
  <Button href="https://www.dextools.io/token/pollyabstract">
    BUY $POLLY
  </Button>
</section>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .navbar__navigation {
    display: flex;
    align-items: center;
    gap: $spacing-xs;

    @include smUp {
      gap: $spacing-sm;
    }

    @include mdUp {
      gap: $spacing-md;
    }

    @include lgUp {
      gap: $spacing-lg;
    }
  }
</style>
