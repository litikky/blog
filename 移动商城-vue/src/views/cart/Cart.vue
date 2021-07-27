<template>
  <div class="cart">
    <!-- 1.顶部栏 -->
    <nav-bar><div slot="center">购物车({{ cartLength }})</div></nav-bar>

    <!-- 2.列表 -->
    <cart-list />

    <!-- 3.底部栏 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar.vue";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from './childComps/CartBottomBar.vue';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
</style>