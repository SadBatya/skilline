<template>
  <div :class="classMod">
    <div class="pf-container">
      <div class="portfolio__inner _main-inner">
        <div class="portfolio__wrap-block">
          <div v-if="title || description" class="portfolio__box-title">
            <component :is="tagTitle" v-if="title" class="portfolio__title-page">{{title}}</component>
            <p v-if="description" class="portfolio__description">{{description}}</p>
            <p v-if="description" class="portfolio__description">{{description_2}}</p>
            <p v-if="description" class="portfolio__description">{{description_3}}</p>
            <slot name="description"></slot>
          </div>
          <div v-if="imgMain" class="portfolio__main-box _block-below mobile-container"  v-observe-visibility="visibilityChanged">
            <div class="portfolio__wrap-page _no-column mobile-box">
              <div class="portfolio__wrap-img" ref="desktopWrap">
                <img :src="imgMain" alt="">
              </div>
            </div>
            <div v-if="imgMobile" class="portfolio__wrap-text-project mobile-scroll">
              <div class="sidebar__mobile-wrapper">
                <div class="mobile-display" ref="mobileWrap">
                  <img :src="imgMobile" class="mobile-display__img" alt="">
                </div>
              </div>
            </div>
          </div>
          <slot name="nextBlock"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopAndMobilePageWithScroll",
  props: {
    classMod: [ String , Object],
    title: String,
    description: String,
    description_2: String,
    description_3: String,
    imgMain: String,
    imgMobile: String,
    tagTitle: {
      type: String,
      default: 'h2'
    }
  },
  data() {
    return {
     isEventScroll: false
    }
  },
  computed: {
    wrapMobile() {
      return this.$refs.mobileWrap;
    },
    wrapDesktop() {
      return this.$refs.desktopWrap;
    },
    imgDesktopTemplate() {
      if (!this.wrapDesktop) {
        return undefined;
      }

      return this.wrapDesktop.querySelector('img');
    },
    imgMobileTemplate() {
      if (!this.wrapMobile) {
        return undefined;
      }

      return  this.wrapMobile.querySelector('img');
    }
  },
  watch: {
    isExtraSmallMobileWindow() {
      if (this.wrapMobile) {
        this.wrapMobile.scrollTo(0, 0);
      }
    }
  },
  methods: {
    visibilityChanged(inView) {
      if (!this.imgDesktopTemplate && !this.imgMobileTemplate) {
        this.removeEventScroll();
        return;
      }

      if (this.isExtraSmallMobileWindow) {
        this.removeEventScroll();
        return;
      }

      if (inView) {
        this.eventScrollPage();
      }

      if (inView && !this.isEventScroll) {
        this.isEventScroll = true;
        window.addEventListener('scroll', this.eventScrollPage);
      } else if (!inView) {
        this.removeEventScroll();
      }
    },
    eventScrollPage() {
      const wrapDesktopRect = this.wrapDesktop.getBoundingClientRect();
      const top =  wrapDesktopRect.top;
      this.scrollingMobile(top);
    },
    removeEventScroll() {
      if (this.isEventScroll) {
        this.isEventScroll = false;
        window.removeEventListener('scroll', this.eventScrollPage);
      }
    },
    getRatioImages() {
      if (this.imgDesktopTemplate && this.imgMobileTemplate) {
        return  this.imgDesktopTemplate.offsetHeight / this.imgMobileTemplate.offsetHeight; // 1:1;
      }

      return 0;
    },
    scrollingMobile(offsetDesktop) {
      if (!this.imgMobileTemplate) {
        return;
      }
      // относительно десктопа проскролить мобилку на конкретное значение;
      const offsetMobile = offsetDesktop / this.getRatioImages();
      const heightMobile = this.imgMobileTemplate.offsetHeight;
      const wrapHeight = this.wrapMobile.offsetHeight;

      if (offsetMobile <=  wrapHeight - heightMobile) {
        const offsetBottom = 10;
        this.imgMobileTemplate.style.transform = `translateY(${wrapHeight - heightMobile - offsetBottom}px)`;
        return;
      }

      if (offsetMobile > 0) {
        this.imgMobileTemplate.style.transform = `translateY(0px)`;
        return;
      }

      this.imgMobileTemplate.style.transform = `translateY(${offsetMobile}px)`;
    },
  }
}
</script>

<style scoped>

</style>
