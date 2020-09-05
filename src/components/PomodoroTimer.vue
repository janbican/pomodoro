<template>
  <div id="pomodoro-timer">
    <time-mode-choice @change="modeChange"/>
  </div>
</template>

<script>
import TimeModeChoice from '@/components/TimeModeChoice'

export default {
  name: 'PomodoroTimer',
  components: {
    'time-mode-choice': TimeModeChoice
  },
  methods: {
    modeChange() {}
  }
}
</script>

<style scoped>

</style>