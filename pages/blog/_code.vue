<template>
  <div class="blog-detailed">
    <div class="blog-detailed__header">
      <div v-if="bgImage" class="blog-detailed__header-content">
        <img :src="bgImage" :alt="title"/>
      </div>
    </div>


    <div class="blog-detailed__wrap">
      <div class="blog-detailed__wrap-box">
        <NuxtLink :to="backLink" class="blog-detailed__btn-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061" viewBox="0 0 6.591 11.061">
            <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none" stroke="inherit"
                  stroke-miterlimit="10" stroke-width="1.5"></path>
          </svg>
          <span>Назад</span>
        </NuxtLink>
        <div class="blog-detailed__box">
          <h1>{{ title }}</h1>
        </div>
        <div class="blog-detailed__content">
          <EditorHTML :content="content" />
        </div>
      </div>
<!--      <div class="blog-detailed__next">-->
        <!--        <div class="blog-detailed__block-news">-->
        <!--          <p class="blog-detailed__subtitle">Ещё по теме</p>-->
        <!--          <a href="" class="blog-detailed__next-news">-->
        <!--            <div class="blog-detailed__inner-img">-->
        <!--              <img src="./img/blog/img2.png" alt="">-->
        <!--            </div>-->
        <!--            <div class="blog-detailed__wrap-text">-->
        <!--              <p class="blog-detailed__description">Как получить количественные данные из качественной CJM</p>-->
        <!--              <button class="blog-detailed__btn-more">-->
        <!--                <span class="blog-detailed__btn-text">Подробнее</span>-->
        <!--                <div class="blog-detailed__wrap-btn">-->
        <!--                  <span class="blog-detailed__line-arrow"></span>-->
        <!--                  <svg xmlns="http://www.w3.org/2000/svg" width="8.062" height="4.601" viewBox="0 0 8.062 4.601">-->
        <!--                    <g transform="translate(0.479 0.577)">-->
        <!--                      <path d="M0,0,3.652,3.037,7.085,0" fill="none" stroke="inherit" stroke-width="1.5"></path>-->
        <!--                    </g>-->
        <!--                  </svg>-->
        <!--                </div>-->
        <!--              </button>-->
        <!--            </div>-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        <div class="blog-detailed__block-links">-->
        <!--          <p class="blog-detailed__subtitle">Поделиться</p>-->
        <!--          <ul class="pre-footer__wrapper-networks">-->
        <!--            <li class="pre-footer__social-networks">-->
        <!--              <a href="#" class="pre-footer__btn-net">-->
        <!--                <svg class="pre-footer__btn-whatsapp" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">-->
        <!--                  <defs>-->
        <!--                    <clipPath id="clip-path">-->
        <!--                      <rect width="32" height="32" fill="inherit" stroke="inherit" stroke-width="1"></rect>-->
        <!--                    </clipPath>-->
        <!--                  </defs>-->
        <!--                  <g clip-path="url(#clip-path)">-->
        <!--                    <path d="M27.435,4.65A15.935,15.935,0,0,0,.25,15.85,16.382,16.382,0,0,0,2.357,23.8L.1,32l8.476-2.2A16,16,0,0,0,16.2,31.75h0A15.864,15.864,0,0,0,27.435,4.65ZM16.15,29.05h0A13.51,13.51,0,0,1,9.379,27.2l-.5-.3L3.862,28.2l1.354-4.85-.3-.5a13.345,13.345,0,0,1-2.006-7A13.216,13.216,0,1,1,16.15,29.05Zm7.273-9.85c-.4-.2-2.357-1.15-2.759-1.25-.351-.15-.652-.2-.9.2s-1.053,1.25-1.254,1.55a.613.613,0,0,1-.853.1,10.572,10.572,0,0,1-3.21-2,11.711,11.711,0,0,1-2.207-2.75c-.251-.4-.05-.6.2-.8a8.713,8.713,0,0,0,.6-.7,4.563,4.563,0,0,0,.4-.65.694.694,0,0,0-.05-.7c-.1-.2-.9-2.15-1.254-2.95-.3-.8-.652-.65-.9-.65h-.752a1.446,1.446,0,0,0-1.053.5,4.476,4.476,0,0,0-1.4,3.3A7.389,7.389,0,0,0,9.68,16.5c.2.25,2.809,4.3,6.771,6,.953.4,1.705.65,2.257.85a5.511,5.511,0,0,0,2.508.15,4,4,0,0,0,2.708-1.9,4.488,4.488,0,0,0,.251-1.9C24.075,19.45,23.824,19.35,23.423,19.2Z" transform="translate(-0.1)" fill="inherit"></path>-->
        <!--                  </g>-->
        <!--                </svg>-->
        <!--                <span>WhatsApp</span>-->
        <!--              </a>-->
        <!--            </li>-->
        <!--            <li class="pre-footer__social-networks">-->
        <!--              <a href="" class="pre-footer__btn-net ">-->
        <!--                <svg class="pre-footer__btn-telegram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">-->
        <!--                  <defs>-->
        <!--                    <clipPath>-->
        <!--                      <rect width="32" height="32" fill="inherit" stroke="#707070" stroke-width="1"></rect>-->
        <!--                    </clipPath>-->
        <!--                  </defs>-->
        <!--                  <g clip-path="url(#clip-path)">-->
        <!--                    <path d="M16,2.6A13.4,13.4,0,0,0,6.525,25.475a13.4,13.4,0,0,0,18.95-18.95A13.312,13.312,0,0,0,16,2.6M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0Z" fill="inherit"></path>-->
        <!--                    <path d="M46.56,78.408q6.994-3.037,9.326-4.023c4.436-1.852,5.369-2.172,5.968-2.185a1.069,1.069,0,0,1,.626.187.705.705,0,0,1,.226.44,2.3,2.3,0,0,1,.027.626c-.24,2.531-1.279,8.673-1.812,11.5-.226,1.2-.666,1.6-1.092,1.639-.933.08-1.639-.613-2.531-1.2-1.412-.919-2.2-1.492-3.57-2.4-1.585-1.039-.56-1.612.346-2.545.24-.24,4.33-3.97,4.41-4.3a.317.317,0,0,0-.08-.28.367.367,0,0,0-.333-.027c-.147.027-2.385,1.519-6.741,4.463a3,3,0,0,1-1.732.639,11.531,11.531,0,0,1-2.491-.586c-1-.32-1.8-.493-1.732-1.052C45.415,79.008,45.814,78.715,46.56,78.408Z" transform="translate(-39.326 -62.582)" fill="inherit" fill-rule="evenodd"></path>-->
        <!--                  </g>-->
        <!--                </svg>-->
        <!--                <span>Telegram</span>-->
        <!--              </a>-->
        <!--            </li>-->
        <!--            <li class="pre-footer__social-networks">-->
        <!--              <a href="" class="pre-footer__btn-net">-->
        <!--                <svg class="pre-footer__btn-vkontakte" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">-->
        <!--                  <defs>-->
        <!--                    <clipPath id="clip-path">-->
        <!--                      <rect width="32" height="32" fill="#fff" stroke="#707070" stroke-width="1"></rect>-->
        <!--                    </clipPath>-->
        <!--                  </defs>-->
        <!--                  <g clip-path="url(#clip-path)">-->
        <!--                    <path d="M16,2.6A13.4,13.4,0,0,0,6.525,25.475a13.4,13.4,0,0,0,18.95-18.95A13.312,13.312,0,0,0,16,2.6M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0Z" fill="inherit"></path>-->
        <!--                    <path d="M18.575,26.6C12,26.6,8.256,22.1,8.1,14.6h3.291c.108,5.5,2.534,7.832,4.456,8.312V14.6h3.1v4.745c1.9-.2,3.892-2.366,4.564-4.745h3.1a9.155,9.155,0,0,1-4.216,5.982A9.483,9.483,0,0,1,27.331,26.6H23.92a5.93,5.93,0,0,0-4.973-4.288V26.6Z" transform="translate(-1.773 -4.26)" fill="inherit"></path>-->
        <!--                  </g>-->
        <!--                </svg>-->

        <!--                <span>Vkontakte</span>-->
        <!--              </a>-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </div>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script>

