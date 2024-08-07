<template>
  <div class="bonus">
    <div class="container">
      <p v-if="subTitle" class="bonus__title">{{ subTitle }}</p>
      <div v-for="item in list" :key="item.id" v-html="item.html"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdditionalIndoSection",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    elements: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    list() {
      return this.elements.map(item => ({id: item.id, html: item.html}));
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/bonus.scss";
</style>

