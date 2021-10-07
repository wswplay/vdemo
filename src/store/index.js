import Vue from "vue";
import Vuex from "vuex";
import { resetRouter, addRolesRouter } from '@/router';
import { removeToken } from '@/utils/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roleObj: {
      admin: 'admin',
      biancheng: 'admin',
      nanzhi: 'boss',
      xiao: 'hero'
    },
    cateList: [],
    roles: []
  },
  mutations: {
    setCateList(state, data) {
      state.cateList = data;
    },
    setRoles(state, data) {
      state.roles = data;
      if(data.length) addRolesRouter(data);
    },
  },
  actions: {
    logOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        removeToken();
        commit('setRoles', []);
        resetRouter();
        resolve();
      })
    },
  },
  modules: {},
});
