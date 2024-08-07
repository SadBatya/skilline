// let timeOut = null;
export const state = () => ({
  showModal: false,
  title: '',
  content: '',
});

export const mutations = {
  setShowModal(state, value) {
    state.showModal = value;
  },
  setTitle( state, value) {
    state.title = value;
  },
  setContent(state, value) {
    state.content = value;
  },
};

export const actions = {
  toggleModal({state, commit, dispatch }, value) {
      if (value !== undefined) {
        commit('setShowModal', value);
      } else {
        commit('setShowModal', !state.showModal);
      }

      if (!state.showModal) {
        dispatch('clearModal');
      }
  },
  setModalContent({commit, dispatch}, {title = '', content = ''}) {
    commit('setTitle', title);
    commit('setContent', content);
    dispatch('toggleModal', true);
  },
  clearModal( {commit} ) {
    commit('setTitle', '');
    commit('setContent', '');
  }
}
