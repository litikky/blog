<template>
  <li class="goods-list-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imageLoad"/>
    <div class="goods-info">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="sale"> {{ goodsItem.sale }}人购买</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  height: 240px;
  vertical-align: center;
  border-radius: 5px;
}
.goods-info {
  padding: 0 3px 5px;
}
.goods-info .title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 3px 0;
}

.goods-info .price {
  color: var(--color-tint);
  font-size: 16px;
}

.goods-info .sale {
  font-size: 10px;
  color: gray;
}
</style>