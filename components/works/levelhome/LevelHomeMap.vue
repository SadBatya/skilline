<template>
  <div class="level_home-map">
      <img
        src="@/static/img/portfolio/pf-levelhome/mapCard/levelHomeMap.png"
        alt=""
      />
    <LevelHomeMapCard />
  </div>
</template>

<script>
import LevelHomeMapCard from './LevelHomeMapCard.vue'
export default {
  name: 'LevelHomeMap',
  components: {
    LevelHomeMapCard,
  },
}
</script>

<style></style>
