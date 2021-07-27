<template>
  <div class="bottom-bar">
    <check-button
      class="check-button"
      :is-checked="isSelectAll"
      @click.native="selectAll"
    />
    <p>全选</p>
    <div class="total-price">合计：{{ totalPrice.toFixed(2) }}</div>
    <div class="count-all" @click="countClick">去支付 ({{ countAll }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.lowNowPrice * item.count;
        }, 0);
    },
    countAll() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    selectAll() {
      // 不可以！
      // this.cartList.forEach(item => item.checked = !this.isSelectAll)
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    countClick() {
      if (!this.countAll) {
        this.$toast.show("请选择商品");
      } else {
        this.$toast.show("正在跳转支付");
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #f6f8fa;
  font-size: 18px;
}

.check-button {
  display: inline-block;
  margin-left: 5px;
  width: 22px;
  height: 22px;
}

.bottom-bar p {
  padding: 0 5px;
}

.total-price {
  padding: 0 10px;
}

.count-all {
  height: 100%;
  line-height: 40px;
  background-color: orange;
  margin-left: auto;
  padding: 0 10px;
}
</style>