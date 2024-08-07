<template>
  <div v-if="showModal" class="popup _max-height" v-custom-outside="closeModal">
    <button class="popup__btn-close btn-small" @click.prevent.stop="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
        <g transform="translate(0.53 0.53)">
          <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)" fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
    <div class="popup__content">

      <VacanciesSection :is-query="false" mod-key="ml"/>
    </div>
  </div>
</template>

<script>
import bodyLock from "~/mixins/bodyLock";
import VacanciesSection from "~/components/sections/VacanciesSection";
export default {
  name: "ModalVacancies",
  components: {VacanciesSection},
  mixins: [bodyLock],
  computed: {
    showModal() {
      return this.$store.state.modals.showModalVacancy;
    }
  },
  watch: {
    showModal(val) {
      if (this.$store.state.modals.showModalVacancyDetail) {
        return;
      }
      this.toggleLockBody(val);
    },
    '$route.path'() {
      this.$store.commit('modals/setShowModalVacancy', false);
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('modals/setShowModalVacancy', false);
      window.history.pushState({}, null, this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>
