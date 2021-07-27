<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div class="service-staff">
        <span class="icon"></span>
        <p>客服</p>
      </div>
      <div class="shop">
        <span class="icon"></span>
        <p>店铺</p>
      </div>
      <div class="collections">
        <span class="icon"></span>
        <p>收藏</p>
      </div>
    </div>
    <div class="bottom-bar-right">
      <a href="#" class="chart" @click="addChart">加入购物车</a>
      <a href="#" class="buy-btn">购买</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addChart() {
      this.$emit('addChart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 49px;
}

.bottom-bar>div {
  flex: 1;
  display: flex;
}

.bottom-bar-left {
  justify-content: space-around;
  padding: 5px 0;
  font-size: 14px;
}

.bottom-bar-left .icon {
  display: inline-block;
  width: 24px;
  height: 24px;
}
.service-staff .icon {
  background: url(~assets/img/detail/detail_bottom.png) 0 -58px/100%;
}

.shop .icon {
  background: url(~assets/img/detail/detail_bottom.png) 0 -107px/100%;
}

.collections .icon {
  background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
}

.bottom-bar-right {
  line-height: 49px;
  font-size: 18px;
  text-align: center;
}

.bottom-bar-right .chart{
  flex: 1;
  background-color: yellow;
}

.bottom-bar-right .buy-btn {
  flex: 1;
  background-color: pink;
}
</style>