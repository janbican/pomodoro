<template>
  <div class="pomodoro-timer" :style="backgroundStyle">
    <progress-bar />

    <mode-choice @change="modeChange" />

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
import { mapMutations, mapState, mapGetters } from 'vuex'
import { notify } from '@/notifications.js'

export default {
  name: 'PomodoroTimer',
  components: {
    'mode-choice': ModeChoice,
    'progress-bar': ProgressBar,
    'time-display': TimeDisplay
  },
  data() {
    return {
      timer: null,
      audio: new Audio(
        'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
      )
    }
  },
  created() {
    this.audio.volume = 0
    this.audio.play()
  },
  methods: {
    ...mapMutations(['decrementSeconds', 'setIsRunning', 'setMode']),
    start() {
      this.timer = setInterval(() => {
        this.decrementSeconds()
        if (this.isFinished) this.finished()
      }, 1000)
      this.setIsRunning(true)
    },
    finished() {
      this.stop()
      this.playSound()
      notify('done')
    },
    stop() {
      clearInterval(this.timer)
      this.setIsRunning(false)
    },
    playSound() {
      this.audio.volume = this.volume
      this.audio.play()
    },
    reset() {
      this.setMode(this.selectedMode)
    },
    modeChange(mode) {
      this.stop()
      this.setMode(mode)
      this.start()
    }
  },
  computed: {
    ...mapState(['seconds', 'selectedMode', 'volume', 'isRunning']),
    ...mapGetters(['isFinished', 'secondsStringFormat']),
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
  position: relative;
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
  width: 46%;
  padding: 0.5em 0 0.4em;
  background-color: #ffffff;
  color: #ff6e67;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reset-btn {
  color: #3eb6ba;
}

.btn:hover {
  opacity: 0.9;
}

@media (min-width: 599px) {
  .btn {
    width: 60%;
    font-size: 1.4em;
    padding: 0.6em;
  }
}
</style>
