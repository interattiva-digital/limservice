<template>
    <div class="slide" :id="contentId">
        <slot></slot>
    </div>
</template>

<style scoped>
    .slide {
        float: left;
    }
</style>

<script>
    export default {
        props: ['contentId'],

        data() {
            return {

            }
        },
    }
</script>