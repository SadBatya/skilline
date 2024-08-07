<template>
  <div class="page-main">
    <PatternSection />
    <div class="blog-page">
      <div class="container">
        <h1 class="blog-page__title title">{{title}}</h1>
        <div class="blog-page__container">
          <div class="blog-page__cards">
            <template v-if="blogs && blogs.length">
              <BlogCard v-for="blog in blogs" :key="blog.id" :item="blog" />
            </template>
            <template v-if="$fetchState.pending">
              <BlogSkeleton v-for="i in defaultCountOnPage" :key="i"/>
            </template>
          </div>
          <PaginationBlock
            v-if="pageCount > 1"
            class-mod="blog-page__pagination"
            v-bind="paginationBind"
            @changePage="handlerChangePage"
            @showMore="handlerShowMore"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import {blogCardsModel} from "~/models/blog";
 import {API_URLS} from "~/constant/apiUrls";
 import methodsQuery from "~/mixins/methodsQuery";
 import PaginationBlock from "~/components/common/PaginationBlock";
 import {ROUTS_PATH} from "~/constant/routs";
 import PatternSection from "~/components/sections/PatternSection";
 import BlogSkeleton from "~/components/skeletons/BlogSkeleton";
 import BlogCard from "~/components/elements/BlogCard";
export default {
  name: 'blogPage',
  components: {BlogCard, BlogSkeleton, PatternSection, PaginationBlock},
  mixins: [methodsQuery],
  data() {
    return {
      title: 'Блог',
      blogs: [],
      defaultCountOnPage: 12,
      currentPage: 1,
      pageCount: 1,
      clickShowMore: false,
      timerFetchNewData: null,
      timeOnFetch: 300,
    }
  },
  async asyncData({store}) {
    try{
      const pageKey = 'blog';
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
          href: process.env.siteUrl + ROUTS_PATH.blog.list
        }
      ]
    }

  },
  async fetch() {
    const filterParams = this.getOptionsFilter();
    if (!this.clickShowMore) {
      this.blogs = [];
    }
    await this.$axios.get(API_URLS.blog.list, {params: filterParams})
      .then(res => {
        const result =  blogCardsModel(res.data?.data);
        const {pageCount, blogCards, curPage, title} = result;
        this.title = title;
        if (this.clickShowMore) {
          this.blogs = [...this.blogs, ...blogCards];
          this.clickShowMore = false;
        } else {
          this.blogs = blogCards;
        }

        this.currentPage = curPage;
        this.pageCount = pageCount;

      })
      .catch((e) => {
        this.clickShowMore = false;
        console.log(e);
      });
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
      },{
        "@type": "ListItem",
        "position": 2,
        "name": this.title || "Блог",
      }]
    },
      {
        "@context": "https://schema.org/",
        "@type": "Blog",
        "@id": this.$route.path,
        "mainEntityOfPage": process.env.siteUrl + ROUTS_PATH.blog.list,
        "name": this.title || "Блог",
        "publisher": {
          "@type": "Organization",
          "@id": process.env.siteUrl + ROUTS_PATH.blog.list,
          "name": "Skillline",
          "logo": this.logo
        },
        "blogPost": this.blogs.map((post) => {
          return {
            "@type": "BlogPosting",
            "@id": post.code || post.id,
            "mainEntityOfPage": this.urlDetail(post),
            "headline": post.title,
            "name": post.title,
            "author": {
              "@type": "Organization",
              "@id": process.env.siteUrl + ROUTS_PATH.blog.list,
              "name": "Skillline",
              "logo": this.logo,
              "url": process.env.siteUrl + '/'
            },
            "image": post.image || post.bgImage,
            "url": this.urlDetail(post),
          }
        })
      }
      ]
  },
  computed: {
    paginationBind() {
      return {
        curPage: this.currentPage,
        maxPage:  this.pageCount || 1,
        countOnPage: this.defaultCountOnPage
      }
    },
    logo() {
      return this.$store.state.main?.main.logo
    }
  },
  watch: {
    '$route.query'(value, oldValue) {
      const isFetch = value.p !== oldValue.p;
      if (isFetch) {
        clearTimeout(this.timerFetchNewData);
        this.timerFetchNewData = setTimeout(() => {
          this.$fetch();
        }, this.timeOnFetch);
      }
    }
  },
  methods: {
    getOptionsFilter() {
      const filterParams = {
        limit: this.defaultCountOnPage
      }

      const query = this.$route.query;

      if (query.p) {
        filterParams.page = query.p;
      } else {
        filterParams.page = 1;
      }

      return filterParams;
    },
    handlerChangePage(page) {
      if (!page) {
        return;
      }
      const numPage = Number(page);
      this.setNewQuery({
        p: numPage
      });
      this.currentPage = numPage;
    },
    handlerShowMore() {
      if (this.clickShowMore) {
        return;
      }
      const nextPage = this.currentPage + 1;
      this.clickShowMore = true;
      this.setNewQuery({
        p: nextPage
      });
      this.currentPage = nextPage;
    },
    urlDetail(item) {
      if (item.code) {
        return ROUTS_PATH.blog.detail(item.code);
      }

      return {path: ROUTS_PATH.blog.detailId(item.id), query: {isId: "Y"}};
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/blog-page.scss";
</style>
