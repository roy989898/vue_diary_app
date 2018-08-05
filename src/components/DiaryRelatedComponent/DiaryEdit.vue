<template>
    <div class="col-sm">
        <!--Diary edit {{diaryId}}-->
        <!--{{diary}}-->

        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input class="form-control" id="title"
                       placeholder="Enter Title"
                       v-model="title">
            </div>
            <!--v-bind:value="diary.date|dateFormat"-->
            <div class="form-group">
                <label for="title">Date</label>
                <input class="form-control" id="date"
                       type="date"
                       placeholder="Enter Date"
                       v-bind:value="diary.date|dateFormat"
                >
            </div>

            <div class="form-group">
                <label for="title">Content</label>
                <!-- <input class="form-control" id="content"
                        type="date"
                        placeholder="Enter Date"
                        v-bind:value="diary.date|dateFormat"
                 >-->

                <textarea name="Text1" cols="40" rows="5" class="form-control" id="content"
                          v-bind:value="diary.content"
                ></textarea>
            </div>

            <button
                    class="btn btn-primary"
                    v-on:click.prevent="update"
            >Update
            </button>
        </form>

    </div>

</template>

<script>
    // import {mapGetters} from 'vuex'
    // import DiaryClass from '../../Class/DiaryClass'
    import _ from 'lodash'

    export default {
        name: "diary-edit",
        computed: {
            diaryId() {
                // console.log(this.$route.params);
                return this.$route.params.id;
            },

            diary() {
                let diary = this.$store.getters.getDiary(this.diaryId);
                // console.log(diary);
                let diaryCopy = _.cloneDeep(diary);
                /*   console.log("copy", diaryCopy);
                   console.log("original ", diary);*/
                return diaryCopy;

            },
            /* date:{
                 get(){
                     return diary.date;
                 },
                 set(value){
                     diary.date
                 }
             },*/
            title: {
                get() {
                    return this.diary.title;
                },
                set(value) {
                    this.diary.title = value;
                }

            },
            /*content: {},*/
        },
        methods: {
            update() {
                console.log('update click!!!!');
            }

        }
    }
</script>

<style scoped>

</style>