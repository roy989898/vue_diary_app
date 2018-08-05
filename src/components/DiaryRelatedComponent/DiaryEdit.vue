<template>
    <div class="col-sm">
        <!--Diary edit {{diaryId}}-->
        <!--{{diary}}-->

        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input class="form-control" id="title"
                       placeholder="Enter Title"
                       v-bind:value="diary.title">
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
        </form>

    </div>

</template>

<script>
    // import {mapGetters} from 'vuex'
    export default {
        name: "diary-edit",
        computed: {
            diaryId() {
                // console.log(this.$route.params);
                return this.$route.params.id;
            },

            diary() {
                let diary = this.$store.getters.getDiary(this.diaryId);
                console.log(diary);
                return diary;

            }
        },
    }
</script>

<style scoped>

</style>