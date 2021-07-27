<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(img, index) in topImages" :key="index">
      <img :src="img" alt="" @load="imageLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "DetailSwiper",
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper, 
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 只发射一次
    imageLoad() {
      // console.log('swiperload')
    }
  }
};
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
