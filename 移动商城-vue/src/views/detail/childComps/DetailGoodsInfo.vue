<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <p class="good-desc">{{detailInfo.desc}}</p>
    <div class="images">
      <img :src="image" alt="" 
      v-for="(image, index) in detailInfo.detailImage[0].list" :key="index"
      @load="imgLoad" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad() {
      this.counter++
      if(this.counter === this.imgLength) {
        this.$emit('imgLoad') 
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style>
.goods-info {
  padding: 5px;
}
.good-desc {
  font-size: 14px;
  margin: 10px 0;
}
.images img {
  width: 100%;
}
</style>