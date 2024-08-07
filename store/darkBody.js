export const state = () => ({
  isDark: false,
  isModalMessage: false,
  isModalFeedback: false,
});

export const mutations = {
  setIsDark(state, value) {
    state.isDark = value;
  },
  setIsModalMessage(state, value) {
    state.isModalMessage = value;
  },
  setIsModalMFeedback(state, value) {
    state.isModalFeedback = value;
  },
};
