import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import diarys from './TemDiarysStore'
import {dateFormatFilter} from './filter'


Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
});

Vue.filter('dateFormat', dateFormatFilter);
new Vue({
    store,
    render: h => h(App),
    router: router,
    created: function () {
        this.$store.dispatch('setDiarys', diarys);

    },
}).$mount('#app');
