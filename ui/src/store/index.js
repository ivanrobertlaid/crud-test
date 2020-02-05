import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import crud from "./modules/crud";

export const store = new Vuex.Store({
  modules: {
    crud
  }
});
