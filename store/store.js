import Vue from 'vue';
import Vuex from 'vuex';
import { mapMutations } from 'vuex';

//Vue.use(Vuex);

export const state = () => ({
  idToken: null
})

export const getters = {
  idToken: state => state.idToken
}

export const mutations = {
  updateIdToken(state, idToken) {
    state.idToken = idToken;
  }
}
