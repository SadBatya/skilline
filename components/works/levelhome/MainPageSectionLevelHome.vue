<template>
  <DesktopAndMobilePageWithScroll
    :title="title"
    :description="description"
    :imgMain="imgMain"
    :imgMobile="imgMobile"
  />
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-levelhome/levelhome-example-1.png";
import imgMobile from "@/static/img/portfolio/pf-levelhome/levelhome-example-1-mb.png"
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll";

export default {
  name: "MainPageSectionKostrovok",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      title: "Главная страница",
      description: "Главная страница демонстрирует активное развитие компании, сильный бренд и предоставляет пользователям простое и удобное решение для навигации и поиска необходимой информации, демонстрируя высокий уровень сервиса и клиенториентированности.",
      imgMain: imgDesktop,
      imgMobile,
    }
  },
}
</script>

<style scoped>




</style>
