<template>
    <div class="inherit-height">
        <div class="slider-container">
            <div class="wrapper clearfix" :style="wrapperStyle">
                <slot></slot>
            </div>
        </div>

        <div class="slider-controls">
            <slide-controls>
                <slide-control content-id="home" @change-slide="changeSlide">Главная</slide-control>
                <slide-control content-id="about" @change-slide="changeSlide">О Нас</slide-control>
                <slide-control content-id="services" @change-slide="changeSlide">Услуги</slide-control>
                <slide-control content-id="portfolio" @change-slide="changeSlide">Портфолио</slide-control>
                <slide-control content-id="products" @change-slide="changeSlide">Продукция</slide-control>
            </slide-controls>
        </div>
    </div>
</template>

<style scoped>
    .slider-container {
        overflow: hidden;
        height: 100%;
        position: relative;

        padding-top: 30px;
        padding-bottom: 30px;
    }

    .slider-container .wrapper {
        position: relative;

        transition: transform 0.5s;
    }

    .inherit-height {
        height: inherit;
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
                currentPosition: 0,
                wrapperWidth: 0
            }
        },

        computed: {
            wrapperStyle: function () {
                return `transform: translateX(${this.currentPosition}px);`;
            }
        },

        components: {
            'slide-control': require('./slide-control.vue'),
            'slide-controls': require('./slide-controls.vue'),
            'slide': require('./slide.vue'),
        },

        methods: {
            goToSlide(id, event) {
                let slide = this.$slides.filter(`${id}`);
                let slideIndex = this.$slides.index(slide);

                if(slideIndex >= 0) {
                    this.currentPosition = -this.slideWidth * slideIndex;
                }
            },

            changeSlide(id) {
                let slide = this.$slides.filter(`#${id}`);
                let slideIndex = this.$slides.index(slide);

                if(slideIndex >= 0) {
                    this.currentPosition = -this.slideWidth * slideIndex;
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
            }
        },

        mounted() {
            this.setup();

            $(window).on('resize', this.setup);
        }
    }
</script>