<template>
  <div class="progress-bar">
    <div class="bar" :style="barStyle"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProgressBar',
  computed: {
    ...mapState(['seconds', 'selectedMode']),
    barStyle() {
      // percents of time already done
      return {
        width: `${100 -
          (this.seconds / (this.selectedMode.minutes * 60)) * 100}%`
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
