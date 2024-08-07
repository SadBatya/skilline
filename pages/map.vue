<template>
  <div class="page-main _margin-section">
    <PatternSection />
    <div class="container">
      <div class="site-map">
        <div class="site-map__title-wrap">
          <h1 class="title">Карта сайта</h1>
        </div>
        <div class="site-map__content">
          <ul>
            <li>
              <NuxtLink
                :to="routePath.main"
              >
                Главная
              </NuxtLink>
            </li>
            <li v-for="nav in navMain" :key="nav.id">
              <NuxtLink :to="nav.path" >{{nav.title}}</NuxtLink>
              <ul v-if="nav.path === routePath.services.list && services && services.length">
                <li
                  v-for="service in services"
                  :key="service.id"
                >
                  <NuxtLink :to="getUrlService(service.code)" >{{service.title}}</NuxtLink>
                </li>
              </ul>
              <ul v-if="nav.path === routePath.works.list && works && works.length">
                <li  v-for="work in works"
                     :key="work.id">
                  <NuxtLink :to="getUrlWork(work.code)" >{{work.title}}</NuxtLink>
                </li>
              </ul>

            </li>
            <li v-for="nav in navAbout" :key="nav.id">
              <NuxtLink :to="nav.path" >{{nav.title}}</NuxtLink>
              <ul v-if="nav.path === routePath.blog.list && blogs && blogs.length">
                <li  v-for="blog in blogs"
                     :key="blog.code">
                  <NuxtLink :to="getUrlBlog(blog.code)" >{{blog.title}}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PatternSection from "~/components/sections/PatternSection";
import {ROUTS_PATH} from "~/constant/routs";
import {NAV_ABOUT, NAV_MAIN} from "~/constant/navigation";
import {API_URLS} from "~/constant/apiUrls";

export default {
  name: "siteMapPage",
  components: {PatternSection},
  async fetch() {
    await this.$store.dispatch('main/getMainData');
  },
  async asyncData({store, $axios}) {
    try{
      const result = {};
      const pageKey = 'map';
      await store.dispatch('seo/getSeo');
      const seoPage = store.state.seo.seo[pageKey] || {};
      const {worksList} = await store.dispatch('works/fetchWorks', {limit: 1000});
      const blogs = await $axios.get(API_URLS.blog.list, {params: {limit: 1000}}).then(res => {
        return res.data?.data?.blogs_list || [];
      })
      console.log({worksList, blogs});
      result.works= worksList.filter(el => {
        return !el.locked && !el.nda;
      }) || [];

      result.blogs = blogs;

      if (seoPage.code) {
        result.seo =  seoPage
      }
      return result;
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
          href: process.env.siteUrl + ROUTS_PATH.siteMap
        }
      ]
    }
  },
  data() {
    return {
      routePath: ROUTS_PATH,
      navMain: NAV_MAIN,
      navAbout: NAV_ABOUT
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
        "name": "Карта сайта",
      }]
    }
  },
  computed: {
    services() {
      return  this.$store.state.main.main.services || [];
    },

  },
  methods: {
    getUrlService(id) {
      return ROUTS_PATH.services.detail(id);
    },
    getUrlWork(id) {
      return ROUTS_PATH.works.detail(id);
    },
    getUrlBlog(id) {
      return ROUTS_PATH.blog.detail(id);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.site-map {
  &__title-wrap {
    margin-bottom: rem(60);
  }

  &__content {
    display: flex;
    flex-direction: column;

    ul {
      padding-left: rem(15);
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: rem(20);

      li {
        display: flex;
        flex-direction: column;
        font-size: rem(24);
        line-height: rem(29);
        color: $color-white;


        a {
          font: inherit;
          color: inherit;

          &:hover {
            color: $color-green;
          }
        }

        > ul {
          margin-top: rem(15);
          padding-left: rem(20);
        }
      }
    }
  }
}
</style>
