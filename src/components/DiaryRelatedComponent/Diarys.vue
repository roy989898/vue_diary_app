<template>
    <div>

        <div class="row">
            <app-diary-box v-for="diary in diarys" v-bind:date="diary.date" v-bind:content="diary.content"
                           v-bind:title="diary.title" v-bind:key="diary.date+diary.content+diary.title"></app-diary-box>
        </div>

    </div>

</template>

<script>
    import DiaryBox from './DiaryBox.vue'
    import diarys from '../../TemDiarysStore'

    export default {
        name: "diarys",
        components: {
            'app-diary-box': DiaryBox,

        },
        // props: ['diarys']
        computed: {
            diarys() {
                return diarys;
            }
        }
    }
</script>

<style scoped>

</style>