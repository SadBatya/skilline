<template>
  <div v-if="showModal" class="popup _medium _feedback" v-custom-outside="closeModal">
    <button class="popup__btn-close btn-small" @click.prevent="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
        <g transform="translate(0.53 0.53)">
          <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)" fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
    <div class="popup__form popup__content">
      <FormVacancy :is-modal="true" @submitSuccess="closeModal" />
    </div>
  </div>
</template>

<script>
import FormVacancy from "~/components/forms/FormVacancy";
import bodyLock from "~/mixins/bodyLock";
export default {
  name: "ModalVacancyForm",
  components: {FormVacancy},
  mixins: [bodyLock],
  data() {
    return {
      title: "Форма связи"
    }
  },
  computed: {
    showModal() {
      return this.$store.state.modals.showModalVacancyDetailForm;
    }
  },
  watch: {
    showModal(val) {
      this.$store.commit('darkBody/setIsModalMFeedback', val);
      if (this.$store.state.modals.showModalVacancyDetail || this.$store.state.modalMessage.showModal) {
        this.toggleLockBody(true);
      } else {
        this.toggleLockBody(val);
      }
    }
  },
  methods: {
    closeModal() {
      if (!this.showModal) {
        return;
      }

      this.$store.commit('modals/setShowModalVacancyDetailForm', false);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/popup.scss";
</style>
