<template>
    <DesktopAndMobilePageWithScroll
      :title="main.title"
      :img-main="main.imgMain"
      :img-mobile="main.imgMob"
    >
      <template #description>
        <p class="portfolio__description">{{ main.description }}</p>
        <p class="portfolio__description">{{ main.descriptionSecond }}</p>
      </template>
    </DesktopAndMobilePageWithScroll>
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-unipump/main-page-banner.jpg";
import imgMobile from "@/static/img/portfolio/pf-unipump/main-mob.png";
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll.vue";

export default {
  name: "MainPageSectionRosmen",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      main: {
        title: "Главная страница",
        description: "Контентная область содержит в себе ключевые СТА и смысловые баннеры, которые отображают основные преимущества компании.",
        descriptionSecond: "Реализация неизменных навигационных элементов: переход в каталог продукцию, поиск, контакты, авторизация для партнеров.",
        imgMain: imgDesktop,
        imgMob: imgMobile
      },
    }
  },
}
</script>

<style scoped>

</style>
