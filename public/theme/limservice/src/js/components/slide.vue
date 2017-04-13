<template>
    <div class="slide" :id="contentId" :data-content-label="contentLabel">
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
        props: ['contentId', 'contentLabel'],

        data() {
            return {

            }
        },
    }
</script>