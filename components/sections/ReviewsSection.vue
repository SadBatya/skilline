<template>
    <section v-if="reviews && reviews.length" class="reviews">
      <div class="container">
        <h2 class="reviews__title title">{{ title }}</h2>
        <client-only>
          <div class="reviews__wrap-reviews">
          <div class="reviews__top-quote">
            <svg xmlns="http://www.w3.org/2000/svg" width="77.833" height="59.184" viewBox="0 0 77.833 59.184">
              <path
                d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                transform="translate(2738.342 7874.184)" fill="inherit"/>
              <path
                d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                transform="translate(2699.426 7874.184)" fill="inherit"/>
            </svg>
          </div>
          <swiper class="reviews__swiper" :options="swiperOptions" ref="swiperReviews">
            <swiper-slide v-for="review in reviews" :key="review.id">
              <ReviewElement  :review="review" />
            </swiper-slide>
          </swiper>
          <div class="reviews__box-btn">

            <button ref="btnNext" class="reviews__btn-slider slider-next" aria-label="следующий отзыв">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50"
                   height="50" viewBox="0 0 50 50">
                <defs>
                  <clipPath id="clip-path">
                    <rect width="50" height="50" transform="translate(7 7)" fill="none" stroke="#f7f8fc"
                          stroke-width="1"/>
                  </clipPath>
                </defs>
                <g transform="translate(-7 -7)">
                  <g clip-path="url(#clip-path)">
                    <g transform="translate(7 7)" fill="none" stroke="#f7f8fc" stroke-miterlimit="10"
                       stroke-width="1.5">
                      <circle cx="25" cy="25" r="25" stroke="none"/>
                      <circle cx="25" cy="25" r="24.25" fill="none"/>
                    </g>
                    <g transform="translate(10.975 27.76)">
                      <line x2="1.854" transform="translate(25.665 4.238)" fill="none" stroke="#f7f8fc"
                            stroke-miterlimit="10" stroke-width="1.5" opacity="0"/>
                      <path d="M20,30.331l10-10-10-10" transform="translate(-2.482 -16.092)" fill="none"
                            stroke="#f7f8fc" stroke-miterlimit="10" stroke-width="1.5"/>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button ref="btnPrev" class="reviews__btn-slider slider-prev" aria-label="предыдущий отзыв">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50"
                   height="50" viewBox="0 0 50 50">
                <defs>
                  <clipPath>
                    <rect width="50" height="50" transform="translate(7 7)" fill="none" stroke="#f7f8fc"
                          stroke-width="1"/>
                  </clipPath>
                </defs>
                <g transform="translate(50 50) rotate(180)">
                  <g transform="translate(-7 -7)">
                    <g clip-path="url(#clip-path)">
                      <g transform="translate(7 7)" fill="none" stroke="#f7f8fc" stroke-miterlimit="10"
                         stroke-width="1.5">
                        <circle cx="25" cy="25" r="25" stroke="none"/>
                        <circle cx="25" cy="25" r="24.25" fill="none"/>
                      </g>
                      <g transform="translate(10.975 27.76)">
                        <line x2="1.854" transform="translate(25.665 4.238)" fill="none"
                              stroke="#f7f8fc" stroke-miterlimit="10" stroke-width="1.5" opacity="0"/>
                        <path d="M20,30.331l10-10-10-10" transform="translate(-2.482 -16.092)"
                              fill="none" stroke="#f7f8fc" stroke-miterlimit="10" stroke-width="1.5"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div class="reviews__mob-pagination">
            <div class="reviews__pagination-list">
              <li>
                <button class="reviews__btn-pagination _btn-active"></button>
              </li>
              <li>
                <button class="reviews__btn-pagination"></button>
              </li>
              <li>
                <button class="reviews__btn-pagination"></button>
              </li>
            </div>
          </div>
          <span class="reviews__down-quote">
                <svg xmlns="http://www.w3.org/2000/svg" width="77.833" height="59.184" viewBox="0 0 77.833 59.184">
                    <path
                      d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                      transform="translate(2738.342 7874.184)" fill="inherit"/>
                    <path
                      d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                      transform="translate(2699.426 7874.184)" fill="inherit"/>
                  </svg>

            </span>
        </div>
        </client-only>
      </div>
    </section>
</template>

<script>
import {API_URLS} from "~/constant/apiUrls";
import {reviewsModel, reviewModel} from "~/models/reviews";
import ReviewElement from "~/components/elements/ReviewElement";

export default {
  name: "ReviewsSection",
  components: {ReviewElement},
  props: {
    titleProps: String,
    reviewsProps: Array,
    isFetch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      title: "Отзывы",
      reviews: [],
      reviewsLimit: 24,
      swiperOptions: {
        navigation: {
          nextEl: '.reviews__btn-slider.slider-next',
          prevEl: '.reviews__btn-slider.slider-prev'
        },
        pagination: {
          el: '.reviews__mob-pagination .reviews__pagination-list',
          type: 'bullets',
          clickable: true
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        // simulateTouch: false,
        speed: 500,
      }
    }
  },
  async fetch() {
    if (!this.isFetch) {
      return;
    }
    await this.$axios.get(API_URLS.reviews.list, {
      params: {
        limit: this.reviewsLimit
      }
    })
      .then(response => {
        const data = response?.data?.data;
        this.reviews = reviewsModel(data);
      })
      .catch(error => {
        console.log(error);
        this.reviews = [];
      });
  },
  jsonld() {
    return [...this.reviews.map(review => {
      return {
        "@context": "https://schema.org/",
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.name,
          "jobTitle": review.company,
        },
        "itemReviewed": {
          "@type": "Organization",
          "name": "Skillline"
        },
        "name": "Отзыв",
        "reviewBody": review.text,
      }
    })];
  },
  mounted() {
    if (this.titleProps) {
      this.title = this.titleProps;
    }

    if (this.reviewsProps && this.reviewsProps.length) {
      this.reviews = this.reviewsProps.map(reviewModel);
    }
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/reviews.scss";
</style>
