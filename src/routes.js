import Diarys from './components/DiaryRelatedComponent/Diarys.vue';
import DiaryEdit from './components/DiaryRelatedComponent/DiaryEdit.vue'

const routes = [
    {path: '/', component: Diarys},
    {path: '/diary_edit', component: DiaryEdit},


    {path: '*', redirect: '/'}
];


export default routes;