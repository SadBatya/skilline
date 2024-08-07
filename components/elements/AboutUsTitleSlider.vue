<template>
<!--  v-if="list && list.length"-->
  <swiper class="text-slider swiper" :class="classMod" :options="swiperOptions" v-on:slideChangeTransitionStart="changeSlide">
     <template v-if="list && list.length">
       <swiper-slide v-for="(item, index) in list" :key="index">
         <div class="text-slider__item">{{item.title}}</div>
       </swiper-slide>
     </template>
  </swiper>
</template>

<script>
export default {
  name: "AboutUsTitleSlider",
  props: {
    list: Array,
    defaultList: Array,
    classMod: String,
  },
  data() {
    return {
      swiperOptions: {
        effect: 'fade',
        fadeEffect: {
          crossFade: false
        },
        simulateTouch: false,
        loop: true,
        loopAdditionalSlides: 2,
        allowTouchMove: false,
        autoplay: {
          delay: 5000,
        },
        direction: 'vertical',
        speed: 0,
      }
    }
  },
  methods: {
    changeSlide(swiper) {
      this.$emit('changeSlide', swiper);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/text-slider.scss";
</style>

