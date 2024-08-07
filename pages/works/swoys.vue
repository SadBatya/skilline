<template>
  <div>
    <div class="portfolio pf-swoys">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader" />
      <MainPageSectionSwoys id="mainBlock"/>
      <EventsSectionSwoys id="speedBlock"/>
      <CreateEventsSectionSwoys id="eventsBlock"/>
      <PersonalCabinetSection id="lkBlock"/>
      <TotalSection v-if="bindTotalBlock" v-bind="bindTotalBlock"/>
      <ReviewsSection v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>

</template>

<script>
import worksDetail from "~/mixins/worksDetail";
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";

import ReviewsSection from "~/components/works/base/ReviewsSection";
import WorksSection from "~/components/sections/WorksSection";
import TotalSection from "~/components/works/base/TotalSection";
import MainPageSectionSwoys from "~/components/works/swoys/MainPageSection";
import EventsSectionSwoys from "~/components/works/swoys/EventsSection";
import CreateEventsSectionSwoys from "~/components/works/swoys/CreateEventsSection";
import PersonalCabinetSection from "~/components/works/swoys/PersonalCabinetSection";
import HeaderSection from "~/components/works/base/HeaderSection";

import bgImageHeader from "@/static/img/portfolio/pf-swoys/main-banner.png"


export default {
  name: "SwoysPage",
  components: {
    HeaderSection,
    PersonalCabinetSection,
    CreateEventsSectionSwoys,
    EventsSectionSwoys,
    MainPageSectionSwoys,
    TotalSection,
    WorksSection,
    ReviewsSection,
  },
  mixins: [worksDetail, MethodScrollToBlock],
  data() {
    return {
      bgImageHeader
    }
  }
}
</script>

<style lang="scss">
.pf-swoys {
  --main-bk-color: #1B51FF;
  --main-box: #F0F7FD;
  --main-color: #F4F5FA;
  --main-text: #0E0E10;
  --color-teg: #728EF4;
  --color-teg-hover: #B9D450;
  --bk-color: #F4F5FA;
  --color-arrow: #728EF4;

  --color-tooltip: #00AFD7;
  --teg: #728EF4;
  --bk-teg: #1B42EE;
  --tabs-color-default: #93939B;
  --tabs-color-active: #1B51FF;
  --tabs-color-text: #0E0E10;

  // total
  --title-total: #0E0E10;
  --bk-total: #0E0E10;
  // reviews
  --color-line: #1B1B1F;
  --reviews-title: #1B1B1F;
  --reviews-image: #1B42EE;
  --reviews-text: #F4F5FA;
  --color-text: #1B42EE;

  --grafic-axis-text: #728EF4;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #FF1812;
}


@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";

@import "@/assets/scss/style/portfolio/pf-swoys/pf-swoys.scss";
</style>
