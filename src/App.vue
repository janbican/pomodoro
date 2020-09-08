<template>
  <div class="app" :class="{ finished: isFinished }">
    <button class="settings-btn" @click="showSettings">Settings</button>
    <settings-modal />

    <div class="container">
      <pomodoro-timer />
    </div>
  </div>
</template>

<script>
import SettingsModal from '@/components/SettingsModal'
import PomodoroTimer from '@/components/PomodoroTimer'

export default {
  name: 'App',
  components: {
    'settings-modal': SettingsModal,
    'pomodoro-timer': PomodoroTimer
  },
  methods: {
    showSettings() {
      this.$modal.show('modal')
    }
  },
  computed: {
    isFinished() {
      return this.$store.getters.isFinished
    }
  }
}
</script>

<style>
@import 'assets/css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

html {
  box-sizing: border-box;
}

body {
  font-family: 'Kumbh Sans', sans-serif;
}

button:focus {
  outline: 0;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f05b56;
}

.container {
  width: 100%;
  padding: 1em;
}

.finished {
  background-color: #0fa4a9;
}

.settings-btn {
  position: absolute;
  top: 1em;
  right: 1em;
}

@media (min-width: 599px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 500px;
  }
}
</style>
