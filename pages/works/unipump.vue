<template>
  <div>
    <div class="portfolio pf-unipump">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"/>
      <MainPageSection />
      <CatalogPage />
      <CardDetail />
      <CartPage />
      <PersonalCabinetPage />
      <TotalSection v-if="bindTotalBlock"  v-bind="bindTotalBlock"/>
      <ReviewsSection v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>

</template>

<script>
import worksDetail from "~/mixins/worksDetail";

import HeaderSection from "~/components/works/base/HeaderSection";
import MainPageSection from "~/components/works/unipump/MainPageSection";
import TotalSection from "~/components/works/base/TotalSection";
import ReviewsSection from "~/components/works/base/ReviewsSection";
import WorksSection from "~/components/sections/WorksSection";

import bgImageHeader from "@/static/img/portfolio/pf-unipump/header-bg.png"
import CatalogPage from "~/components/works/unipump/CatalogPage.vue";
import CardDetail from "~/components/works/unipump/CardDetail.vue";
import CartPage from "~/components/works/unipump/CartPage.vue";
import PersonalCabinetPage from "~/components/works/unipump/PersonalCabinetPage.vue";


export default {
  name: "UnipumpPage",
  components: {
    PersonalCabinetPage,
    CartPage,
    CardDetail,
    CatalogPage,
    WorksSection,
    ReviewsSection,
    TotalSection,
    MainPageSection,
    HeaderSection
  },
  mixins: [worksDetail],
  data() {
    return {
      bgImageHeader
    }
  }
}
</script>

<style lang="scss">
.pf-unipump {
  --bk-header-block: #253746;

  --main-color: #F7F8FC;
  --color-text: #00AFD7;
  --color-teg: #9099A3;
  --color-bk-teg: #2A3B4A;

  --bk-color: #18242D;
  --bk-color-2: #F8F9FA;

  --color-arrow: #1C314D;
  --color-tooltip: #004DF5;
  --color-line: #2b3b59;

  --bk-total: #253746;
  --title-total: #253746;
  --teg: #9099A3;
  --bk-teg: #2A3B4A;

  --grafic-axis-text: #4A4D69;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #004DF5;

  --reviews-title: #324453;
  --reviews-image: #324453;
  --reviews-text: #F7F8FC;
  --main-text: #F7F8FC;

  --tabs-color-default: #F7F8FC;
  --tabs-color-active: #00AFD7;
  --tabs-color-text: #F7F8FC;
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";
@import "@/assets/scss/style/_tabs.scss";

@import "@/assets/scss/style/portfolio/pf-unipump/pf-unipump";

</style>
