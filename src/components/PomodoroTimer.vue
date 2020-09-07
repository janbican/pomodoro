<template>
  <div class="pomodoro-timer" :style="timerStyle" >
    <time-mode-choice :options="modes" :selected="currentMode" @change="modeChange"/>
    <time-display :seconds="seconds" />
    
    <div class="button-group">
      <button v-if="isFinished" class="btn" @click="reset">Reset</button>
      <button v-else-if="!isRunning" class="btn" @click="start">Start</button>
      <button v-else class="btn" @click="stop">Stop</button>
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
        { text: 'Pomodoro', value: 10 },
        { text: 'Short Break', value: 3 },
        { text: 'Long Break', value: 5 }
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
    start() {
      this.timer = setInterval(() => {
        this.seconds -= 1
        if (this.seconds === 0) {
          this.stop()
          this.playSound()
        }
      }, 1000)
      this.isRunning = true
    },
    stop() {
      clearInterval(this.timer)
      this.isRunning = false
    },
    reset() {
      this.seconds = this.currentMode.value
    },
    playSound() {
      const audio = new Audio('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')
      audio.play()
    },
    modeChange(option) {
      this.stop()
      this.seconds = option.value
      this.currentMode = option
      this.start()
    }
  },
  computed: {
    isFinished() {
      return this.seconds === 0
    },
    timerStyle() {
      return {
        backgroundColor: this.isFinished ? '#0fa4a9' : '#ff6e67'
      }
    }
  }
}
</script>

<style scoped>
.pomodoro-timer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  border-radius: 5px;
  /* background-color: #ff6e67; */
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
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}
</style>