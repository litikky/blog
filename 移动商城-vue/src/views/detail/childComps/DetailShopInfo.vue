<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="box">
          <div>
            <div class="num">{{ sellNum }}</div>
            <div>总销量</div>
          </div>
          <div>
            <div class="num">{{ shop.goodsNum }}</div>
            <div>全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="shop-middle-right">
        <div
          v-for="(item, index) in shop.score"
          :key="index"
          class="score-item"
        >
          <span>{{ item.name }}</span>
          <span :class="{ 'score-better': item.isBetter }" class="score">{{
            item.score
          }}</span>
          <span :class="{ 'score-better': item.isBetter }" class="better">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <a :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sellNum() {
      if (this.shop.sells < 10000) return this.shop.sells;
      return (this.shop.sells / 10000).toFixed(1) + "万";
    },
  }
};
</script>

<style scoped>
.shop-top {
  font-size: 14px;
  font-weight: 400;
}
.shop-top img {
  width: 40px;
  border-radius: 20px;
  vertical-align: middle;
  margin: 10px;
}

.shop-middle {
  display: flex;
  justify-content: center;
   font-size: 14px;
   text-align: center;
}

.shop-middle>div {
  flex: 1;
}

.shop-middle-left {
  display: flex;
}
.shop-middle-left .box {
  display: flex;
  justify-content: space-evenly;
  margin: auto 0;
  width: 100%;
  border-right: 2px solid #f6f6f6;
}
.box>div>div {
  padding: 5px;
}

.shop-middle-left .num {
  font-size: 16px;
  font-weight: 700;
}

.score-item {
  padding: 5px;
}
.score-item .score {
  display: inline-block;
  width: 30px;
  margin: 0 10px;
}

.score {
  color: green;
}
.better {
  background-color: green;
  color: #fff;
}
.shop-middle-right .score-better {
  color: var(--color-tint);
}
.score-better + .better {
  background-color: var(--color-tint);
  color: #fff;
}

.shop-bottom {
  text-align: center;
  margin: 10px;
}

.shop-bottom a {
  background-color: #f6f6f6;
  padding: 5px 30px;
  border-radius: 10px;
  font-size: 16px;
}
</style>