<template>
    <div>
        Here is the search page {{searchId}}
    </div>
</template>

<script>
    export default {
        name: "SearchPage",
        computed: {
            searchId() {
                console.log(this.$route.params);
                return this.$route.params.search_id;
            },
        }
    }
</script>

<style scoped>

</style>