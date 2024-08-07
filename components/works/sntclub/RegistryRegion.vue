<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small" mainBoxClass="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Сервис предлагает удобный фукнционал для работы с информацией
        об участках и их владельцах, включая возможность редактирования данных, а также удобное
        добавление новых участков.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/img3.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "RegistryRegion",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Реестр участков",
      image,
    }
  }
}
</script>

<style scoped>

</style>
