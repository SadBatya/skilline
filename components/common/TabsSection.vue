<template>
  <div class="tabs__wrap-list" :class="classMod">
    <ul class="tabs__list">
      <li class="tabs__item _light-border">
        <button class="tabs__item-link" @click.prevent="(e) => handlerTab(e, {type: 'all'})">
          <span class="_text" :class="{ '_active-item': !active }">Основные</span>
          <span v-if="totalCount" class="_count">{{ totalCount }}</span>
        </button>
      </li>
      <template   v-for="tab in tabs">
        <li
          v-if="tab.count"
          :key="tab.id"
          class="tabs__item"
        >
          <button type="button" class="tabs__item-link" :class="{ '_active' : active === tab.id }" @click.prevent="(e) => handlerTab(e, tab)">
            <span class="_text" :class="{ '_active-item': active === tab.id }">{{ tab.title }}</span>
            <span class="_count">{{ tab.count }}</span>
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabsSection",
  props: {
    classMod: {
      type: String,
      default: ''
    },
    tabs: Array,
    handlerClick: Function,
    totalCount: Number,
    activeTab: [String, Number],
  },
  data() {
    return {
      active: null,
    }
  },
  watch: {
    activeTab(newVal) {
      if (this.active !== newVal) {
        this.active = newVal
      }
    },
  },
  methods: {
    handlerTab(e, tab) {
      if (tab.id === this.active) {
        return;
      }

      if (this.handlerClick && typeof this.handlerClick === "function") {
        this.handlerClick(e, tab);
      }

      if (tab.type === 'all') {
        this.active = null;
        this.$emit('clickTab', null);
        return;
      }

      this.active = tab.id;
      this.$emit('clickTab', tab);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/tabs.scss";
</style>
