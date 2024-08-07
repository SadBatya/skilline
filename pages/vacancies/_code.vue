<template>
  <div class="vacancies-detailed">
    <button class="vacancies-detailed__btn-back" @click.prevent.stop="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061" viewBox="0 0 6.591 11.061">
        <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none" stroke="inherit"
              stroke-miterlimit="10" stroke-width="1.5"/>
      </svg>

      <span>Все вакансии</span>
    </button>
    <VacancyDetailSection :detail="detail"/>
  </div>
</template>

<script>
import VacancyDetailSection from "~/components/sections/VacancyDetailSection";
import {API_URLS} from "~/constant/apiUrls";
import {vacancyModel} from "~/models/vacancy";
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "_code",
  components: {VacancyDetailSection},
  async asyncData({$axios, error, params}) {
    const id = params.code || "";
    return await $axios.get(API_URLS.vacancy.detail(id))
      .then(res => {
        return {detail: vacancyModel(res?.data?.data)};
      })
      .catch(e => {
        error({statusCode: 404})
      });
  },

  head() {
    if (!this.detail.seo) {
      return {}
    }

    return {
      title: this.detail.seo.title,
      meta: [
        ...this.detail.seo.metaTags
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.siteUrl + ROUTS_PATH.vacancy.detail(this.detail.code)
        }
      ]
    }

  },

  jsonld() {
    return [{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": process.env.siteUrl + '/'
      },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Вакансии",
          "item": process.env.siteUrl + ROUTS_PATH.vacancy.list
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": this.detail.title,
        }]
    },
      {
        "@context": "https://schema.googleapis.com/",
        "@type": "OccupationAggregationByEmployer ",
        "name": this.detail.title,
        "description": this.detail.description,
        "estimatedSalary": {
            "@type": "MonetaryAmountDistribution",
            "name": "base",
            "currency": "RUB",
            "duration": "P1M",
            "median": this.detail.salary,
        },
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Skillline"
        },
        "industry": "Technology",
        "jobBenefits": "6 weeks paid vacation every year",
        "occupationLocation": [
          {
            "@type": "City",
            "name": "Kaliningrad"
          }
        ]
      }
    ]
  },
  methods: {
    goBack() {
      this.$router.push({path: ROUTS_PATH.vacancy.list});
    },
  }
}
</script>
