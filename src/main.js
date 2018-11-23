import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex)
Vue.use(VueRouter)
import router from './router.js';

Vue.config.productionTip = false
new Vue({
	router:router,
	render: h => h(App),
}).$mount('#app')
