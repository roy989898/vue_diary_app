<template>
    <div>
        <div class="card box-style">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{date}}</h6>
                <p class="card-text content">{{content}}</p>
                <!--todo set the delete and edit button-->
                <a href="#" class="card-link">Delete</a>
                <a href="#" class="card-link">Edit</a>
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

        }

    }
</script>

<style scoped>

    .box-style {
        width: 18rem;

    }

    .content {
        max-height: 10rem;
        overflow: hidden;

    }

</style>