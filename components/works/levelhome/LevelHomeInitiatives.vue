<template>
  <div class="initiatives">
    <div class="initiatives_maket">
      <img
        src="@/static/img/portfolio/pf-levelhome/ipad-maket-inner.png"
        alt=""
      />
    </div>
    <LevelHomeInitiativesSlider />
  </div>
</template>
<script>
import LevelHomeInitiativesSlider from './LevelHomeInitiativesSlider.vue'

export default {
  name: 'LevelHomeInitiatives',
  components: {
    LevelHomeInitiativesSlider,
  },
}
</script>