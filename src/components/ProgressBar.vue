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
  position: absolute;
  top: 0;
  width: 100%;
  height: 2px;
}

.bar {
  background-color: #ffffff;
  height: 2px;
  border-radius: 5px;
}
</style>
