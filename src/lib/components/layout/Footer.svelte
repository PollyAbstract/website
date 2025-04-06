<script lang="ts">
  import { Paragraph } from '~components/typography';

  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <Paragraph class="footer__disclaimer" size="sm">
    &copy; Polly on Abstract {currentYear}
  </Paragraph>
</footer>

<style lang="scss">
  @use '~styles/mixins' as *;
  
  .footer {
    border-top: 4px solid #a8a8a8;
    background: #181818;
    padding: 2rem 1rem;
    @include flexCenter;
  }

  :global(.footer__disclaimer) {
    color: white;
    opacity: 0.7;
    margin: 0;
  }
</style>