<template>
  <div :class="classMod">
    <div class="portfolio__inner">
      <div class="pf-container">
        <div class="portfolio__wrap-block">
          <div v-if="title || $slots.description" class="portfolio__box-title">
            <h2 v-if="title" class="portfolio__title-page">{{title}}</h2>
            <slot name="description"></slot>
          </div>
          <div v-if="countSlots" class="portfolio__inner-sections">
            <slot v-for="i in countSlots" :name="'block' + i"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionWithBlocks",
  props: {
    classMod: [String, Object],
    title: {
      type: String,
      default: ''
    },
    countSlots: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
