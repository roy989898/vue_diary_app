import Diarys from './components/DiaryRelatedComponent/Diarys.vue';

const routes = [
    {path: '/', component: Diarys},


    {path: '*', redirect: '/'}
];


export default routes;