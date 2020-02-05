import Vuex from "vuex";
import Axios from 'axios';

Axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

import crud from "./modules/crud";

export const store = new Vuex.Store({
  modules: {
    crud
  }
});
