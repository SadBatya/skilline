<template>
  <div class="page-main _margin-section">
    <ServiceBannerMain :title="title" :description="description" :gallery="mainImage"/>
    <template v-for="section in sectionList">
      <TypeListSection v-if="section.blockTable === 'types_of_projects'" :key="section.id"  :title="section.title" :subTitle="section.subTitle" :elements="section.elements" />
      <TechnoStack v-if="section.blockTable === 'stack'" :key="section.id" :is-fetch="false" :title-props="section.subTitle" :technologies-props="section.elements" />
      <PaymentInfoSection v-if="section.blockTable === 'payment' && section.elements && section.elements.length" :key="section.id" :is-fetch="false" :titleProps="section.title" :paymentListProps="section.elements" :subTitle="section.subTitle" />
      <WorksSection v-if="section.blockTable === 'works'" :key="section.id" :title-props="section.title" :sub-titl-props="section.subTitle" :service-id="id" :is-button-show-all="false" />
      <ReviewsSection v-if="section.blockTable === 'reviews'" :key="section.id"  :title-props="section.title"  :reviews-props="section.elements" :is-fetch="false" />
      <AdvantagesSection v-if="section.blockTable === 'advantages'" :key="section.id" :title="section.title" :subTitle="section.subTitle" :elements="section.elements" />
      <AdditionalIndoSection v-if="section.blockTable === 'additional_info'" :key="section.id" :title="section.title" :subTitle="section.subTitle" :elements="section.elements" />
    </template>
  </div>

</template>

<script>

import {API_URLS} from "~/constant/apiUrls";
import {serviceDetailModel} from "~/models/services";
import ServiceBannerMain from "~/components/sections/ServiceBannerMain";
import TypeListSection from "~/components/sections/TypeListSection";
import TechnoStack from "~/components/sections/TechnoStack";
import PaymentInfoSection from "~/components/sections/PaymentInfoSection";
import WorksSection from "~/components/sections/WorksSection";
import ReviewsSection from "~/components/sections/ReviewsSection";
import AdvantagesSection from "~/components/sections/AdvantagesSection";
import AdditionalIndoSection from "~/components/sections/AdditionalIndoSection";
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "ServiceDetailPage",
  components: {
    AdditionalIndoSection,
    AdvantagesSection,
    ReviewsSection, WorksSection, PaymentInfoSection, TechnoStack, TypeListSection, ServiceBannerMain},
  async asyncData({$axios, error, params}) {
    const code = params.code || "";
    return await $axios.get(API_URLS.services.detail.code(code))
      .then(res => {
        return serviceDetailModel(res?.data?.data);
      })
      .catch(e => {
        error({statusCode: 404})
      });
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
          href: process.env.siteUrl + ROUTS_PATH.services.detail(this.code)
        }
      ]
    }

  },
  data() {
    return {

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
        "item": process.env.siteUrl + ROUTS_PATH.services.list
      },{
        "@type": "ListItem",
        "position": 3,
        "name": this.title,
      }]
    }
  },
}
</script>


