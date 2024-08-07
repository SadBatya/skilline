<template>
  <div class="page-main _margin-section">
    <PatternSection />
    <AboutUsMainSection />
    <AboutCompanySection />
    <OurClients />
    <TechnoStack />
  </div>
</template>

<script>
import AboutCompanySection from "~/components/sections/AboutCompanySection";
import AboutUsMainSection from "~/components/sections/AboutUsMainSection";
import OurClients from "~/components/sections/OurClients";
import TechnoStack from "~/components/sections/TechnoStack";
import PatternSection from "~/components/sections/PatternSection";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: "aboutPage",
  components: {
    PatternSection,
    TechnoStack,
    OurClients,
    AboutUsMainSection,
    AboutCompanySection
  },
  async asyncData({store}) {
    try{
      const pageKey = 'about';
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
          href: process.env.siteUrl + ROUTS_PATH.company
        }
      ]
    }

  },
  data() {
    return {}
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
        "name": this.seo.title || "О нас",
      }]
    }
  },
}
</script>

<style scoped>

</style>
