<template>
  <DesktopAndMobilePageWithScroll
    class-mod="pf-herocraft__wrap-blur"
    :title="title"
    :description="description"
    :imgMain="imgMain"
    :imgMobile="imgMobile"
    :style="{backgroundImage:`url('${bgImage}')`}"
  />
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-herocraft/bg-1-1.png";
import imgMobile from "@/static/img/portfolio/pf-herocraft/scroll.png"
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll";
import bgImage from "@/static/img/portfolio/pf-herocraft/blur1.png";

export default {
  name: "MainPageSection",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      title: "Главная страница",
      description: "Минимализм и универсальность — ничего лишнего. Чистый дизайн с использованием контуров позволяет легко адаптировать его к разным устройствам, а также лучше фокусировать внимание пользователей на информации.",
      imgMain: imgDesktop,
      imgMobile,
      bgImage
    }
  },
}
</script>

<style scoped>

</style>
