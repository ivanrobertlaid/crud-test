import Vuex from "vuex";

import crud from "./modules/crud";

export const store = new Vuex.Store({
  modules: {
    crud
  }
});
