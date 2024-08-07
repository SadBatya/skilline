<template>
  <div class="page-main _margin-section">
    <MainContactsInfo />
    <MainBanners />
    <WorksSection />
    <AboutUsMainSection />
    <AboutCompanySection :count-metrics="3"/>
    <ServicesSection tag-title="h2" tagTitleItems="h3"/>
    <BlogSection />
    <ReviewsSection />
<!--    <BlogSection />-->
  </div>
</template>

<script>
import MainContactsInfo from "~/components/sections/MainContactsInfo";
import WorksSection from "~/components/sections/WorksSection";
import AboutCompanySection from "~/components/sections/AboutCompanySection";
import ServicesSection from "~/components/sections/ServicesSection";
import ReviewsSection from "~/components/sections/ReviewsSection";
import AboutUsMainSection from "~/components/sections/AboutUsMainSection";
import {ROUTS_PATH} from "~/constant/routs";
import BlogSection from "~/components/sections/BlogSection";
import MainBanners from "~/components/sections/MainBanners.vue";
// import BlogSection from "~/components/sections/BlogSection";
export default {
  name: 'IndexPage',
  layout: 'video-header',
  async asyncData({store}) {
    try{
      const pageKey = 'main';
      await store.dispatch('seo/getSeo');
      const seoPage = store.state.seo.seo[pageKey] || {};
      if (seoPage.code) {
        return {
          seo: seoPage
        };
      }
    } catch(e) {
      console.error(e);
      return {}
    }

  },
  head(){
    if (!this.seo) {
      return {}
    }

    return {
      title: this.seo.title,
      meta: [
        ...this.seo.metaTags
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.siteUrl + ROUTS_PATH.main
        }
      ]
    }

  },
  components: {
    BlogSection,
    AboutUsMainSection,
    ReviewsSection,
    ServicesSection,
    AboutCompanySection,
    WorksSection,
    MainContactsInfo,
    MainBanners
},
}
</script>
