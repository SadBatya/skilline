<template>
  <div class="contacts">
    <ContactsSection />
  </div>
</template>

<script>
import ContactsSection from "~/components/sections/ContactsSection";
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "contactsPage",
  components: {ContactsSection},
  async asyncData({store}) {
    try {
      await store.dispatch('contacts/fetchContacts');
      const pageKey = 'contacts';
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
          href: process.env.siteUrl + ROUTS_PATH.contacts
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
        "name": "Контакты",
      }]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/contacts.scss";
</style>
