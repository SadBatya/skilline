<template>
  <div class="pf-herocraft__bk-color">
    <div class="portfolio__decoration-image" :style="{backgroundImage: `url('${bgImage}')`}"></div>
    <div class="pf-container">
      <div class="portfolio__inner ">
        <div class="portfolio__wrap-block">
          <div class="portfolio__box-title">
            <h2 class=" pf-herocraft__slide-title">Добро пожаловать в причудливый и разрозненный мир
              увлекательных игр.</h2>
          </div>
          <div class="main-slider swiper" v-swiper:mainSlider="swiperOptions">
            <div class="swiper-wrapper main-slider__wrap-sliders">
              <div v-for="(src, index) in sliderItems" :key="index" class="main-slider__slider swiper-slide">
                <img :src="src"/>
              </div>
            </div>
            <div class="main-slider__btn-next swiper-button-next">
              <svg class="main-slider__btn-arrow" xmlns="http://www.w3.org/2000/svg" width="8.024"
                   height="21.029" viewBox="0 0 8.024 21.029">
                <path d="M235,24l6,10-6,10" transform="translate(-234.143 -23.486)" fill="none"
                      stroke="#fff" stroke-width="2"/>
              </svg>
              <svg class="main-slider__btn-bg" xmlns="http://www.w3.org/2000/svg" width="64.5"
                   height="60" viewBox="0 0 64.5 60">
                <path d="M208,4h49l15.5,28L257,64H208Z" transform="translate(-208 -4)" fill="#fff"
                      opacity="0.2"/>
              </svg>
              <svg class="main-slider__btn-hover" xmlns="http://www.w3.org/2000/svg" width="66.095"
                   height="61.5" viewBox="0 0 66.095 61.5">
                <path d="M213,1h49l15.5,28L262,61H213Z" transform="translate(-212.25 -0.25)"
                      fill="none" stroke="#fff" stroke-width="1.5" opacity="0.4"/>
              </svg>

            </div>
            <div class="main-slider__btn-prev swiper-button-prev">
              <svg class="main-slider__btn-arrow" xmlns="http://www.w3.org/2000/svg" width="8.024"
                   height="21.029" viewBox="0 0 8.024 21.029">
                <path d="M235,24l6,10-6,10" transform="translate(-234.143 -23.486)" fill="none"
                      stroke="#fff" stroke-width="2"/>
              </svg>
              <svg class="main-slider__btn-bg" xmlns="http://www.w3.org/2000/svg" width="64.5"
                   height="60" viewBox="0 0 64.5 60">
                <path d="M208,4h49l15.5,28L257,64H208Z" transform="translate(-208 -4)" fill="#fff"
                      opacity="0.2"/>
              </svg>
              <svg class="main-slider__btn-hover" xmlns="http://www.w3.org/2000/svg" width="66.095"
                   height="61.5" viewBox="0 0 66.095 61.5">
                <path d="M213,1h49l15.5,28L262,61H213Z" transform="translate(-212.25 -0.25)"
                      fill="none" stroke="#fff" stroke-width="1.5" opacity="0.4"/>
              </svg>
            </div>
            <div class="swiper-pagination main-slider__pagination" slot="pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-herocraft/blur2.png";
import sliderImg1 from "@/static/img/portfolio/pf-herocraft/main-slide/1.png"
import sliderImg2 from "@/static/img/portfolio/pf-herocraft/main-slide/2.png"
import sliderImg3 from "@/static/img/portfolio/pf-herocraft/main-slide/3.png"
export default {
  name: "BigSlider",
  data() {
    return {
      sliderItems: [sliderImg1, sliderImg2, sliderImg3],
      bgImage,
      swiperOptions: {
        speed: 600,
        parallax: true,
        loop: true,
        navigation: {
          nextEl: '.main-slider__btn-next.swiper-button-next',
          prevEl: '.main-slider__btn-prev.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination.main-slider__pagination',
          clickable: true,
        },
        keyboard: true,
      }
    }
  }
}
</script>

<style scoped>

</style>
