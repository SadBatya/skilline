<!-- переместил директиву v-swiper перед классом. чтобы линт перестал ругаться -->
<!-- slidesPerView Поменял на фгещ - разницы особо нет. Но по документации этот если параметр = auto то
слайдер становиться адаптивным -->
<template>
  <div v-swiper:levelHomeSLider="swiperOptions" class="main-slider swiper" >
    <div class="swiper-wrapper main-slider__wrap-sliders">
      <div
        v-for="(info, index) in sliderItems"
        :key="index"
        class="main-slider__slider swiper-slide"
      >
        <div class="level_home-intensieve-image">
          <img :src="info.img" alt="">
          <p class="levelhome_initiatives-slider-text">{{ info.title }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import slideImg1 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-1.png'
import slideImg2 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-2.png'
import slideImg3 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-3.png'
import slideImg4 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-4.png'
import slideImg5 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-5.png'
import slideImg6 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-6.png'
import slideImg7 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-7.png'
import slideImg8 from '@/static/img/portfolio/pf-levelhome/intensive-slider-img/intensive-slide-8.png'


export default {
  name: 'SliderLevelHome',
  data() {
    return {
      sliderItems: [
        {
          title: '2 место в рейтинге Forbes',
          img: slideImg1,
        },
        {
          title: 'Старт продаж апартаментов в Level Южнопортовая',
          img: slideImg2,
        },
        {
          title: '4 ноября - Открытие офиса продаж Level Нижегородская',
          img: slideImg3,
        },
        {
          title:
            'Мы получили разрешение на ввод в эксплуатацию корпусов «Юг» и «Восток» в Level Причальный',
          img: slideImg4,
        },
        {
          title: 'Уведомление о смене адреса АО СЗ «Инспайр»',
          img: slideImg5,
        },
        {
          title:
            'Увеличенная скидка 5% на квартиры и апартаменты в наших проектах',
          img: slideImg6,
        },
        {
          title: 'Онлайн-консультации в холодное время года',
          img: slideImg7,
        },
        {
          title: 'Изменение первоначального взноса',
          img: slideImg8,
        },
      ],

      currentSlide: 1,
      swiperOptions: {
        slidesPerView: 'auto',
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        spaceBetween: 10,
        keyboard: true,
        breakpoints: {
          380: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        },
      },
    }
  },
}
</script>

<style></style>
