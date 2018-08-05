import Diarys from './components/DiaryRelatedComponent/Diarys.vue';
import DiaryEdit from './components/DiaryRelatedComponent/DiaryEdit.vue'
import Search from './components/BasicComponent/SearchPage.vue'

const routes = [
    {path: '/', component: Diarys},
    {path: '/diary_edit/:id', component: DiaryEdit},
    {path: '/search/:search_id', component: Search},


    {path: '*', redirect: '/'}
];


export default routes;