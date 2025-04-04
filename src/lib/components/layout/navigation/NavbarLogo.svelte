<script>
  import pollyIconImage from '~assets/images/polly_icon.png?enhanced';
</script>

<a href="/" aria-label="Home">
  <enhanced:img
    src={pollyIconImage}
    alt="A small illustration of the head of Polly"
    class="navbar__logo"
  />
</a>

<style lang="scss">
  @use '~styles/variables' as *;
  @use '~styles/mixins' as *;

  .navbar__logo {
    height: 40px;
    width: 40px;

    @include smUp {
      height: 48px;
      width: 48px;
    }

    @include mdUp {
      height: 56px;
      width: 56px;
    }

    @include lgUp {
      height: 64px;
      width: 64px;
    }
  }

  a {
    text-decoration: none;
  }
</style>
