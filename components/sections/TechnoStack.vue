<template>
  <section v-if="technologies && technologies.length" class="process-stack">
    <div class="process-stack__inner-title">
      <p class="process-stack__title">{{title}}</p>
      <TabsSection
        v-if="categories && categories.length > 0"
        :tabs="categories"
        class-mod="process-stack__tabs"
        :totalCount="totalCategories"
        :active-tab="activeCategory"
        @clickTab="handlerClickTab"
      />
    </div>
    <div class="process-stack__wrap-cards" ref="processStack">
      <swiper v-for="(list, index) in technologiesRows" :key="index" class="process-stack__cards-row swiper"  :class="{'_reverse': index === 1}"  :options="swiperOptions">
          <swiper-slide v-for="stack in list"  :key="stack.id" class="process-stack__card-technology" :class="{'_disabled': !isStackOpacity(stack.categories)}">
            <div class="process-stack__card-img">
              <img v-if="stack.logo" :src="stack.logo" alt="symfony">
            </div>
            <p>
              <span class="name"> {{ stack.title }}. </span>{{stack.description}}
            </p>
          </swiper-slide>
      </swiper>
    </div>
  </section>

</template>

<script>
import TabsSection from "~/components/common/TabsSection";
import {API_URLS} from "~/constant/apiUrls";
import {categoriesModel, technoItemModel, technoStackModel} from "~/models/technoStack";

export default {
  name: "TechnoStack",
  components: {TabsSection},
  props: {
    isFetch: {
      type: Boolean,
      default: true,
    },
    categoriesProps: Array,
    technologiesProps: Array,
    titleProps: String,
  },
  data() {
    return {
      title: "Наш технологический стек",
      categories: [],
      totalCategories: 0,
      activeCategory: null,
      limit: 120,
      technologies: [],
      isScrollInit: false,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        simulateTouch: true,
        allowTouchMove: true,
        grabCursor: true,
      }
    }
  },
  async fetch() {
    if (!this.isFetch) {
      return;
    }
    await this.$axios.get(API_URLS.stack.categories)
      .then(res => {
        const result = categoriesModel(res?.data?.data);
        this.categories = result.list || [];
        this.totalCategories = result.totalCount || 0;
      })
      .catch(err => {
        console.log(err);
        this.categories = [];
      })

    await this.$axios.get(API_URLS.stack.list, {
      params: {
        limit: this.limit,
      }
    })
      .then(res => {
        const result = technoStackModel(res?.data?.data);
        this.title = result.title;
        this.technologies = result.technologies;
      })
      .catch(err => {
        console.log(err);
        this.technologies = [];
      })
  },
  mounted() {
    if (this.titleProps) {
      this.title = this.titleProps
    }

    if (this.categoriesProps) {
      this.categories = this.categoriesProps
    }

    if (this.technologiesProps) {
      this.technologies = this.technologiesProps.map(technoItemModel);
    }

    this.$nextTick(() => {
        const stacks = this.$refs.processStack;
        if (stacks) {
          const reverse = stacks.querySelector('._reverse');
          if (reverse) {
            reverse.swiper.setProgress(1, 0);
          }
        }

        window.addEventListener('scroll', this.onViewport);
    })
  },
  watch: {
    // isMobileWindow(value) { // eslint-disable-line
    //   console.log({value, scroll: this.isScrollInit});
    //   if (value && this.isScrollInit) {
    //       window.removeEventListener('scroll', this.onViewport);
    //       this.isScrollInit = false;
    //       this.mobileReverseScroll();
    //   } else if (!this.isScrollInit && !value) {
    //       window.addEventListener('scroll', this.onViewport);
    //       this.isScrollInit = true;
    //   }
    // }
  },
  computed: {
    technologiesRows() {
      if (!this.technologies || !this.technologies.length) {
        return [];
      }
      const countItems = Math.floor(this.technologies.length / 3);
      return [
        [...this.technologies.slice(0, countItems)],
        [...this.technologies.slice(countItems, countItems * 2)],
        [...this.technologies.slice(countItems * 2)],
      ]
    }
  },
  methods: {
    handlerClickTab(tab) {
      if (!tab || !tab.id) {
        this.activeCategory = null;
        return;
      }

      this.activeCategory = tab.id;
    },
    isStackOpacity(categories) {
      if (this.activeCategory === null) {
        return true;
      }

      if (!categories || categories.length === 0) {
        return false;
      }

      return categories.find(id => id === this.activeCategory);
    },
    rowViewport(item, windowWidth, windowHeight) {
      const rect = item.getBoundingClientRect();
      let headerHeight = 0;
      const header = document.querySelector('.header');
      if (header) {
        headerHeight = header.clientHeight;
      }
      if (rect.top < windowHeight && rect.bottom > 0) {
        const wrapper = item.querySelector('.swiper-wrapper');
        if (!wrapper) {
          return;
        }
        const ratio = rect.top / (windowHeight - headerHeight);

        if (item.classList.contains('_reverse')) {
          item.swiper.setProgress(ratio, 1500);
        } else {
          item.swiper.setProgress(1 - ratio, 1500);
        }
      }

    },
    onViewport() {
      const processStack = this.$refs.processStack;

      if (!processStack) {
        return;
      }
      const row = processStack.querySelectorAll('.process-stack__cards-row');
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      row.forEach(item => {
        this.rowViewport(item, windowWidth, windowHeight);
      });
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.onViewport);
    this.isScrollInit = false;
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/used-technology.scss";

.process-stack__card-technology._disabled {
  opacity: 0.1;
}
</style>

