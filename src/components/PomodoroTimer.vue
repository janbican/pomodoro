<template>
  <div class="pomodoro-timer" :style="backgroundStyle">
    <mode-choice @change="modeChange" />

    <progress-bar />

    <time-display />

    <div class="button-group">
      <button v-if="isFinished" class="btn reset-btn" @click="reset">
        Reset
      </button>
      <button v-else-if="!isRunning" class="btn" @click="start">
        Start
      </button>
      <button v-else class="btn" @click="stop">
        Stop
      </button>
    </div>
  </div>
</template>

<script>
import ModeChoice from '@/components/ModeChoice'
import ProgressBar from '@/components/ProgressBar'
import TimeDisplay from '@/components/TimeDisplay'
import { mapState } from 'vuex'

export default {
  name: 'PomodoroTimer',
  components: {
    'mode-choice': ModeChoice,
    'progress-bar': ProgressBar,
    'time-display': TimeDisplay
  },
  data() {
    return {
      isRunning: false,
      timer: null
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.$store.commit('decrementSeconds')
        if (this.seconds === 0) {
          this.finish()
        }
      }, 1000)
      this.isRunning = true
    },
    stop() {
      clearInterval(this.timer)
      this.isRunning = false
    },
    reset() {
      this.$store.commit('setMode', this.selectedMode)
    },
    finish() {
      this.stop()
      this.playSound()
    },
    playSound() {
      const audio = new Audio(
        'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
      )
      audio.volume = this.volume
      audio.play()
    },
    modeChange(mode) {
      this.stop()
      this.$store.commit('setMode', mode)
      this.start()
    }
  },
  computed: {
    ...mapState(['seconds', 'selectedMode', 'volume']),
    isFinished() {
      return this.$store.getters.isFinished
    },
    backgroundStyle() {
      return {
        backgroundColor: this.isFinished ? '#3eb6ba' : '#ff6e67'
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
  padding: 2.5em 2em;
  border-radius: 5px;
}

.button-group {
  width: 100%;
  text-align: center;
}

.btn {
  width: 60%;
  padding: 0.6em;
  background-color: #ffffff;
  color: #ff6e67;
  border: none;
  font-size: 1.4em;
  border-radius: 5px;
  cursor: pointer;
}

.reset-btn {
  color: #3eb6ba;
}

.btn:hover {
  opacity: 0.9;
}
</style>
