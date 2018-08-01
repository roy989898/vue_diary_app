<template>
    <div>
        <app-diary-box></app-diary-box>
    </div>

</template>

<script>
    import DiaryBox from './DiaryBox.vue'

    export default {
        name: "diarys",
        components: {
            'app-diary-box': DiaryBox,

        }
    }
</script>

<style scoped>

</style>