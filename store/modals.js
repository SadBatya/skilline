export const state = () => ({
  showModalFeedback: false,
  showModalNda: false,
  workChoice: {},
  showModalContacts: false,
  showModalVacancy: false,
  showModalVacancyDetail: false,
  modalVacancyDetailCode: null,
  showModalVacancyDetailForm: false,
});

export const mutations = {
  setShowModalFeedback(state, value) {
    state.showModalFeedback = value || false;
  },
  setShowModalNda(state, value) {
    state.showModalNda = value || false;
  },
  setWorkChoice(state, value) {
    state.workChoice = value || {};
  },
  setShowModalContacts(state, value) {
    state.showModalContacts = value || false;
  },
  setShowModalVacancy(state, value) {
    state.showModalVacancy = value || false;
  },
  setShowModalVacancyDetail(state, value) {
    state.showModalVacancyDetail = value || false;
    if (value === false) {
      state.modalVacancyDetailCode = null;
    }
  },

  setModalVacancyDetailCode(state, value) {
     state.modalVacancyDetailCode = value;
     state.showModalVacancyDetail = true;
  },
  setShowModalVacancyDetailForm(state, value) {
     state.showModalVacancyDetailForm = value || false;
  },

};

export const actions = {}

export const getters =  {
  isShowEveryOneModal (state) {
    return  state.showModalFeedback || state.showModalNda || state.showModalContacts || state.showModalVacancy || state.showModalVacancyDetail;
  }
}
