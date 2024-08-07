<template>
  <DesktopAndMobilePage title="История отправленных оповещений" :img-main="imageDoc" class-mod="pf-container-small" main-box-class="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Все это обеспечивает эффективное взаимодействие участников СНТ друг с другом и с руководством.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import imageDoc from "@/static/img/portfolio/pf-snt/img-9.png";

export default {
  name: "NotificationSnt",
  components: {DesktopAndMobilePage},
  data() {
    return {
      imageDoc
    }
  }
}
</script>

<style scoped>

</style>
