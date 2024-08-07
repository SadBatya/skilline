<template>
  <div class="page-main _margin-section">
    <PatternSection />
    <WorksSection :is-button-show-all="false" is-query/>
    <ReviewsSection />
  </div>
</template>

<script>
import WorksSection from "~/components/sections/WorksSection";
import ReviewsSection from "~/components/sections/ReviewsSection";
import PatternSection from "~/components/sections/PatternSection";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: 'worksPage',
  components: {PatternSection, ReviewsSection, WorksSection},
  async asyncData({store}) {
    try{
      const pageKey = 'works';
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
          href: process.env.siteUrl + ROUTS_PATH.works.list
        }
      ]
    }
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": process.env.siteUrl + '/'
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Работы",
      }]
    }
  },
}
</script>
