<template>
  <div v-if="showModal" class="popup" v-custom-outside="closeModal">
    <button class="popup__btn-close btn-small" @click.prevent.stop="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
        <g transform="translate(0.53 0.53)">
          <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)" fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>
    <ContactsSection />
  </div>
</template>

<script>
import ContactsSection from "~/components/sections/ContactsSection";
import bodyLock from "~/mixins/bodyLock";
export default {
  name: "ModalContacts",
  components: {ContactsSection},
  mixins: [bodyLock],
  computed: {
    showModal() {
      return this.$store.state.modals.showModalContacts;
    }
  },
  watch: {
    showModal(val) {
      this.toggleLockBody(val);
    },
    '$route.path'(val) {
        this.$store.commit('modals/setShowModalContacts', false);
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('modals/setShowModalContacts', false);
      window.history.pushState({}, null, this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>
