<template>
  <div v-if="(blogs && blogs.length) || $fetch.pending" class="blog">
    <div class="container">
      <div class="blog__wrap">
        <component :is="tagTitle" class="blog__title title">Блог</component>
      </div>
    </div>
    <div class="blog__inner-cards">
      <div class="swiper blog__swiper" v-swiper:sliderBlog="swiperOptions">
        <div class="swiper-wrapper">
          <template v-if="blogs && blogs.length">
            <BlogCard
              v-for="blog in blogs"
              :key="blog.id"
              :item="blog"
              class-mod="swiper-slide"
            />
          </template>
          <template v-if="$fetchState.pending">
            <BlogSkeleton
              v-for="i in defaultCountOnPage"
              :key="i"
              class-mod="swiper-slide"
            />
          </template>
        </div>
        <div class="blog__navigation">
          <button
            ref="btnNext"
            class="blog__btn-slider slider-next"
            aria-label="следующий отзыв"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    width="50"
                    height="50"
                    transform="translate(7 7)"
                    fill="none"
                    stroke="#f7f8fc"
                    stroke-width="1"
                  />
                </clipPath>
              </defs>
              <g transform="translate(-7 -7)">
                <g clip-path="url(#clip-path)">
                  <g
                    transform="translate(7 7)"
                    fill="none"
                    stroke="#f7f8fc"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  >
                    <circle cx="25" cy="25" r="25" stroke="none" />
                    <circle cx="25" cy="25" r="24.25" fill="none" />
                  </g>
                  <g transform="translate(10.975 27.76)">
                    <line
                      x2="1.854"
                      transform="translate(25.665 4.238)"
                      fill="none"
                      stroke="#f7f8fc"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      opacity="0"
                    />
                    <path
                      d="M20,30.331l10-10-10-10"
                      transform="translate(-2.482 -16.092)"
                      fill="none"
                      stroke="#f7f8fc"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button
            ref="btnPrev"
            class="blog__btn-slider slider-prev"
            aria-label="предыдущий отзыв"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <defs>
                <clipPath>
                  <rect
                    width="50"
                    height="50"
                    transform="translate(7 7)"
                    fill="none"
                    stroke="#f7f8fc"
                    stroke-width="1"
                  />
                </clipPath>
              </defs>
              <g transform="translate(50 50) rotate(180)">
                <g transform="translate(-7 -7)">
                  <g clip-path="url(#clip-path)">
                    <g
                      transform="translate(7 7)"
                      fill="none"
                      stroke="#f7f8fc"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    >
                      <circle cx="25" cy="25" r="25" stroke="none" />
                      <circle cx="25" cy="25" r="24.25" fill="none" />
                    </g>
                    <g transform="translate(10.975 27.76)">
                      <line
                        x2="1.854"
                        transform="translate(25.665 4.238)"
                        fill="none"
                        stroke="#f7f8fc"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                        opacity="0"
                      />
                      <path
                        d="M20,30.331l10-10-10-10"
                        transform="translate(-2.482 -16.092)"
                        fill="none"
                        stroke="#f7f8fc"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ROUTS_PATH } from '~/constant/routs'
import { API_URLS } from '~/constant/apiUrls'
import { blogCardsModel } from '~/models/blog'
import BlogCard from '~/components/elements/BlogCard'
import BlogSkeleton from '~/components/skeletons/BlogSkeleton'

export default {
  name: 'BlogSection',
  components: {
    BlogSkeleton,
    BlogCard,
  },
  props: {
    tagTitle: {
      type: String,
      default: 'h2',
    },
  },
  async fetch() {
    await this.$axios
      .get(API_URLS.blog.list, {
        params: {
          limit: 12,
          page: 1,
        },
      })
      .then((res) => {
        const { blogCards, title } = blogCardsModel(res.data?.data)
        this.blogs = [...blogCards] || []
        if (title) {
          this.title = title
        }
      })
      .catch((e) => {
        return e
      })
  },
  jsonld() {
    return [
      ...this.blogs.map((post) => {
        return {
          '@type': 'BlogPosting',
          '@id': post.code || post.id,
          mainEntityOfPage: this.urlDetail(post),
          headline: post.title,
          name: post.title,
          author: {
            '@type': 'Organization',
            '@id': process.env.siteUrl + ROUTS_PATH.blog.list,
            name: 'Skillline',
            logo: this.logo,
            url: process.env.siteUrl + '/',
          },
          image: post.image || post.bgImage,
          url: this.urlDetail(post),
        }
      }),
    ]
  },
  data() {
    return {
      urlBlog: ROUTS_PATH.blog.list,
      blogs: [],
      title: 'Блог',
      defaultCountOnPage: 12,
      swiperOptions: {
        navigation: {
          nextEl: '.blog__btn-slider.slider-next',
          prevEl: '.blog__btn-slider.slider-prev',
        },

        breakpoints: {
          1: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          // when window width is >= 480px
          769: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1200
          1200: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        },
      },
    }
  },
  methods: {
    urlDetail(item) {
      if (item.code) {
        return ROUTS_PATH.blog.detail(item.code)
      }

      return { path: ROUTS_PATH.blog.detailId(item.id), query: { isId: 'Y' } }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/style/components/blog.scss';
@import '@/assets/scss/style/components/blog-page.scss';
</style>
