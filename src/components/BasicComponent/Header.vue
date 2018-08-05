<template>
    <div>

        <div class="row">
            <h1 class="col-sm">Diary App</h1>
            <router-link to="/" class="col-sm ">Show all</router-link>
            <!--<a href="#" class="col-sm ">search</a>-->
            <router-link to="/search" class="col-sm ">Search</router-link>
            <a href="#" class="col-sm">Add new diary</a>
        </div>


    </div>


</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>