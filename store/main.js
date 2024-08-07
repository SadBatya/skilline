import {differenceInMilliseconds} from "date-fns";
import {mainDataModel} from "~/models/main";
import {API_URLS} from "~/constant/apiUrls";


export const state = () => ({
  main: {},
  dateFetch: null,
  timeFetch: 180000
});


export const mutations = {
  setDateFetch(state, value = new Date()) {
    state.dateFetch = value;
  },
  setMain(state, value) {
    state.main = value || {};
  },
};

export const actions = {
  async getMainData({commit, state: {dateFetch, timeFetch}}) {
    if (dateFetch && differenceInMilliseconds(new Date(), dateFetch) < timeFetch) {
      return;
    }
    commit('setDateFetch');

    await this.$axios.get(API_URLS.main.all)
      .then(res => {
        const data = mainDataModel(res.data?.data);
        commit('setMain', data);
      })
      .catch(e => {
        return e;
      });
  },

}



