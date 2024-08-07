<template>
  <DesktopAndMobilePage :title="title" :img-main="image" main-box-class="pf-container--extra-small">
    <template #description>
      <p class="portfolio__description">Представляет всю необходимую информацию о размере участка, его
        собственниках, наличии/отсутсвии задолжностей по коммунальным платежам.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/img4.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "CardRegion",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Карточка участка",
      image,
    }
  }
}
</script>

<style scoped>

</style>
