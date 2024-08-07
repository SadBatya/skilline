import {differenceInMilliseconds} from "date-fns";
import {API_URLS} from "~/constant/apiUrls";
import {aboutUsModel} from "~/models/aboutUs";

export const state = () => ({
  statistic: [],
  aboutPage: {
    title: 'Мы',
    statistic: [],
    statisticMain: [],
    mainBlockList: [],
  },
  director: {},
  dateFetch: null,
  timeFetch: 300000,
});


export const mutations = {
  setDateFetch(state, value = new Date()) {
    state.dateFetch = value;
  },
  setStatistic(state, statistic) {
    state.statistic = statistic || [];
  },
  setAboutPage(state, data) {
    if (!data) {
      state.aboutPage = {};
      return;
    }
    state.aboutPage = Object.assign({} , data);
  },
  setDirector(state, data) {
    if (!data) {
      state.director = {};
      return;
    }
    state.director = Object.assign({}, data);
  },
};

export const actions = {
  async fetchAboutUs({commit, state: {dateFetch, timeFetch}}) {
    if (dateFetch && differenceInMilliseconds(new Date(), dateFetch) < timeFetch) {
      return;
    }
    commit('setDateFetch');

    await this.$axios.get(API_URLS.aboutUs.list)
      .then(res => {
        const data = aboutUsModel(res.data?.data);

        commit('setStatistic', data.statistic);
        commit('setAboutPage', data.aboutPage);
      })
      .catch(e => {
        return e;
      });
  },

}
