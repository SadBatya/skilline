<template>
  <div :class="classMod">
    <div class="portfolio__inner">
      <div class="pf-container">
        <div class="portfolio__wrap-block">
          <div v-if="title || $slots.description" class="portfolio__box-title">
            <h2 v-if="title" class="portfolio__title-page">{{title}}</h2>
            <slot name="description"></slot>
          </div>
          <div v-if="imgMain || $slots.rightBlock || $slots.mainBlock" class="portfolio__main-box"  :class="mainBoxClass">
            <div v-if="imgMain || $slots.mainBlock" class="portfolio__wrap-img" ref="desktopWrap">
              <img v-if="imgMain" :src="imgMain" alt="">
              <slot v-if="$slots.mainBlock" name="mainBlock"></slot>
            </div>
            <slot v-if="$slots.rightBlock" name="rightBlock"></slot>
          </div>
        </div>
      </div>
      <slot name="nextBlock"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopAndMobilePage",
  props: {
    classMod: [ String, Object],
    mainBoxClass: [ String, Object],
    title: String,
    imgMain: String,
  },
}
</script>

<style scoped>

</style>
