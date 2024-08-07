<template>
  <DesktopAndMobilePageWithScroll
    :title="title"
    :description="description"
    :imgMain="imgMain"
    :imgMobile="imgMobile"
  />
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-kostrovok/page-1.png";
import imgMobile from "@/static/img/portfolio/pf-kostrovok/page-1-m.png"
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll";

export default {
  name: "MainPageSectionKostrovok",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      title: "Главная страница",
      description: "Сайт для отслеживания будущих IPO и стоимости акций, финансовых показателей компаний, а также анализ конкурентов и аналитика отраслей.",
      imgMain: imgDesktop,
      imgMobile,
    }
  },
}
</script>

<style scoped>

</style>
