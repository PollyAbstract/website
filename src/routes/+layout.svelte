<script lang="ts">
  import '~styles/global.scss';
  import { Footer, Navbar } from '~components/layout';

  let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
