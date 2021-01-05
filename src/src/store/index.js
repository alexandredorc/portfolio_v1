import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    retour: false,
    indexRetour: 0,
  },
  mutations: {
    CHANGE_RETOUR(state, payload) {
      state.retour = !state.retour;
      state.indexRetour = payload.index;
    },
  },
  actions: {
    changeretour(context, payload) {
      context.commit("CHANGE_RETOUR", payload);
    },
  },
});