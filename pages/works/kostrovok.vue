<template>
  <div>
    <div class="portfolio pf-kostrovok">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"/>
      <MainPageSectionKostrovok />
      <TotalSection v-if="bindTotalBlock"  v-bind="bindTotalBlock" />
      <ReviewsPortfolio v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>
</template>

<script>
  import worksDetail from "~/mixins/worksDetail";
  import HeaderSection from "~/components/works/base/HeaderSection";
  import TotalSection from "~/components/works/base/TotalSection";
  import ReviewsPortfolio from "~/components/works/base/ReviewsSection";
  import WorksSection from "~/components/sections/WorksSection";
  import bgImageHeader  from "@/static/img/portfolio/pf-kostrovok/main-bg.png";
  import MainPageSectionKostrovok from "~/components/works/kostrovok/MainPageSection";
  export default {
    name: "KostrovokPage",
    components: {MainPageSectionKostrovok, ReviewsPortfolio, WorksSection, TotalSection, HeaderSection},
    mixins: [worksDetail],
    data() {
      return {
        bgImageHeader
      }
    }
  }
</script>

<style lang="scss">
.pf-kostrovok {
  //--main-bk-color: #F8F9FA;
  --main-color: #0E0E10;
  --color-teg: #9099A3;
  --bk-color: #F8F9FA;
  --bk-color-header-info: #F0F0F4;
  --color-text: #D71001;
  --color-arrow: #1C314D;
  --color-tooltip: #D71001;
  --color-line: #2b3b59;

  --bk-total: #071422;
  --title-total: #0E0E10;
  --teg: #93939B;
  --bk-teg: #232533;

  --grafic-axis-text: #4A4D69;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #D71001;

  --reviews-title: #D71001;
  --reviews-image: #D71001;
  --reviews-text: #F7F8FC;
  --main-text: #F7F8FC;
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";

@import "@/assets/scss/style/portfolio/pf-kostrovok/pf-kostrovok.scss";
</style>
