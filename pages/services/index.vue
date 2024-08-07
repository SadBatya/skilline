<template>
  <div class="page-main _margin-section">
    <PatternSection />
    <ServicesSection :is-button-show-all="false" tag-title="h1" tagTitleItems="h2"/>
    <PaymentInfoSection />
    <ReviewsSection />
  </div>
</template>

<script>
import ReviewsSection from "~/components/sections/ReviewsSection";
import ServicesSection from "~/components/sections/ServicesSection";
import PaymentInfoSection from "~/components/sections/PaymentInfoSection";
import PatternSection from "~/components/sections/PatternSection";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: 'servicesPage',
  async asyncData({store}) {
    try{
      const pageKey = 'services';
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
          href: process.env.siteUrl + ROUTS_PATH.services.list
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
        "name": "Услуги",
      }]
    }
  },
  components: {PatternSection, PaymentInfoSection, ServicesSection, ReviewsSection},
}
</script>
