<template>
  <div class="reviews__main-reviews" :class="classMod" >
    <div class="reviews__wrap-text">
      <p class="reviews__text"> {{ review.text }}
        <a v-if="review.reviewImage" :href="review.reviewImage" class="reviews__link" target="_blank">
          <svg class="reviews__icon" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" width="154" height="30" viewBox="0 0 154 30">
            <path d="M23.5,25.375v3.75H1V1H16l7.5,7.5v3.748" transform="translate(-0.063 -0.063)"
                  fill="none" stroke="#33d35e" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M17,1V8.5h7.5" transform="translate(-1.063 -0.063)" fill="none"
                  stroke="#33d35e" stroke-miterlimit="10" stroke-width="2"/>
          </svg>
          <span class="value">посмотреть письмо</span>
        </a>
      </p>
    </div>
    <div class="reviews__wrap-signature _no-avatar">
<!--      <div class="reviews__avatar">-->
<!--        <img v-if="review.userIcon" class="reviews__avatar-img" :src="review.userIcon" alt="Аватар пользователя">-->
<!--        <img v-else src="@/static/img/ava.svg" class="reviews__avatar-img" alt="Аватар пользователя"/>-->
<!--      </div>-->
      <p v-if="review.name" class="reviews__name">{{review.name}}</p>
      <p v-if="review.company" class="reviews__description">{{ review.company}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewElement",
  props: {
    review: {
      type: Object,
      default: () => ({})
    },
    classMod: {
      type: [String, Object],
      default: '',
    },
  }
}
</script>
