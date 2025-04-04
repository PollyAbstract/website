<script lang="ts">
  import NavbarLogo from './NavbarLogo.svelte';
  import NavbarNavigation from './NavbarNavigation.svelte';
</script>

<div class="navbar__container">
  <nav class="navbar">
    <NavbarLogo />
    <NavbarNavigation />
  </nav>
</div>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .navbar__container {
    @include container;
  }

  .navbar {
    @include flexBetween;
    width: 100%;
  }
</style>
