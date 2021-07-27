<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <h3 class="title">{{ goods.title }}</h3>
    <div class="price">
      <span class="now-price">{{ goods.price }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="other-info">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="" v-if="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 5px;
  padding-bottom: 0;
  border-bottom: 3px solid #f6f6f6;
}

.title {
  font-size: 16px;
  font-weight: 400;
}

.price {
  margin: 10px 0;
}

.price span {
  margin: 0 3px;
}
.now-price {
  color: var(--color-high-text);
}
.old-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}
.discount {
  font-size: 12px;
  background-color: var(--color-high-text);
  padding: 4px;
  color: #fff;
  border-radius: 7px;
  margin-top: 20%;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.other-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  padding-bottom: 4px;
  border-bottom: 2px solid #f6f6f6;
}

.services {
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
}

.services img {
  width: 12px;
}

.services div:last-child {
  display: none;
}

</style>