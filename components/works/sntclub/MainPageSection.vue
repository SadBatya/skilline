<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small _main-bg">
    <template #description >
      <p class="portfolio__description">Представляет собой удобный личный кабинет для каждого участника
        СНТ, где собрана вместе вся актуальная и необходимая информация.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import image from "~/static/img/portfolio/pf-snt/img1.png"
export default {
  name: "MainPageSectionSnt",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Главная страница",
      image
    }
  }
}
</script>

<style scoped>

</style>
