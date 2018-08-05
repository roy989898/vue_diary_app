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
                let params = this.$router.params;
                console.log('YOYOY', this.$router);
                return params.id;
            },
        },
    }
</script>

<style scoped>

</style>