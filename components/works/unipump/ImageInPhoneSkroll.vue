<template>
  <div ref="containerScroll" class="portfolio__banner-mobile" v-observe-visibility="visibilityChanged">
    <div ref="mobileWrap" class="mobile-display" >
      <img :src="img" class="mobile-display__img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageInPhoneSkroll",
  props: {
    img: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isEventScroll: false
    }
  },
  computed: {
    containerScroll() {
      return  this.$refs.containerScroll;
    },
    wrapMobile() {
      return this.$refs.mobileWrap;
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
      if (!this.containerScroll || !this.imgMobileTemplate) {
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
      const wrapDesktopRect = this.containerScroll.getBoundingClientRect();
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
      if (this.containerScroll && this.imgMobileTemplate) {
        return  this.containerScroll.offsetHeight / this.imgMobileTemplate.offsetHeight; // 1:1;
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
