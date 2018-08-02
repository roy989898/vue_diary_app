<template>
    <div>

        <div class="row">
            <app-diary-box v-for="diary in diarys" v-bind:date="diary.date|dateFormat" v-bind:content="diary.content"
                           v-bind:title="diary.title" v-bind:id="diary.id" v-bind:key="diary.id"></app-diary-box>
        </div>

    </div>

</template>

<script>
    import DiaryBox from './DiaryBox.vue'
    // import diarys from '../../TemDiarysStore'
    import {mapGetters} from 'vuex'

    export default {
        name: "diarys",
        components: {
            'app-diary-box': DiaryBox,

        },
        // props: ['diarys']
        computed: {
            /*diarys() {
                return diarys;
            }*/
            ...mapGetters({
                diarys: 'getDiarys',
            })
        }
    }
</script>

<style scoped>

</style>