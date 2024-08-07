<template>
  <SectionWithSlot :title="title">
    <template #description>
      <p class="portfolio__description">Раздел, в котором удобно группируются все необходимые
        документы на оплату с разделением на типы документов и подробным описанием платежей. </p>
    </template>
    <template>
      <div class="pf-snt__bills pf-container--extra-small">
        <div class="pf-snt__bills-main">
          <img  :src="image" alt="счета"/>
        </div>
        <div class="pf-snt__bills-aside">
          <img  :src="image2" alt="взносы"/>
        </div>
      </div>
    </template>
  </SectionWithSlot>
</template>

<script>
import image from "~/static/img/portfolio/pf-snt/bills-1.png";
import image2 from "~/static/img/portfolio/pf-snt/bills-2.png";
import SectionWithSlot from "~/components/works/base/SectionWithSlot";

export default {
  name: "BillsAndContributions",
  components: {SectionWithSlot},
  data() {
    return {
      title: "Мои счета и взносы",
      image,
      image2
    }
  }
}
</script>

<style scoped>

</style>
