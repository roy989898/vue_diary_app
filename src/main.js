import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
});
new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');
