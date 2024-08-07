import {ROUTS_PATH} from "~/constant/routs";

export default {
  async asyncData({store, route}) {
    try {
      const nameReplace = 'works-';
      const code = route.name.replace(new RegExp('.*' + nameReplace ), '');
      return await store.dispatch('works/fetchWorkDetail', code);
    } catch (e) {
      console.error(e);
      return {
        review: null,
        id: null,
        total: null
      }
    }
  },
  head() {
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
          href: process.env.siteUrl + ROUTS_PATH.works.detail(this.code)
        }
      ]
    }
  },
  jsonld() {
    let reviewsSchema = {};

    if (this.review && this.review.text) {
      reviewsSchema = {
        "@context": "https://schema.org/",
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": this.review.name,
          "jobTitle": this.review.company,
        },
        "itemReviewed": {
          "@type": "Organization",
          "name": "Skillline"
        },
        "reviewBody": this.review.text,
      }
    }
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
        "name": "Работы",
        "item": process.env.siteUrl + ROUTS_PATH.works.list
      },
        {
        "@type": "ListItem",
        "position": 3,
        "name": this.title,
      }]
    },
      reviewsSchema
    ]
  },
  computed: {
    bindTotalBlock() {

      if (!this.total || !Object.keys(this.total).length) {
        return null;
      }

      const {
        totalNumbers: totalNumbersData,
        otherNumbers: otherNumbersData ,
        graphic: charts
      } = this.total;

      const startProject = this.projectStart || '';
      const endProject = this.projectEnd || '';
      const totalNumbers = totalNumbersData || [];
      const otherNumbers = otherNumbersData || [];
      const graphic = charts || [];
      const description =  this.totalDescription || '';

      if (!totalNumbers.length && !otherNumbers.length && !graphic.length) {
        return null;
      }

      return {
        startProject,
        endProject,
        totalNumbers,
        otherNumbers,
        graphic,
        description
      }
    }
  }
}
