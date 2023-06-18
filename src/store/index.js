import Fetcher from '@/Fetcher';
import { createStore } from 'vuex'

export default createStore({
  state: {
    signStatus: false,
    showInteractiveMap: false,
  },
  getters: {
    signStatus({ signStatus }) {
      return signStatus;
    },
    showInteractiveMap({ showInteractiveMap }) {
      return showInteractiveMap;
    },
  },
  mutations: {
    changeSignStatus(state, value) {
      state.signStatus = value;
    },
    turnShowInteractiveMap(state) {
      state.showInteractiveMap = !state.showInteractiveMap;
    },
  },
  actions: {
    async signin({ commit }, payload) {
      const res = await Fetcher.post(
        '/user/signin',
        payload
      ).catch(err => console.log(err));
      if (res) {
        localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, res.accessToken);
        Fetcher.setToken();
        commit('changeSignStatus', true);
      }
    },
  },
  modules: {
  }
})
