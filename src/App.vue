<template>
    <div id="app" class="container-fluid">
        <app-header></app-header>
        <!--<div class="alert alert-primary" role="alert" style="text-align: center">
            My Diary App
        </div>-->

        <router-view></router-view>


        <app-footer></app-footer>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import AppHeader from './components/BasicComponent/Header.vue'
    import AppFooter from './components/BasicComponent/Footer.vue'


    export default {
        name: 'app',
        components: {
            // HelloWorld,
            AppHeader,
            AppFooter,
        }
    }
</script>

<style>

</style>
