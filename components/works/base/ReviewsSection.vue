<template>
  <section class="pf-reviews">
    <div class="container">
      <h2 class="pf-reviews__title title">Отзыв</h2>
      <div class="pf-reviews__wrap-pf-reviews">
        <span class="pf-reviews__top-quote">
            <svg xmlns="http://www.w3.org/2000/svg" width="77.833" height="59.184" viewBox="0 0 77.833 59.184">
              <path
                d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                transform="translate(2738.342 7874.184)" fill="inherit"/>
              <path
                d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z"
                transform="translate(2699.426 7874.184)" fill="inherit"/>
            </svg>
        </span>

        <div class="pf-reviews__main-pf-reviews">
          <div class="pf-reviews__wrap-text">
            <p class="pf-reviews__text"> {{ review.text }}
              <a v-if="review.reviewImage" :href="review.reviewImage" class="pf-reviews__link" target="_blank">
                <svg class="reviews__icon" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="154" height="30" viewBox="0 0 154 30">
                  <path d="M23.5,25.375v3.75H1V1H16l7.5,7.5v3.748" transform="translate(-0.063 -0.063)"
                        fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="2"/>
                  <path d="M17,1V8.5h7.5" transform="translate(-1.063 -0.063)" fill="none"
                        stroke="inherit" stroke-miterlimit="10" stroke-width="2"/>
                </svg>
                <span class="value">посмотреть письмо</span>
              </a>
            </p>
          </div>
          <div class="pf-reviews__wrap-signature _no-avatar">
<!--            <div class="pf-reviews__avatar">-->
<!--              <img v-if="review.userIcon" class="pf-reviews__avatar-img" :src="review.userIcon"-->
<!--                   alt="Аватар пользователя">-->
<!--            </div>-->
            <p v-if="review.name" class="pf-reviews__name">{{ review.name }}</p>
            <p v-if="review.company" class="pf-reviews__description">{{ review.company }}</p>
          </div>
        </div>
        <span class="pf-reviews__down-quote">
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
    </div>
  </section>
</template>

<script>

export default {
  name: "ReviewsPortfolio",
  props: {
    review: Object,
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/portfolio/pf-reviews.scss";
</style>
