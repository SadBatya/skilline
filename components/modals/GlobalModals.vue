<template>
  <div class="modal-wrapper">
    <ModalContacts />
    <ModalVacancies  />
    <ModalVacanciesDetail />
    <ModalFeedback />
    <ModalMessage />
    <ModalVacancyForm />
  </div>
</template>

<script>
import ModalFeedback from "~/components/modals/ModalFeedback";
import ModalMessage from "~/components/modals/ModalMessage";
import ModalContacts from "~/components/modals/ModalContacts";
import ModalVacancies from "~/components/modals/ModalVacancies";
import ModalVacanciesDetail from "~/components/modals/ModalVacanciesDetail";
import ModalVacancyForm from "~/components/modals/ModalVacancyFrom";
export default {
  name: "GlobalModals",
  components: {ModalVacancyForm, ModalVacanciesDetail, ModalVacancies, ModalContacts, ModalMessage, ModalFeedback}
}
</script>

<style scoped>

</style>
