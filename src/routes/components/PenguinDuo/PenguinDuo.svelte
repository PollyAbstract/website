<script lang="ts">
  import CharacterPengu from './CharacterPengu.svelte';
  import CharacterPolly from './CharacterPolly.svelte';
  import BeatingHeart from './BeatingHeart.svelte';
</script>

<div class="penguin-duo__container">
  <div class="penguin-duo">
    <CharacterPengu />
    <BeatingHeart />
    <CharacterPolly />
  </div>
</div>

<style lang="scss">
  @use '~styles/mixins' as *;

  .penguin-duo__container {
    position: absolute;
    bottom: -70px;
    width: 100vw;
    flex-shrink: 0;

    @include smUp {
      bottom: -80px;
    }

    @include mdUp {
      bottom: -90px;
    }

    @include lgUp {
      bottom: -100px;
    }

    @include xlUp {
      bottom: -110px;
    }

    @include xxlUp {
      bottom: -120px;
    }
  }

  .penguin-duo {
    display: flex;
    justify-content: center;
    align-items: start;
  }
</style>
