<template>
  <div class="popup__main">
    <div class="two-column">
      <p class="vacancy-details__subtitle">Вакансия</p>
      <div class="vacancy-details">
        <p class="popup__title another-title">{{detail.title}}</p>
        <div v-if="detail.salary" class="vacancy-details__wrap-price">
          <span class="vacancy-details__text">от</span>
          <p>{{detail.salary}}
            <span>₽</span>
          </p>
        </div>
        <div v-if="detail.description"  class="vacancy-details__text">
          <p>{{detail.description}}</p>
        </div>
        <button type="button" class="button-light popup-btn" @click.prevent.stop="openModal">
          <SvgIcon class="button-light__img" name="icon-hand-right" />
          <span class="button-light__text">Оставить запрос</span>
        </button>
      </div>
      <div v-if="detail.htmlBlock" class="conditions" v-html="detail.htmlBlock"></div>
    </div>
  </div>
</template>

<script>
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "VacancyDetailSection",
  mixins: [bodyLock],
  props: {
    detail: Object,
  },
  methods: {
    openModal() {
      this.$store.commit('modals/setShowModalVacancyDetailForm', true);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/popup-vacancy-details.scss";
@import "@/assets/scss/style/components/vacancies-detailed.scss";
</style>
