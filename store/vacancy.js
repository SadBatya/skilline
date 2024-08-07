import {differenceInMilliseconds} from "date-fns";
import {API_URLS} from "~/constant/apiUrls";
import {categoriesVacancyModel, vacanciesModel} from "~/models/vacancy";

export const state = () => ({
  categories: [],
  totalCategoryCount: 0,
  dateFetchCategories: null,
  timeFetch: 300000,
});

export const mutations = {
  setDateFetchCategories(state, value = new Date()) {
    state.dateFetchFilterValues = value;
  },
  setCategories(state, categories) {
    state.categories = categories || [];
  },
  setTotalCountCategories(state, count) {
    state.totalCategoryCount = count;
  }
};

export const actions = {
  async fetchVacancyList({commit, state: {dateFetchFilterValues, timeFetch}}, filterOptions = {}) {
    return await this.$axios.get(API_URLS.vacancy.list, {
      params: filterOptions
    })
      .then(res => {
        return vacanciesModel(res.data?.data);
      })
      .catch(e => {
        return e;
      });
  },

  async fetchCategories({commit, state}) {
    const {dateFetchCategories, timeFetch} = state;
    if (dateFetchCategories && differenceInMilliseconds(new Date(), dateFetchCategories) < timeFetch) {
      return;
    }
    commit('setDateFetchCategories');

    await this.$axios.get(API_URLS.vacancy.category)
      .then(res => {
        const categories =  categoriesVacancyModel(res.data?.data);
        commit('setCategories', categories.list);
        commit('setTotalCountCategories', categories.totalCount);
        commit('setDateFetchCategories');
      })
      .catch(e => {
        commit('setCategories', []);
        commit('setDateFetchCategories', null);
        return e;
      });
  },
}
