import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
});

Vue.filter('dateFormat', function (value) {
    let showDate = value.getFullYear() + "/" + (value.getMonth() + 1) + "/" + value.getDate();
    return showDate;
});
new Vue({
    store,
    render: h => h(App),
    router: router,
}).$mount('#app');
