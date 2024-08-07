import {differenceInMilliseconds} from "date-fns";
import {worksCategoryModel, worksDetailModel, worksModel} from "~/models/works";
import {API_URLS} from "~/constant/apiUrls";

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
  async fetchWorks({commit, state: {dateFetchFilterValues, timeFetch}}, filterOptions = {}) {
    return await this.$axios.get(API_URLS.works.list, {
      params: filterOptions
    })
      .then(res => {
        return worksModel(res.data?.data);
      })
      .catch(e => {
        return e;
      });
  },

  async fetchWorkDetail(ctx, code) {
    return await this.$axios.get(API_URLS.works.detail.code(code))
      .then(res => {
       return worksDetailModel(res.data?.data)
    })
      .catch(e => {
        return e;
      })
  },

  async fetchCategories({commit, state}) {
    const {dateFetchCategories, timeFetch} = state;
    if (dateFetchCategories && differenceInMilliseconds(new Date(), dateFetchCategories) < timeFetch) {
      return;
    }
    commit('setDateFetchCategories');

    await this.$axios.get(API_URLS.works.category)
      .then(res => {
        const categories =  worksCategoryModel(res.data?.data);
        commit('setCategories', categories.list);
        commit('setTotalCountCategories', categories.totalCount);
        commit('setDateFetchCategories');
      })
      .catch(e => {
        commit('setCategories', []);
        return e;
      });
  }
}
