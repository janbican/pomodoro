<template>
  <div id="pomodoro-timer">
    <time-mode-choice :options="modes" :selected="currentMode" @change="modeChange"/>
    <div class="mode">
      {{ currentMode.text }}
    </div>
  </div>
</template>

<script>
import GroupChoice from '@/components/GroupChoice'

export default {
  name: 'PomodoroTimer',
  components: {
    'time-mode-choice': GroupChoice
  },
  data() {
    return {
      modes: [
        { text: 'Pomodoro', value: 'pomodoro' },
        { text: 'Short Break', value: 'short-break' },
        { text: 'Long Break', value: 'long-break' }
      ],
      currentMode: null
    }
  },
  created() {
    this.currentMode = this.modes[0]
  },
  methods: {
    modeChange(option) {
      this.currentMode = option
    }
  }
}
</script>

<style scoped>
#pomodoro-timer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  border: 1px solid white;
}

.mode {
  margin-top: 2em;
  color: white;
  font-size: 2em;
}
</style>