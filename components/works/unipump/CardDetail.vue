<template>
  <DesktopAndMobilePageWithScroll
    title="Карточка товара"
    :img-main="imgDesktop"
    :img-mobile="imgMobile"
  >
    <template #description>
      <p class="portfolio__description">Построена по принципу сплит-экрана: в левой части - медиаконтент по
        продукции (фото, видео). Реализовали возможность скроллить блок для более удобного просмотра всех
        медиа.</p>
      <br>
      <p class="portfolio__description">Правый блок содержит всю ключевую информацию и переходы к основным
        разделам товара + СТА на покупку и авторизацию партнеров. </p>
    </template>
    <template #nextBlock>
      <div class="portfolio__fon-wrapper">
        <img class="portfolio__fon-logo" src="/img/portfolio/pf-unipump/fon-logo.svg" alt="fon-logo">
      </div>
    </template>
  </DesktopAndMobilePageWithScroll>
</template>

<script>
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll.vue";
import imgDesktop from "@/static/img/portfolio/pf-unipump/card-page-banner.jpg";
import imgMobile from "@/static/img/portfolio/pf-unipump/card-mobile.jpg";

export default {
  components: {DesktopAndMobilePageWithScroll},
  data(){
    return {
      imgDesktop,
      imgMobile
    }
  }
}
</script>

<style>

</style>
