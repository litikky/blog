<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="itemClick" />
    </div>
    <div class="item-img">
      <img :src="product.img" alt="" />
    </div>
    <div class="item-info">
      <div class="title">{{ product.title }}</div>
      <div class="num">
        <span class="price">{{ product.lowNowPrice }}</span>
        <span class="count">数量：{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$store.commit('changeChecked', this.product)
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  height: 100px;
  /* margin: 10px 0; */
  padding: 10px 0;
  border-bottom: 2px solid #f6f6f6;
}
.item-selector {
  display: flex;
  width: 20px;
  margin: 0 3px;
  justify-content: center;
  align-items: center;
}

.item-img {
  flex: 2;
  height: 100%;
  overflow: hidden;
  margin-right: 10px;
}
.item-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.item-info {
  display: flex;
  flex: 9;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  padding: 0 5px;
}
.item-info .title {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.num {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
</style>