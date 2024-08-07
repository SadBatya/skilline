<template>
  <div :class="classMod">
    <div class="portfolio__inner">
      <div class="pf-container">
        <div class="portfolio__wrap-block">
          <div v-if="title || $slots.description" class="portfolio__box-title">
            <component v-if="title" :is="tagTitle" class="portfolio__title-page">{{title}}</component>
            <slot name="description"></slot>
          </div>
          <slot name="default"></slot>
        </div>
      </div>
      <slot name="nextBlock"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionWithSlot",
  props: {
    classMod: [ String, Object],
    title: String,
    imgMain: String,
    tagTitle: {
      type: String,
      default: 'h2'
    }
  },
}
</script>

<style scoped>

</style>
