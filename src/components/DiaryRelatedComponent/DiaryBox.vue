<template>
    <div>
        <div class="card box-style">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{date}}</h6>
                <p class="card-text content">{{content}}</p>

                <a href="#" class="card-link" v-on:click="deleteADiary">Delete</a>
                <router-link to="/diary_edit/2" class="card-link">Edit</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "diary-box",
        // props: ['date', 'title', 'content'],
        props: {
            date: {
                default: 'Default date'
            },
            title: {
                default: 'Default title'
            },
            content: {
                default: 'Default content'
            },
            id: {
                required: true
            }

        },
        computed: {
            editLink() {
                return /diary_edit/ + this.id;
            }
        },
        methods: {
            deleteADiary() {

                if (confirm("Deleted " + this.title + " " + "?")) {
                    this.$store.dispatch('deleteDiary', this.id)
                }
            },

        }

    }
</script>

<style scoped>

    .box-style {
        width: 18rem;
        margin: 5px;

    }

    .content {
        max-height: 10rem;
        overflow: hidden;

    }

</style>