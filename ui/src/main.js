import Vue from 'vue';
import App from './App.vue';

import Axios from "axios";

Axios.defaults.baseURL = "http://127.0.0.1:8000//api";


import { BootstrapVue } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import {store} from './store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

require("@/router/metaTags.js");

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