import {API_URLS} from "~/constant/apiUrls";
import {blogDetail} from "~/models/blog";
import {ROUTS_PATH} from "~/constant/routs";
import EditorHTML from "~/components/base/Editor";

export default {
  name: "detailBlog",
  components: {EditorHTML},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },
  async asyncData({$axios, error, params, query}) {
    const code = params.code || "";
    let url = API_URLS.blog.detail(code);
    if (query.isId === 'Y') {
      url = API_URLS.blog.detailId(code);
    }

    return await $axios.get(url)
      .then(res => {
        console.log(res);
        return blogDetail(res?.data?.data);
      })
      .catch(e => {
        error({statusCode: 404})
      });
  },
  data() {
    return {
      prevRoute: null,
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
          href: process.env.siteUrl + ROUTS_PATH.blog.detail(this.code)
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
          "name": "Блог",
          "item": process.env.siteUrl + ROUTS_PATH.blog.list
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": this.title,
        }]
    },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": this.code || this.id,
        "mainEntityOfPage": this.$route.path,
        "headline": this.title,
        "name": this.title,
        "description": this.description,
        "url": this.$route.path,
        "image": this.bgImage || this.image,
        "author": {
          "@type": "Organization",
          "@id": process.env.siteUrl + ROUTS_PATH.blog.list,
          "name": "Skillline",
          "logo": this.logo,
          "url": process.env.siteUrl + '/'
        },
      }
    ]
  },
  computed: {
    backLink() {
      if (this.prevRoute) {
        return {
          path: this.prevRoute.path,
          query: this.prevRoute.query
        }
      }
      return ROUTS_PATH.blog.list;
    },
    logo() {
      return this.$store.state.main?.main.logo
    }
  },
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/blog-detailed.scss";
@import "@/assets/scss/style/components/content-page.scss";
@import "@/assets/scss/style/components/reviews.scss";
</style>
