<template>
    <div class="inherit-height">
        <div class="slider-container" :class="{ 'centered' : isCentered }">
            <div class="wrapper clearfix" :style="wrapperStyle">
                <slot></slot>
            </div>

            <div class="slider-controls">
                <ul class="slide-controls">
                    <slide-control v-for="item in slides" :key="item.id" :content-id="getContentId(item)" @change-slide="changeSlide" :active-slide="activeSlide">{{ getContentLabel(item) }}</slide-control>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default {
        props: ['isCentered'],

        data() {
            return {
                slides: [],
                $container: {},
                $wrapper: {},
                $slides: {},
                $slideControls: {},
                slideWidth: 0,
                wrapperWidth: 0,
                currentSlideIndex: 0,
                activeSlide: ''
            }
        },

        computed: {
            wrapperStyle: function () {
                return `transform: translateX(${this.currentPosition}px);`;
            },

            currentPosition() {
                return -this.slideWidth * this.currentSlideIndex;
            }
        },

        components: {
            'slide-control': require('./slide-control.vue'),
            'slide-controls': require('./slide-controls.vue'),
            'slide': require('./slide.vue'),
        },

        methods: {
            changeSlide(id) {
                let slide = this.$slides.filter(`#${id}`);
                let slideIndex = this.$slides.index(slide);

                if(slideIndex >= 0) {
                    this.currentSlideIndex = slideIndex;
                    this.activeSlide = id;
                }
            },

            setup() {
                this.$container = $(this.$el).children('.slider-container');
                this.$wrapper = $(this.$el).find('.slider-container > .wrapper');
                this.$slides = this.$wrapper.children();

                this.slideWidth = this.$container.width();
                this.slideHeight = this.$container.height();

                this.$wrapper.css('width', this.slideWidth * this.$slides.length);
                $(this.$slides).css('width', this.slideWidth);
                $(this.$slides).css('height', this.slideHeight);

                if(this.activeSlide === '') {
                    this.activeSlide = this.$slides.first().attr('id');
                }

                this.slides = this.$slides.toArray();

                if(this.isCentered) {

                }
            },

            getContentLabel(el) {
                return $(el).attr('data-content-label');
            },

            getContentId(el) {
                return $(el).attr('id');
            }
        },

        mounted() {
            this.setup();

            $(window).on('resize', this.setup);
        }
    }
</script>