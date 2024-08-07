<template>
  <DesktopAndMobilePage
    class-mod="pf-herocraft__blur-cards"
    :title="title"
    :imgMain="imgMain"
    :style="{backgroundImage: `url('${bgImage}')`}"
  >
    <template #description>
      <p class="portfolio__description">При редизайне мы использовали более гибкую сеточную структуру
        каталога, которая универсальнее стандартной и позволяет нам одинаково удобно управлять
        представлением контента в десктопной и адаптивной версиях.</p>
    </template>
    <template #rightBlock>
      <div class="portfolio__wrap-text-project mobile-scroll">
        <div  class="pf-herocraft__cards">
          <div class="pf-herocraft__inner-img">
            <img :src="imgRight2" alt="">
          </div>
          <p class="portfolio__description">Добавили баннер с топовыми играми, поиск по жанрам и сеточное
            отображение всех игровых релизов. Адаптивный дизайн способствует привлечению внимания и
            созданию позитивного впечатления у пользователей.</p>
          <div class="pf-herocraft__inner-img">
            <img :src="imgRight3" alt="">
          </div>
        </div>
      </div>
    </template>
    <template #nextBlock>
      <SliderCatalog />
    </template>

  </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import SliderCatalog from "~/components/works/herocraft/SliderCatalog";
import bgImage from "@/static/img/portfolio/pf-herocraft/blur3.png"
import imgDesktop from "@/static/img/portfolio/pf-herocraft/img-cards.png";
import imgRight1 from "@/static/img/portfolio/pf-herocraft/img-cards.png"
import imgRight2 from "@/static/img/portfolio/pf-herocraft/sl-img1.png"
import imgRight3 from "@/static/img/portfolio/pf-herocraft/sl-img2.png"
export default {
  name: "CatalogPage",
  components: {SliderCatalog, DesktopAndMobilePage},
  data() {
    return {
      title: "Каталог игр",
      imgMain: imgDesktop,
      imgRight1,
      imgRight2,
      imgRight3,
      bgImage
    }
  }
}
</script>

<style scoped>

</style>
