<template>
  <DesktopAndMobilePageWithScroll
    :title="title"
    :description="description"
    :img-main="imgMain"
    :img-mobile="imgMobile"

  />
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-swoys/img-big-1.jpg";
import imgMobile from "@/static/img/portfolio/pf-swoys/scroll-1.jpg"
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll";

export default {
  name: "MainPageSectionSwoys",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      title: "Главная страница",
      description: "Разработали уникальный проект, который объединяет и помогает в работе волонтеров, представителей бизнеса и специалистов. Дизайн сайта, разработан таким образом, чтобы с первых страниц транслировать образ компании как надежного и открытого социального ресурса, и предоставлять для каждого пользователя удобную навигацию в сочетании с высокой скоростью работы.",
      imgMain: imgDesktop,
      imgMobile,
    }
  },
}
</script>

<style scoped>

</style>
