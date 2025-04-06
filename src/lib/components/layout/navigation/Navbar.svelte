<script lang="ts">
  import NavbarLogo from './NavbarLogo.svelte';
  import NavbarNavigation from './NavbarNavigation.svelte';

  const MIN_SCROLL_THRESHOLD = 256;

  let scrollY = $state(0);
  let scrolled = $derived(scrollY > MIN_SCROLL_THRESHOLD);

  const updateScroll = () => {
    scrollY = window.scrollY;
  };

  $effect(() => {
    updateScroll();
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });
</script>

<div class="navbar" class:navbar--scrolled={scrolled}>
  <div class="navbar__container">
    <nav class="navbar__container__content">
      <NavbarLogo />
      <NavbarNavigation />
    </nav>
  </div>
</div>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .navbar {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
    transition:
      background-color 0.3s ease,
      backdrop-filter 0.3s ease,
      box-shadow 0.3s ease;
  }

  .navbar--scrolled {
    background-color: rgba($color-background, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* For Safari */
    box-shadow: 0 4px 16px rgba(black, 0.1);

    .navbar__container {
      padding-top: $spacing-sm;
      padding-bottom: $spacing-sm;
    }
  }

  .navbar__container {
    transition: padding 0.3s ease;
    @include container;
  }

  .navbar__container__content {
    width: 100%;
    @include flexBetween;
  }
</style>
