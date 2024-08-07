<template>
  <section class="we-developers">
    <div class="container we-developers__container">
      <client-only>
        <div class="we-developers__image-container">
          <swiper class="we-developers__image-slider" :options="swiperOptions" ref="swiperImage">
            <swiper-slide v-for="(item, index) in mainBlockList" :key="index" class="we-developers__image">
                <img  :src="item.image" alt="`Наш ${item.title}`" loading="lazy"/>
            </swiper-slide>
          </swiper>
        </div>

      </client-only>

      <div class="we-developers__wrap-title">
        <p class="we-developers__title title">{{ about.title || "МЫ" }}</p>
        <client-only>
          <AboutUsTitleSlider v-if="mainBlockList && mainBlockList.length" class-mod="we-developers__subtitle"
                              :list="mainBlockList" ref="textSlider" @changeSlide="changeTitleSlide"/>
          <div v-else class="developers__subtitle">
            <div class="text-slider__item">Разработчики</div>
          </div>
        </client-only>

      </div>
      <client-only>
        <swiper class="we-developers__quote-block swiper" ref="swiperQuote" :options="swiperOptions" >
          <swiper-slide v-for="(slide, index) in mainBlockList" :key="`quote-${index}`"
                        class="we-developers__quote-content">
            <p v-if="slide.quote" class="we-developers__quote-description" v-html="slide.quote" />
            <div v-if="slide.quote && slide.name" class="we-developers__person">
              <p class="we-developers__person-name">{{ slide.name }}</p>
              <p v-if="slide.position" class="we-developers__person-position">{{ slide.position }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";
import AboutUsTitleSlider from "~/components/elements/AboutUsTitleSlider";

export default {
  name: "AboutUsMainSection",
  components: {AboutUsTitleSlider},
  data() {
    return {
        swiperOptions: {
          simulateTouch: false,
          allowTouchMove: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 0,
        }
    }
  },
  async fetch() {
    await this.fetchAboutUs();
  },
  computed: {
    about() {
      return this.$store.state.aboutUs.aboutPage;
    },
    mainBlockList() {
      return this.about.mainBlockList || [];
    },
  },
  mounted() {
    this.$nextTick().then(() => {
    })
  },
  methods: {
    ...mapActions({
      fetchAboutUs: 'aboutUs/fetchAboutUs',
    }),
    changeTitleSlide(swiper) {
      const swiperQuote = this.$refs.swiperQuote;
      const swiperImage = this.$refs.swiperImage;
      const realIndex = swiper.realIndex;
      if (swiperQuote) {
        swiperQuote.$swiper.slideTo(realIndex, 500, false)
      }

      if (swiperImage) {
        swiperImage.$swiper.slideTo(realIndex, 500, false)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/we-developers.scss";
</style>
