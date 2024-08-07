<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small" main-box-class="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Добавили раздел, который содержит широкий спект полезных
        статей, новостей и выдержек из законодательства с удобным доступом к информации,
        автоматическим обновлением и расширением содержания.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/img7.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "BaseData",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "База знаний",
      image,
    }
  }
}
</script>

<style scoped>

</style>
