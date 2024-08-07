<template>
  <div class="tabs__wrap-list _is-loading" :class="classMod">
    <ul class="tabs__list">
      <li class="tabs__item _light-border">
        <a href="" class="tabs__item-link">
          <span class="_text">Основные</span>
          <span class="_count"></span>
        </a>
      </li>
      <template   v-for="i in 4" >
        <li
          class="tabs__item"
          :key="i"
        >
          <a href="" class="tabs__item-link" >
            <span class="_text"></span>
            <span class="_count"></span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabsSectionSkeleton",
  props: {
    classMod: [  String, Object]
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/tabs.scss";
</style>
