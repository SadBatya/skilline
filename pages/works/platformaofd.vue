<template>
  <div>
    <div class="portfolio pf-ofd">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"/>
      <MainPageSection />
      <TotalSection v-if="bindTotalBlock"  v-bind="bindTotalBlock" />
      <ReviewsSection v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>

</template>

<script>
import worksDetail from "~/mixins/worksDetail";

import ReviewsSection from "~/components/works/base/ReviewsSection";
import WorksSection from "~/components/sections/WorksSection";
import TotalSection from "~/components/works/base/TotalSection";
import MainPageSection from "~/components/works/ofd/MainPageSection";
import HeaderSection from "~/components/works/base/HeaderSection";
import bgImageHeader from "@/static/img/portfolio/pf-ofd/main-banner.png"


export default {
  name: "PlatformaofdPage",
  components: {
    HeaderSection,
    MainPageSection,
    TotalSection,
    WorksSection,
    ReviewsSection,
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
.pf-ofd {
  --main-bk-color: #F8F8F8;
  //--main-color: #F7F8FC;
  --main-color: #F7F8FC;

  --color-page: #0E0E10;
  --color-teg: #649FAF;
  //--bk-color: #2a5764;
  --bk-color: #F8F8F8;
  --bk-color-2: #2a5764;
  --color-text: #4BA1A5;
  --color-tooltip: #00AFD7;
  --bk-div: #14151A;
  --gray-text: #9099A3;
  --lg-gray-color: #93939B;
  // total
  --title-total: #0E0E10;
  --bk-total: #0E0E10;
  --teg: #649FAF;
  --bk-teg: #232533;
  // reviews
  --color-line: #E4E4E6;
  --reviews-title: #4BA1A5;
  --reviews-image: #4BA1A5;
  --reviews-text: #F7F8FC;
  --main-text: #F7F8FC;

  --grafic-axis-text: #2a5764;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #4BA1A5;
}


@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";

@import "@/assets/scss/style/portfolio/pf-ofd/pf-ofd.scss";
</style>
