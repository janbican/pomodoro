<template>
  <div class="progress-bar">
    <div class="bar" :style="barStyle"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProgressBar',
  computed: {
    ...mapGetters(['doneInPercents']),
    barStyle() {
      return {
        width: `${this.doneInPercents}%`
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
