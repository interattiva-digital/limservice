<template>
    <li class="slide-control" :class="{ 'active': isActive }" :data-target="contentId" @click="emitSlideChange">
        <slot></slot>
    </li>
</template>

<style scoped>

</style>

<script>
    export default {
        props: ['contentId', 'activeSlide'],

        data() {
            return {

            }
        },

        computed: {
            isActive() {
                return this.contentId === this.activeSlide;
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