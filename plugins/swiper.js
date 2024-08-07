import Vue from 'vue'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'// You can see that the import path is different from the previous version
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'// You can see that the import path is different from the previous version
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'// You can see that the import path is different from the previous version
import {  Swiper as SwiperClass, Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow, Mousewheel } from 'swiper';
SwiperClass.use([Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow, Mousewheel]);

Vue.use(getAwesomeSwiper(SwiperClass));
