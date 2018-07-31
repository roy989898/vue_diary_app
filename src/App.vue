<template>
    <div id="app">
        <app-header></app-header>
        <div class="alert alert-primary" role="alert" style="text-align: center">
            My Diary App
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import AppHeader from './components/BasicComponent/Header.vue'
    import AppFooter from './components/BasicComponent/Footer.vue'


    export default {
        name: 'app',
        components: {
            HelloWorld,
            'app-header': AppHeader,
            'app-footer': AppFooter,
        }
    }
</script>

<style>

</style>
