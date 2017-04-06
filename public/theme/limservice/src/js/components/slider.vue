<template>
    <div class="inherit-height">
        <div class="slider-container">
            <div class="wrapper clearfix" :style="wrapperStyle">
                <slot></slot>
            </div>
        </div>

        <div class="slider-controls">
            <slide-controls>
                <slide-control content-id="home" @change-slide="changeSlide" :active-slide="activeSlide">Главная</slide-control>
                <slide-control content-id="about" @change-slide="changeSlide" :active-slide="activeSlide">О Нас</slide-control>
                <slide-control content-id="services" @change-slide="changeSlide" :active-slide="activeSlide">Услуги</slide-control>
                <slide-control content-id="portfolio" @change-slide="changeSlide" :active-slide="activeSlide">Портфолио</slide-control>
                <slide-control content-id="products" @change-slide="changeSlide" :active-slide="activeSlide">Продукция</slide-control>
            </slide-controls>
        </div>
    </div>
</template>

<style scoped>
    .slider-container {
        /*overflow-x: hidden;*/
        height: 100%;
        position: relative;
        /*padding-top: 20px;*/
        /*padding-bottom: 20px;*/
    }

    .slider-container .wrapper {
        position: relative;
        transition: transform 0.5s;
    }

    .inherit-height {
        height: inherit;
        width: 100%;
        /*overflow-y: visible;*/
        /*overflow-x: hidden;*/
        /*overflow-y: visible;*/
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
            }
        },

        mounted() {
            this.setup();

            $(window).on('resize', this.setup);
        }
    }
</script>