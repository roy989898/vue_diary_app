import Vuex from 'vuex'
import DiarysModel from './Modules/DiarysModel'
import Vue from "vue";


Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        DiarysModel,
    }
});

export default store;