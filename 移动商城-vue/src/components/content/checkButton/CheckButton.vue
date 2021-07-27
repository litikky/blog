<template>
  <div class="check-button">
    <img
      src="~assets/img/cart/tick.svg"
      alt=""
      :class="{ checked: isChecked }"
    />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
}
.check-button img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid pink;
}
.checked {
  background-color: pink;
}
</style>