<template>
  <div>
    <div class="portfolio pf-herocraft">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"/>
      <MainPageSection/>
      <BigSlider />
      <CatalogPage />
      <GameCart/>
      <PublisherSection />
      <TotalSection v-if="bindTotalBlock"  v-bind="bindTotalBlock"/>
      <ReviewsSection v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>

</template>

<script>
import worksDetail from "~/mixins/worksDetail";

import HeaderSection from "~/components/works/base/HeaderSection";
import MainPageSection from "~/components/works/herocraft/MainPageSection";
import CatalogPage from "~/components/works/herocraft/CatalogPage";
import BigSlider from "~/components/works/herocraft/BigSlider";
import GameCart from "~/components/works/herocraft/GameCart";
import PublisherSection from "~/components/works/herocraft/PublisherSection";
import TotalSection from "~/components/works/base/TotalSection";
import ReviewsSection from "~/components/works/base/ReviewsSection";
import WorksSection from "~/components/sections/WorksSection";

import bgImageHeader from "@/static/img/portfolio/pf-herocraft/main-banner.png"


export default {
  name: "HerocraftPage",
  components: {
    WorksSection,
    ReviewsSection,
    TotalSection,
    PublisherSection,
    GameCart,
    BigSlider,
    CatalogPage,
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
.pf-herocraft {
  --main-color: #1A1C2B;
  --color-text: #FF1812;
  --main-text: #F7F8FC;
  --bk-color: #161825;
  --white-color: #fff;

  --color-teg: #9099A3;

  --color-arrow: #303346;

  --color-tooltip: #00AFD7;
  --color-design: #1CD998;
  --color-front: #7381EB;
  --color-back: #B8DB23;
  --color-test: #DE39B0;

  --reviews-title: #1b1b1f;
  --reviews-image: #323238;
  --reviews-text: #F7F8FC;
  --color-line: #152438;
  --title-total: #fff;
  --bk-total: #071422;
  --teg: #93939B;
  --bk-teg: #232533;


  --grafic-axis-text: #4A4D69;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #FF1812;
// --main-text
//  --bk-teg
//  --color-text
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";

@import "@/assets/scss/style/portfolio/pf-herocraft/pf-herocraft.scss";
@import "@/assets/scss/style/portfolio/pf-herocraft/main-slider.scss";
@import "@/assets/scss/style/portfolio/pf-herocraft/row-slider.scss";
</style>
