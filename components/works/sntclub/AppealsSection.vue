<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small" main-box-class="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Обеспечили эффективную коммуникацию председателя с участниками
        СНТ — все обращения регистрируются и отображаются в одной таблице с возможностью их
        интерактивной обработки.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/img6.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "AppealsSection",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Обращения",
      image,
    }
  }
}
</script>

<style scoped>

</style>
