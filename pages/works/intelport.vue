<template>
  <div>
    <div class="portfolio pf-intelport">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"/>
      <MainPageSection />
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
  import MainPageSection from "~/components/works/intelport/MainPageSection";
  import WorksSection from "~/components/sections/WorksSection";
  import bgImageHeader  from "@/static/img/portfolio/pf-intelport/header.png";
  export default {
    name: "IntelportPage",
    components: {ReviewsPortfolio, WorksSection, TotalSection, MainPageSection, HeaderSection},
    mixins: [worksDetail],
    data() {
      return {
        bgImageHeader
      }
    }
  }
</script>

<style lang="scss">
.pf-intelport {
  --main-bk-color: #0D1A2B;
  --main-color: #F7F8FC;
  --color-teg: #9099A3;
  --bk-color: #112034;
  --color-text: #4F76E7;
  --color-arrow: #1C314D;
  --color-tooltip: #00AFD7;
  --color-line: #2b3b59;

  --bk-total: #071422;
  --title-total: #F7F8FC;
  --teg: #93939B;
  --bk-teg: #232533;

  --grafic-axis-text: #4A4D69;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #4F76E7;

  --reviews-title: #1C314D;
  --reviews-image: #1C314D;
  --reviews-text: #F7F8FC;
  --main-text: #F7F8FC;
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";

@import "@/assets/scss/style/portfolio/pf-intelport/pf-intelport.scss";

</style>
