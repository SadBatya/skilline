<template>
  <div
    class="works__card  portfolio-card"
    :class="{'_white-bg': item?.isLightBackground, ...classMod}"
    :style="{
               backgroundImage: item.bgImage ? `url(${item.bgImage})`: null,
               backgroundColor: '#000',
             }"
  >
    <div class="portfolio-card__section">
      <button
        v-for="category in item.categories"
        :key="category.id"
        class="portfolio-card__section-link"
        @click.stop.prevent="handlerClickTab(category)"
        :aria-label="category.title"
      >{{ category.title }}</button>
    </div>
    <component
      :is="typeComponent"
      v-bind="bindComponent"
      class="portfolio-card__link"
      @click="setShowTooltip"
    >
      <h3 v-if="item.title" class="portfolio-card__title">{{ item.title }}</h3>
      <p v-if="item.description" class="portfolio-card__description">{{ item.description }}</p>
    </component>
    <WorkTooltipLocked v-if="item.nda || item.locked" :is-nda="item.nda" :work="item" :show-tooltip-parent="showTooltip"/>
    <AwardsWork v-if="item.awards" :awards="item.awards"/>
  </div>
</template>

<script>
import WorkTooltipLocked from "~/components/support/WorkTooltipLocked";
import AwardsWork from "~/components/elements/AwardsWork";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: "WorkCard",
  components: {AwardsWork, WorkTooltipLocked},
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    classMod: Object,
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTooltip: false,
      timerShow: null
    }
  },
  computed: {
    typeComponent() {
      if (this.isOpen) {
        return 'NuxtLink'
      }

      return 'div';
    },
    bindComponent() {
      if (this.isOpen) {
        return {
          to : {path: ROUTS_PATH.works.detail(this.item.code)},
          tag :"a"
        }
      }
      return {}
    },
  },
  methods: {
    handlerClickTab(tab){
      this.$emit('categoryClick', tab);
    },
    setShowTooltip() {
      if (this.item?.nda || this.item?.locked) {
        clearTimeout(this.timerShow);
          this.showTooltip = true;
        this.timerShow = setTimeout(() => {
          this.showTooltip = false;
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>

</style>
