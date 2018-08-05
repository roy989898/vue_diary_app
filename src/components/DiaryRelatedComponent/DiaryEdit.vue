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


                >
            </div>

            <div class="form-group">
                <label for="title">Content</label>


                <textarea
                        name="Text1"
                        cols="40"
                        rows="5"
                        class="form-control" id="content"
                        v-model="content"
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

            date: {
                get() {
                    return this.diary.date;
                },
                set(value) {
                    this.diary.date = value;
                }
            },
            title: {
                get() {
                    return this.diary.title;
                },
                set(value) {
                    this.diary.title = value;
                }

            },
            content: {
                get() {
                    return this.diary.content;
                },
                set(value) {
                    this.diary.content = value;
                },
                /*content: {},*/
            }
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