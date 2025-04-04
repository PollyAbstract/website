<script lang="ts">
  import '~styles/global.scss';
  import { Navbar } from '~components/layout';

  let { children } = $props();
</script>

<Navbar />
{@render children()}
