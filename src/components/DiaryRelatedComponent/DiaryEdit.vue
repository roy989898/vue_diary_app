<template>
    <div class="col-sm">
        Diary edit {{diaryId}}
    </div>

</template>

<script>
    export default {
        name: "diary-edit",
        computed: {
            diaryId() {
                // console.log(this.$route.params);
                return this.$route.params.id;
            },
        },
    }
</script>

<style scoped>

</style>