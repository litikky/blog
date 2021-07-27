<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
    <div class="info">
      <h3>【商品参数】</h3>
      <table border="1">
        <tr v-for="(item, index) in itemParams.info.set" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
    <div class="rule">
      <h3>【尺码说明】</h3>
      <table border="1">
        <tr v-for="(array, index) in itemParams.rule.tables[0]" :key="index">
          <td v-for="(item, index2) in array" :key="index2">{{ item }}</td>
        </tr>
      </table>
      <p>{{ itemParams.rule.disclaimer }}</p>
    </div>
    <div v-if="itemParams.info.images" class="info-img">
      <img :src="itemParams.info.images[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 10px;
  font-size: 18px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border-color: transparent;
}

.param-info {
  padding: 5px;
}

.info table {
  font-size: 14px;
  margin: 0 10px;
}

.info table tr {
  border-bottom: 2px solid #f6f6f6;
}

.info table tr td {
  color: var(--color-tint);
  padding: 5px;
}

.info table tr td:first-child {
  width: 50px;
  color: var(--color-text);
}

.rule {
  margin: 10px;
}
.rule table {
  font-size: 14px;
  width: 100%;
}

.rule table tr {
  border-bottom: 2px solid #f6f6f6;
}

.rule table tr td {
  padding: 5px;
}

.rule p {
  font-size: 14px;
  padding: 5px;
}
</style>