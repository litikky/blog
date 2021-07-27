import { debounce } from "commonjs/utils.js";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // img被挂载到dom上，但是图片还没有高度
    const refresh = debounce(this.$refs.scroll.refresh, 200);

    this.itemImgListener = () => refresh()
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackUp: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(p) {
      this.isShowBackUp = -p.y > 1000;
    }
  }
}