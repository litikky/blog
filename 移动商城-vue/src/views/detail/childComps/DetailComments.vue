<template>
  <div class="comments" v-if="Object.keys(comments).length !== 0">
    <div class="top-bar">
      <h3>用户评价</h3>
      <span>更多({{ comments.cRate }})</span>
    </div>
    <div class="first-comment" v-if="Object.keys(comments.list[0]).length !== 0">
      <div class="user">
        <img :src="comments.list[0].user.avatar" alt="" />
        <span>{{ comments.list[0].user.uname }}</span>
      </div>
      <div class="content">
        <p>{{ comments.list[0].content }}</p>
        <span class="date">{{comments.list[0].created*1000 | showDate}}</span>
        <span> {{ comments.list[0].style }}</span>
        <div class="images" v-if="comments.list[0].images">
          <img
            :src="img"
            alt=""
            v-for="(img, index) in comments.list[0].images"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-else>暂无评论</div>
  </div>
</template>

<script>
export default {
  name: "DetailComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value)
      return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
      
    }
  }
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px;
  border-bottom: 2px solid #f6f6f6;
}

.user {
  margin: 5px 0;
}

.user img {
  width: 40px;
  border-radius: 20px;
  vertical-align: middle;
}

.user span {
  font-size: 16px;
}

.content p {
  font-size: 14px;
}
.content span {
  font-size: 12px;
}

.images {
  margin-top: 5px;
}

.images img {
  display: inline-block;
  margin-right: 5px;
  width: 80px;
  height: 80px;
}
</style>