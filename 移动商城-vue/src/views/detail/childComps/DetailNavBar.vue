<template>
  <nav-bar class="detail">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="titles">
      <span
        v-for="(title, index) in titles"
        :key="index"
        @click="titleClick(index)"
        :class="{ active: currentTitle === index }"
        >{{ title }}</span
      >
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentTitle: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentTitle = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.detail {
  font-size: 16px;
}

.back img {
  width: 24px;
  vertical-align: middle;
}

.titles {
  display: flex;
  justify-content: space-evenly;
} 

.active {
  color: var(--color-tint);
}
</style>