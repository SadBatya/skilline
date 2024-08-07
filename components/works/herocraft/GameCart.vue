<template>
  <DesktopAndMobilePage
  :title="title"
  :imgMain="imgDesktop"
  class-mod="pf-herocraft__wrap-cards-game"
  :style="{backgroundImage:`url('${bgImage}')`}"
  >
    <template #description>
      <p class="portfolio__description">Ранее была малоинформативна. Мы уделили больше внимания
        удобству предоставления информации и отображению графических материалов — размеcтили широкий
        баннер с обложкой и описанием, а также расширили место для скриншотов и видео для каждой
        игры.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import imgDesktop from "@/static/img/portfolio/pf-herocraft/card-game.png";
import bgImage from "@/static/img/portfolio/pf-herocraft/blur4.png"

export default {
  name: "GameCart",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Карточка игры",
      imgDesktop,
      bgImage
    }
  }
}
</script>

<style scoped>

</style>
