<template>
 <DesktopAndMobilePage
   :title="title"
   :imgMain="imgDesktop"
   class-mod="pf-herocraft__publisher"
   :style="{backgroundImage:`url('${bgImage}')`}"
 >
   <template #description>
     <p class="portfolio__description">Сайт для отслеживания будущих IPO и стоимости акций,
       финансовых показателей компаний, а также анализ конкурентов и аналитика отраслей.</p>
   </template>
 </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import imgDesktop from "@/static/img/portfolio/pf-herocraft/publisher.png";
import bgImage from "@/static/img/portfolio/pf-herocraft/blur5.png"

export default {
  name: "PublisherSection",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Издательство",
      imgDesktop,
      bgImage
    }
  }
}
</script>

<style scoped>

</style>
