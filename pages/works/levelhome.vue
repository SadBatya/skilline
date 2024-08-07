<template>
  <div class="portfolio pf-levelhome">
    <HeaderSection
      :style="{ position: 'sticky', top: '-150px' }"
      v-if="headerBlock"
      :info="headerBlock"
      :title="title"
      :bg-image="bgImageHeader"
    />
    <div class="pf-levelhome-other-blocks">
      <ClientLevelHome />
      <MainPageSectionLevelHome />
      <LevelHomeTwoImage />
      <LevelHomeReview />
      <LevelHomeObjectExample />
      <LevelHomeMap />
      <LevelHomeCardObject />
      <LevelHomeInitiatives />
      <TotalSection v-if="bindTotalBlock" v-bind="bindTotalBlock" />
      <ReviewsSection v-if="review && review.id" :review="review" />
    </div>
  </div>
</template>
<script>
import worksDetail from '~/mixins/worksDetail'
import HeaderSection from '~/components/works/base/HeaderSection'
import MainPageSectionLevelHome from '~/components/works/levelhome/MainPageSectionLevelHome'
import ClientLevelHome from '~/components/works/levelhome/ClientLevelHome.vue'
import bgImageHeader from '@/static/img/portfolio/pf-levelhome/levelhome-bg-main.png'
import LevelHomeTwoImage from '~/components/works/levelhome/LevelHomeTwoImage.vue'
import LevelHomeReview from '~/components/works/levelhome/LevelHomeReview.vue'
import LevelHomeCardObject from '~/components/works/levelhome/LevelHomeCardObject.vue'
import LevelHomeObjectExample from '~/components/works/levelhome/LevelHomeObjectExample.vue'
import ReviewsSection from '~/components/works/base/ReviewsSection'
import TotalSection from '~/components/works/base/TotalSection.vue'
import LevelHomeMap from '~/components/works/levelhome/LevelHomeMap.vue'
import LevelHomeInitiatives from '~/components/works/levelhome/LevelHomeInitiatives.vue'
export default {
  name: 'LeveHomePage',
  components: {
    HeaderSection,
    MainPageSectionLevelHome,
    ClientLevelHome,
    LevelHomeTwoImage,
    LevelHomeReview,
    LevelHomeCardObject,
    LevelHomeObjectExample,
    ReviewsSection,
    TotalSection,
    LevelHomeInitiatives,
    LevelHomeMap,
  },
  mixins: [worksDetail],
  data() {
    return {
      bgImageHeader,
    }
  },
}
</script>

<style lang="scss">
.pf-levelhome {
  --main-color: #1a1c2b;
  --color-text: #ffffff;
  --main-text: #f7f8fc;
  --review-author-name-color: #1b5d41;
  --bg-intesiev-component: #f3efe7;

  --svg-color: #1b5d41;
  --bk-color: #161825;
  --bk-color-component: #1b5d41;
  --white-color: #fff;
  --text-color-comment-review: #1a1a1a;

  --color-tag: #f1f4fd;
  --bg-color-tag: rgba(241, 244, 253, 0.1);
  --color-arrow: #303346;

  --color-tooltip: #00afd7;
  --color-design: #1cd998;
  --color-front: #7381eb;
  --color-back: #b8db23;
  --color-test: #de39b0;

  --reviews-title: #1b1b1f;
  --reviews-image: #323238;
  --reviews-text: #93939B;
  --color-line: #152438;
  --title-total: #0e0e10;
  --bk-total: #0e0e10;
  --teg: #93939b;
  --bk-teg: #232533;
  --bg-for-other-blocks: #0e0e10;
  --grafic-axis-text: #4a4d69;
  --chart-text: #f7f8fc;
  --chart-line: #232533;
  --chart-text-hover: #ff1812;
  --initiatives-maket-background: #f3efe7;
}

@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/style/portfolio/portfolio.scss';
@import '@/assets/scss/style/portfolio/test-mobile.scss';
@import '@/assets/scss/style/portfolio/total.scss';
@import '@/assets/scss/style/portfolio/pf-header.scss';

@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-clientlevelhome.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-object-example.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-review.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-twoimage.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-initiatives.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-initiatives-slider.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-map.scss';
@import '@/assets/scss/style/portfolio/pf-levelhome/pf-levelhome-map-card.scss';

.pf-levelhome-other-blocks {
  background-color: var(--bg-for-other-blocks);
  padding-top: 0;
  max-width: $maxDesktopWidth;
}
.pf-header__description{
  font-weight: $bold;
}
.total {
  margin-top: 0rem;
  padding: 6.1rem 0 0;

  @include mediaMax($tablet-max-width) {
    padding: 3.1rem 0 0;
  }
}
.pf-reviews__text{
  color: var(--main-text)
}
</style>
