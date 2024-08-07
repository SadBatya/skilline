<template>
  <div class="portfolio__card-events">
    <div class="pf-container">
      <slot name="header"></slot>
      <div class="portfolio__text-wrapper">
        <p v-if="title" class="portfolio__heading">{{ title }}</p>
        <div v-if="tabs && tabs.length" class="portfolio__tabs-wrapper">
          <button type="button" v-for="tab in tabs" :key="tab.id" class="portfolio__tab-btn"
                  :class="{_active: tab.id === activeTab}" @click="setActiveTab(tab)">{{ tab.name }}
          </button>
        </div>
        <template v-for="tab in tabs">
          <div v-if="activeTab === tab.id" :key="tab.id">
            <slot :name="`description${tab.id}`"></slot>
          </div>
        </template>

        <!-- <p class="portfolio__desc">Разработали новый онлайн сервис для организации мероприятий, которым пользуются миллионы людей. </p> -->

      </div>

      <div class="portfolio__tabs-content-wrapper tabs-container ">
        <template v-for="tab in tabs">
          <slot :name="`block${tab.id}`"></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionWithTabs",
  props: {
    title: String,
    tabs: {
      type: Array,
      defaults: () => ([])
    },
    activeTabsValue: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      activeTab: null,
    }
  },
  watch: {
    activeTabsValue(value) {
      if (value !== this.activeTab) {
        this.activeTab = value;
      }
    },
  },
  mounted() {
    this.activeTab = this.activeTabsValue;
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab.id
      this.$emit('setActiveTab', tab.id);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/_tabs.scss";
</style>
