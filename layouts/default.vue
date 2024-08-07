<template>
  <div class="page">
    <HeaderMain/>
    <Nuxt/>
    <FeedbackSection/>
    <FooterMain/>
    <div v-if="isDark" class="dark-body" :class="{_message: isModalMessage, _feedback: isModalFeedback}"></div>
    <GlobalModals/>
  </div>
</template>

<script>
import HeaderMain from "~/components/base/Header";
import FooterMain from "~/components/base/Footer";
import FeedbackSection from "~/components/sections/FeedbackSection";
import GlobalModals from "~/components/modals/GlobalModals";
import logoDefault from "~/static/img/white-logo.svg";


export default {
  name: "default",
  components: {
    GlobalModals,
    FeedbackSection,
    HeaderMain,
    FooterMain,
  },
  jsonld() {

    return [{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": this.siteUrl,
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": this.siteUrl,
        "logo": this.mainInfo?.logo || logoDefault,
        "image": this.mainInfo?.logo || logoDefault,
        "name": this.mainInfo?.name || "Skillline",
        ...(this.mainInfo.email && {"email": this.mainInfo.email}),
        ...(this.mainInfo.phone && {"telephone": this.mainInfo.phone}),
        ...(this.mainInfo.address && {
          "address": {
            "@type": "PostalAddress",
            "streetAddress": this.mainInfo.address
          }
        })
      }
    ]
  },
  async fetch() {
    await this.$store.dispatch('main/getMainData');
  },
  computed: {

    isDark() {
      return this.$store.state.darkBody.isDark
    },
    isModalMessage() {
      return this.$store.state.darkBody.isModalMessage;
    },
    isModalFeedback() {
      return this.$store.state.darkBody.isModalFeedback;
    },
    mainInfo() {
      return this.$store.state.main?.main || {};
    },
  }
}
</script>
