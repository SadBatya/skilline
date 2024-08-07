<template>
  <DesktopAndMobilePage :title="title" :img-main="image" class-mod="pf-container-small">
    <template #description>
      <p class="portfolio__description">Наглядное отображение услуг и тарифных планов с помощью
        колоночной системы. Минималистичный дизайн обеспечивает эстетичность и соответствие общему
        стилю сервиса, делая информацию легко воспринимаемой для пользователей.</p>
    </template>
  </DesktopAndMobilePage>
</template>

<script>
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";
import image from "~/static/img/portfolio/pf-snt/img8.png";

export default {
  name: "TariffSection",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Тарифы",
      image,
    }
  }
}
</script>

<style scoped>

</style>
