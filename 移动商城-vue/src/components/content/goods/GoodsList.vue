<template>
  <div class="goods-list">
    <div class="title"><slot name="title"></slot></div>
    <ul class="goods-list-ul">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  }
}
</script>

<style scoped>
.goods-list-ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  font-size: 12px;
  color: #1a1a1a;
}

.title {
  text-align: center;
  font-size: 16px;
  margin: 5px;
  border-top: 2px solid #f6f6f6;
  padding: 5px 0;
}

</style>