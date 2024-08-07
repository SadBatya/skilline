<template>
  <div>
    <div class="portfolio pf-rosmen">
      <HeaderSection
        v-if="headerBlock"
        :info="headerBlock"
        :title="title"
        :bg-image="bgImageHeader"
        :bg-image-second="bgImageHeaderSecond"
      />
      <MainPageSectionRosmen />
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
  import bgImageHeader  from "@/static/img/portfolio/pf-rosmen/header-bg-1.png";
  import bgImageHeaderSecond  from "@/static/img/portfolio/pf-rosmen/header-bg-2.png";
  import MainPageSectionRosmen from "~/components/works/rosmen/MainPageSection";
  export default {
    name: "RosmenPage",
    components: {MainPageSectionRosmen, ReviewsPortfolio, WorksSection, TotalSection, HeaderSection},
    mixins: [worksDetail],
    data() {
      return {
        bgImageHeader,
        bgImageHeaderSecond
      }
    }
  }
</script>

<style lang="scss">
.pf-rosmen {
  //--main-bk-color: #F8F9FA;
  --main-color: #0E0E10;
  --color-teg: #9099A3;
  --color-bk-teg: #F4F4F5;
  --bk-color: #F7F8FC;
  --color-text: #004DF5;
  --color-arrow: #1C314D;
  --color-tooltip: #004DF5;
  --color-line: #2b3b59;

  --bk-total: #071422;
  --title-total: #0E0E10;
  --teg: #93939B;
  --bk-teg: #232533;

  --grafic-axis-text: #4A4D69;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #004DF5;

  --reviews-title: #004DF5;
  --reviews-image: #004DF5;
  --reviews-text: #F7F8FC;
  --main-text: #F7F8FC;
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";

@import "@/assets/scss/style/portfolio/pf-rosmen/pf-rosmen.scss";
</style>
