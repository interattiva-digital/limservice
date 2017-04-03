<template>
    <li class="slide-control" :data-target="contentId" @click="emitSlideChange">
        <slot></slot>
    </li>
</template>

<style scoped>

</style>

<script>
    export default {
        props: ['contentId'],

        data() {
            return {

            }
        },

        mounted() {

        },

        methods: {
            emitSlideChange() {
                this.$emit('change-slide', this.contentId);
            }
        }
    }
</script>