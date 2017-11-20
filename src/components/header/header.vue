<template>
  <swiper :options="swiperOption">
    <swiper-slide><img src="./0.jpg" width="100%"> </swiper-slide>
    <swiper-slide><img src="./0.jpg" width="100%"> </swiper-slide>
    <swiper-slide><img src="./0.jpg" width="100%"> </swiper-slide>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  require('swiper/dist/css/swiper.css');
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false
        }
      };
    }
  };
</script>

<style type="text/css">
</style>
