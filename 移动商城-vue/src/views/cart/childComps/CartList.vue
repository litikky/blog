<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :probe-type="3">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from './CartListItem.vue';

export default {
  components: { Scroll, CartListItem },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>

<style>
.cart-list {
  position: relative;
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>