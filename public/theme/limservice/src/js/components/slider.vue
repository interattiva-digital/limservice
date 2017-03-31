<template>
    <div>
        <div class="slider-container">
            <div class="wrapper clearfix" :style="wrapperStyle">
                <slot name="content"></slot>
            </div>
        </div>

        <div class="slider-controls">
            <slot name="controls"></slot>
        </div>
    </div>
</template>

<style>
    .slider-container {
        overflow: hidden;
        height: 500px;
        position: relative;
    }

    .slider-container .wrapper {
        position: relative;

        transition: transform 0.5s;
    }

    .slider-container .slide {
        float: left;
    }
</style>

<script>
    export default {
        data() {
            return {
                slides: {},
                $container: {},
                $wrapper: {},
                $slides: {},
                $slideControls: {},
                slideWidth: 0,
                currentPosition: 0
            }
        },

        computed: {
            wrapperStyle: function () {
                return `transform: translateX(${this.currentPosition}px);`;
            }
        },

        methods: {
            goToSlide(id, event) {
                let slide = this.$slides.filter(`${id}`);
                let slideIndex = this.$slides.index(slide);

                this.currentPosition = -this.slideWidth * slideIndex;
            }
        },

        mounted() {
            this.$container = $(this.$el).children('.slider-container');
            this.$wrapper = $(this.$el).find('.slider-container .wrapper');
            this.$slides = $(this.$el).find('.slide');
            this.$slideControls = $(this.$el).find('.slide-control');

            this.slideWidth = this.$container.width();
            this.slideHeight = this.$container.height();

            this.$wrapper.css('width', this.slideWidth * this.$slides.length);
            $(this.$slides).css('width', this.slideWidth);
            $(this.$slides).css('height', this.slideHeight);

            this.$slideControls.on('click', (e) => {
                let target = $(e.target).attr('data-target');

                this.goToSlide(target);
            });
        }
    }
</script>