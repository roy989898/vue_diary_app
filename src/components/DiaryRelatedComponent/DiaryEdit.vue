<template>
    <div class="col-sm">
        <!--Diary edit {{diaryId}}-->
        {{diary}}
        
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