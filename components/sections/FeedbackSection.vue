<template>
  <div class="request-form">

    <div class="request-form__block-form">
      <h3 class="request-form__form-header">{{feedbackText.title || "Отправить запрос"}}</h3>
      <p v-if="feedbackText.description" class="request-form__description-form">{{feedbackText.description}}</p>
      <div class="request-form__bt-form">
        <!-- TODO +++ убрать href-->
        <button class="button-dark left-icon icon-arrow" @click.prevent.stop="openFeedbackModal">
          <svg class="button-dark__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.591 11.061">
            <path  d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
          </svg>

          <span class="button-dark__text">{{feedbackText.button || "Заполнить форму"}}</span>
        </button>
      </div>

    </div>
    <div v-if="address || phone || email" class="request-form__contacts our-contacts">
      <address v-if="address" class="our-contacts__address" v-html="address"></address>
      <div v-if="phone || email" class="our-contacts__footer">
        <a v-if="phone" class="our-contacts__phone" :href="`tel:${phone}`">{{ phone }}</a>
        <a v-if="email" class="our-contacts__mail" :href="`mailto:${email}`">{{email}}</a>
      </div>
    </div>
  </div>

</template>

<script>
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "FeedbackSection",
  mixins: [bodyLock],
  async fetch() {
    await this.$store.dispatch('main/getMainData');
  },
  computed: {
    address() {
      return this.$store.state.main.main?.address || '';
    },
    phone() {
      return this.$store.state.main.main?.phone || '';
    },
    email() {
      return this.$store.state.main.main?.email || '';
    },
    feedbackText() {
      return this.$store.state.main.main?.feedbackForm || {};
    }
  },
  methods: {
    openFeedbackModal() {
      this.$store.commit('modals/setShowModalFeedback', true);
      this.toggleLockBody(true);
      if (this.$yandexMetrika) {
        this.$yandexMetrika.reachGoal('click_form');
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/request-form.scss";
@import "@/assets/scss/style/components/our-contacts.scss";
</style>
