<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small" main-box-class="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Специальный раздел, созданный для хранения и представления по
        запросу юридических и организационно-правовых документов СНТ: простая и удобная в
        использовании система каталогов. </p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/img5.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "DocumentsSectionSnt",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Документы",
      image,
    }
  }
}
</script>

<style scoped>

</style>
