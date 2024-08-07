import {differenceInMilliseconds} from "date-fns";
import {API_URLS} from "~/constant/apiUrls";
  import {contactsModel} from "~/models/contacts";

export const state = () => ({
  contacts: {},
  dateFetch: null,
  timeFetch: 300000,
});


export const mutations = {
  setDateFetch(state, value = new Date()) {
    state.dateFetch = value;
  },
  setContacts(state, data) {
    if (!data) {
      state.contacts = {};
      return;
    }
    state.contacts = Object.assign({}, data);
  }
};

export const actions = {
  async fetchContacts({commit, state: {dateFetch, timeFetch}}) {
    if (dateFetch && differenceInMilliseconds(new Date(), dateFetch) < timeFetch) {
      return;
    }
    commit('setDateFetch');

    await this.$axios.get(API_URLS.contacts)
      .then(res => {
        commit('setContacts', contactsModel(res?.data?.data))
      })
      .catch(e => {
        console.log(e);
      });
  },

}
