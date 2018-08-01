<template>
    <div>
        <div class="card box-style">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text content">Some quick example text to build on the card title and make up the bulk
                    of the
                    card's content.Some quick example text to build on the card title and make up the bulk of the
                    card's content.Some quick example text to build on the card title and make up the bulk of the
                    card's content.Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="card-link">Delete</a>
                <a href="#" class="card-link">Edit</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "diary-box",
        props: ['date', 'title', 'content'],

    }
</script>

<style scoped>

    .box-style {
        width: 18rem;

    }

    .content {
        height: 10rem;
        max-height: 10rem;
        overflow: hidden;

    }

</style>