import {differenceInMilliseconds} from "date-fns";
import {API_URLS} from "~/constant/apiUrls";
import {seoModel} from "~/models/seo";

export const state = () => ({
  seo: {},
  dateFetch: null,
  timeFetch: 300000,
});


export const mutations = {
  setDateFetch(state, value = new Date()) {
    state.dateFetch = value;
  },
  setSeo(state, value) {
    state.seo = value || {};
  },
};

export const actions = {
  async getSeo({commit, state: {dateFetch, timeFetch}}) {
    if (dateFetch && differenceInMilliseconds(new Date(), dateFetch) < timeFetch) {
      return;
    }
    commit('setDateFetch');

    await this.$axios.get(API_URLS.seo)
      .then(res => {
        const data = seoModel(res.data?.data);
        commit('setSeo', data);
      })
      .catch(e => {
        return e;
      });
  },
}
