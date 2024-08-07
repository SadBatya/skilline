<template>
  <div v-if="showModal" class="popup _max-height" v-custom-outside="closeModal">
    <button class="popup__btn-close btn-small" @click.prevent.stop="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
        <g transform="translate(0.53 0.53)">
          <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)" fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
    <VacancyDetailSection :detail="detail"/>
  </div>
</template>
<script>
import bodyLock from "~/mixins/bodyLock";
import VacancyDetailSection from "~/components/sections/VacancyDetailSection";
import {API_URLS} from "~/constant/apiUrls";
import {vacancyModel} from "~/models/vacancy";
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "ModalVacanciesDetail",

  components: {VacancyDetailSection},
  mixins: [bodyLock],
  computed: {
    showModal() {
      return this.$store.state.modals.showModalVacancyDetail;
    }
  },
  fetchOnServer: false,
  data() {
    return {
      detail: {},
      fetchTimer: null
    }
  },
  watch: {
    showModal(val) {
      if (val) {
        this.toggleLockBody(val);
        clearTimeout(this.fetchTimer);
        this.fetchTimer = setTimeout(async () => {
          await this.fetchDetail();
        }, 50);
      } else if (!this.$store.state.modals.showModalVacancy) {
        this.toggleLockBody(val);
      }
    },
    '$route.path'(val) {
      this.$store.commit('modals/setShowModalVacancyDetail', false);
    }
  },
  methods: {
    async fetchDetail() {
      const id =  this.$store.state.modals.modalVacancyDetailCode || null;
        await this.$axios.get(API_URLS.vacancy.detail(id))
          .then(res => {
            this.detail = vacancyModel(res?.data?.data);
          })
          .catch(e => {
            this.$store.commit('modals/setShowModalVacancyDetail', false);
            setTimeout(() => {
              this.toggleLockBody(true);
              this.$store.dispatch('modalMessage/setModalContent', {
                content: '<p>Что то пошло не так...</p>',
              });
            }, 200);
          });
    },
    closeModal() {
      if (this.$store.state.modals.showModalVacancyDetailForm) {
        return;
      }

      this.$store.commit('modals/setShowModalVacancyDetail', false);
      if (this.$store.state.modals.showModalVacancy) {
        window.history.pushState({}, null, ROUTS_PATH.vacancy.list)
        return;
      }
      window.history.pushState({}, null, this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>
