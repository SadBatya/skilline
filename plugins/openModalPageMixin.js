import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__page_modal_mixin__) {
  Vue.__page_modal_mixin__ = true
  Vue.mixin({
    beforeRouteLeave(to, from, next) {
      const modalsState = this.$store.state.modals;

      if (to.name === "contacts" && !modalsState.showModalContacts) {
        window.history.pushState({}, null, to.path);
        this.$store.commit('modals/setShowModalContacts', true);
        return;
      }
      if (to.name === 'vacancies' && !modalsState.showModalVacancy && !(from.name === 'vacancies-code' && !modalsState.showModalVacancyDetail)) {
        window.history.pushState({}, null, to.path);
        this.$store.commit('modals/setShowModalVacancy', true);
        return;
      }

      if (to.name === 'vacancies-code' && !modalsState.showModalVacancyDetail) {
        window.history.pushState({}, null, to.path);
        this.$store.commit('modals/setModalVacancyDetailCode', to.params.code);
        return;
      }

      next();

    },
  }) // Set up your mixin then
}
