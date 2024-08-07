<template>
  <div v-if="showModal" class="popup popup-small _message" v-custom-outside="closeModal">
    <button class="popup__btn-close btn-small" @click.prevent.stop="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
        <g transform="translate(0.53 0.53)">
          <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)" fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
    <div class="popup__main">
      <p v-if="title" class="popup-small__title">{{title}}</p>
      <div class="popup__content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "ModalMessage",
  mixins: [bodyLock],
  computed: {
    showModal() {
      return this.$store.state.modalMessage.showModal;
    },
    title() {
      return this.$store.state.modalMessage.title;
    },
    content() {
      return this.$store.state.modalMessage.content;
    },
  },
  watch: {
    showModal(val) {
      this.$store.commit('darkBody/setIsModalMessage', val);
      if (val) {
        this.toggleLockBody(val);
      } else if (!this.$store.getters["modals/isShowEveryOneModal"]) {
        this.toggleLockBody(val);
      }
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('modalMessage/toggleModal', false);
      if (!this.$store.getters["modals/isShowEveryOneModal"]) {
        this.toggleLockBody(false);
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/popup.scss";
</style>
