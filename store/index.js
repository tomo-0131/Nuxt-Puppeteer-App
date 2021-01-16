import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: { //サインアップ・ログインで呼び出す
    updateIdToken(state, idToken) {
      state.idToken = idToken,
    }
  },
});
