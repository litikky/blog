<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" 
    :pull-up-load="true" 
    :probe-type="3"
    @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="params" :itemParams="itemParams" />
      <detail-comments ref="comments" :comments="comments" />
      <goods-list ref="recommend" :goods="recommend">
        <h3 slot="title">【更多推荐】</h3>
      </goods-list>
    </scroll>
    <detail-bottom-bar @addChart="addChart" />
    <back-top @click.native="backClick" :probe-type="3" v-show="isShowBackUp" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailComments from "./childComps/DetailComments.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';
import BackTop from "components/content/backTop/BackTop.vue";

import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetail, getRecommend, Goods, Shop } from "network/detail.js";
import { itemListenerMixin, backTopMixin } from "commonjs/mixin.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      comments: {},
      recommend: [],
      themeTopYs: [],
      message: '',
      show: false
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      // 页面滚动与tab的切换项相连(判断太多次)
      this.positonY = -position.y
      for(let i = this.themeTopYs.length - 1; i >= 0; i--) {
        if(this.positonY >= this.themeTopYs[i]) {
          this.$refs.nav.currentTitle = i
          break
        }
      }
      this.listenShowBackTop(position)
    },
    addChart() {
      // 1. 获取购物车展示的数据
      const product = {}
      product.iid = this.iid
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.lowNowPrice = this.goods.lowNowPrice

      // 2. 商品加入购物车（向vuex传递）
      this.$store.dispatch('addChart', product).then(res => {
        this.$toast.show(res)
      })
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2. 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.itemParams = data.itemParams;
      if (data.rate.cRate !== 0) this.comments = data.rate;
    });
    // 3. 请求推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 99;
}
.content {
  background-color: #fff;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>