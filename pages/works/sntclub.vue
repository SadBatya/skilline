<template>
  <div>
    <div class="portfolio pf-snt">
      <HeaderSection v-if="headerBlock" :info="headerBlock" :title="title" :bg-image="bgImageHeader"></HeaderSection>

      <MainPageSectionSnt id="mainBlock"/>
      <AccountIndicationSection/>
      <BillsAndContributions id="paymentBlock"/>
      <RegistryRegion/>
      <CardRegion id="bdBlock"/>
      <DocumentsSectionSnt />
      <AppealsSection/>
      <ChatSnt id="chatBlock"/>
      <NotificationSnt />
      <BaseData/>
      <TariffSection/>
      <TotalSection v-if="bindTotalBlock" v-bind="bindTotalBlock"/>
      <ReviewsPortfolio v-if="review && review.id" :review="review"/>
    </div>
    <WorksSection title-inner="Другие работы" :company-disabled="id ? [id]: null"/>
  </div>
</template>

<script>
import worksDetail from "~/mixins/worksDetail";
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";
import TotalSection from "~/components/works/base/TotalSection";
import WorksSection from "~/components/sections/WorksSection";
import ReviewsPortfolio from "~/components/works/base/ReviewsSection";
import MainPageSectionSnt from "~/components/works/sntclub/MainPageSection";
import AccountIndicationSection from "~/components/works/sntclub/AccountIndicationSection";
import BillsAndContributions from "~/components/works/sntclub/BillsAndContributions";
import CardRegion from "~/components/works/sntclub/CardRegion";
import RegistryRegion from "~/components/works/sntclub/RegistryRegion";
import DocumentsSectionSnt from "~/components/works/sntclub/DocumentsSection";
import AppealsSection from "~/components/works/sntclub/AppealsSection";
import ChatSnt from "~/components/works/sntclub/ChatSnt";
import BaseData from "~/components/works/sntclub/BaseData";
import TariffSection from "~/components/works/sntclub/TariffSection";
import HeaderSection from "~/components/works/base/HeaderSection";
import bgImageHeader from "@/static/img/portfolio/pf-snt/main-bg-1.png"
import NotificationSnt from "~/components/works/sntclub/NotificationSnt";

export default {
  name: "SntClubPage",
  components: {
    NotificationSnt,
    HeaderSection,
    TariffSection,
    BaseData,
    ChatSnt,
    AppealsSection,
    DocumentsSectionSnt,
    RegistryRegion,
    CardRegion,
    BillsAndContributions,
    AccountIndicationSection,
    MainPageSectionSnt,
    ReviewsPortfolio,
    WorksSection,
    TotalSection
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
.pf-snt {
  --main-bk-color: #319ADC;
  --main-color: #F7F8FC;
  --color-teg: #9FD1F0;
  --bk-color: #F0F7FD;
  --tag-bg-color: #3091e0;
  --color-arrow: #42A7E6;
  --color-tooltip: #00AFD7;

  --main-box: #F0F7FD;
  --teg: #93939B;
  --bk-teg: #1B1B1F;

  // total
  --title-total: #0E0E10;
  --bk-total: #0E0E10;

  --grafic-axis-text: #446d81;
  --chart-text: #F7F8FC;
  --chart-line: #232533;
  --chart-text-hover: #00AFD7;
  // reviews
  --color-line: #319ADC;
  --reviews-title: #1B1B1F;
  --reviews-image: #319ADC;
  --reviews-text: #F4F5FA;
  --color-text: #319ADC;
}

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/portfolio.scss";
@import "@/assets/scss/style/portfolio/test-mobile.scss";
@import "@/assets/scss/style/portfolio/total.scss";
@import "@/assets/scss/style/portfolio/pf-header.scss";

@import "@/assets/scss/style/portfolio/pf-snt/pf-snt.scss";
@import "@/assets/scss/style/portfolio/pf-snt/chat.scss";
@import "@/assets/scss/style/portfolio/pf-snt/snt-card.scss";

</style>
