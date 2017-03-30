<template>
    <div :id="contentId">
        <slot></slot>
    </div>
</template>

<style></style>

<script>
    export default {
        props: ['contentId'],

        data() {
            return {

            }
        },
    }
</script>