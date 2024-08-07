<template>
  <div class="vacancies">
    <div class="container">

      <VacanciesSection />
    </div>
  </div>
</template>

<script>


import VacanciesSection from "~/components/sections/VacanciesSection";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: "vacanciesPage",
  async asyncData({store}) {
    try{
      const pageKey = 'vacancies';
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
          href: process.env.siteUrl + ROUTS_PATH.vacancy.list
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
        "name": "Вакансии",
      }]
    }
  },
  components: {VacanciesSection},
}
</script>


