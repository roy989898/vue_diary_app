import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import diarys from './TemDiarysStore'
import dateFormat from 'dateformat'

Vue.config.productionTip = false;
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
});

Vue.filter('dateFormat', function (value) {
    // let showDate = value.getFullYear() + "/" + (value.getMonth() + 1) + "/" + value.getDate();
    // 1980-01-01
    return dateFormat(value, 'yyyy-mm-dd');
});
new Vue({
    store,
    render: h => h(App),
    router: router,
    created: function () {
        this.$store.dispatch('setDiarys', diarys);

    },
}).$mount('#app');
