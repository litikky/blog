<template>
  <div id="tab-control">
    <ul>
      <li class="tab-control-item" v-for="(title, index) in titles" :key="index" :class="{active: currentIndex === index}" @click="tabClick(index)">
        <span>{{title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
#tab-control ul {
  display: flex;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 3px 2px;
}

.active span {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-tint);

}
</style>