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
        { text: 'Pomodoro', value: 1500 },
        { text: 'Short Break', value: 300 },
        { text: 'Long Break', value: 600 }
      ],
      currentMode: null,
      isRunning: false,
      seconds: 61,
      timer: null
    }
  },
  created() {
    this.currentMode = this.modes[0]
    this.seconds = this.currentMode.value
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
      this.stopCountDown()
      this.seconds = option.value
      this.currentMode = option
      this.startCountDown()
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