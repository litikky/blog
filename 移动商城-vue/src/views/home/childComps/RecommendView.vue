<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  margin: 5px 0 20px;
  text-align: center;
  font-size: 14px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 90%;
  margin-bottom: 5px;
}
</style>