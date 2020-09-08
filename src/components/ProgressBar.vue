<template>
  <div class="progress-bar">
    <div class="bar" :style="barStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: Number,
    maximum: Number
  },
  computed: {
    barStyle() {
      return {
        width: `${100 - (this.value / this.maximum) * 100}%`
      }
    }
  }
}
</script>

<style scoped>
.progress-bar {
  margin-top: 2em;
  width: 75%;
  height: 2px;
  background-color: #f05b56;
}

.bar {
  background-color: #ffffff;
  width: 10%;
  height: 2px;
}
</style>
