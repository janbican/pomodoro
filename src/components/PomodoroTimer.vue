<template>
  <div id="pomodoro-timer">
    <time-mode-choice :options="modes" :selected="currentMode" @change="modeChange"/>
    <time-display :seconds="seconds" />
    
    <div class="button-group">
      <button @click="startCountDown">Start</button>
      <button @click="stopCountDown">Stop</button>
    </div>
  </div>
</template>

<script>
import GroupChoice from '@/components/GroupChoice'
import TimeDisplay from '@/components/TimeDisplay'

export default {
  name: 'PomodoroTimer',
  components: {
    'time-mode-choice': GroupChoice,
    'time-display': TimeDisplay
  },
  data() {
    return {
      modes: [
        { text: 'Pomodoro', value: 'pomodoro' },
        { text: 'Short Break', value: 'short-break' },
        { text: 'Long Break', value: 'long-break' }
      ],
      currentMode: null,
      isRunning: false,
      seconds: 61,
      timer: null
    }
  },
  created() {
    this.currentMode = this.modes[0]
  },
  methods: {
    startCountDown() {
      this.timer = setInterval(() => {
      this.seconds -= 1
      }, 1000)
    },
    stopCountDown() {
      clearInterval(this.timer)
    },
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