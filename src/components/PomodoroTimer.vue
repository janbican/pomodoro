<template>
  <div id="pomodoro-timer">
    <time-mode-choice :options="modes" :selected="currentMode" @change="modeChange"/>
    <time-display :seconds="seconds" />
    
    <div class="button-group">
      <button v-if="!isRunning" class="btn" @click="startCountDown">Start</button>
      <button v-else class="btn" @click="stopCountDown">Stop</button>
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
      this.isRunning = true
    },
    stopCountDown() {
      clearInterval(this.timer)
      this.isRunning = false
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
  padding: 2em;
  background-color: #ff6e67;
}

.mode {
  margin-top: 2em;
  color: white;
  font-size: 2em;
}

.button-group {
  width: 100%;
  text-align: center;
}

.btn {
  width: 60%;
  padding: .6em;
  background-color: #ffffff;
  color: #ff6e67;
  border: none;
  font-size: 1.4em;
  border-radius: 2px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}
</style>