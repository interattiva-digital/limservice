<template>
    <div>
        <div class="slider-container">
            <slot name="content"></slot>
        </div>

        <div class="slider-controls">
            <slot name="controls"></slot>
        </div>
    </div>
</template>

<style></style>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>