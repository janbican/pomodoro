<template>
  <div class="app full-screen-div" :class="{ finished: isFinished }">
    <vue-headful :title="title" />

    <a class="settings-icon" @click="showSettings">
      <font-awesome-icon icon="sliders-h" />
    </a>
    <settings-modal />

    <div class="container">
      <pomodoro-timer />
    </div>
  </div>
</template>

<script>
import SettingsModal from '@/components/SettingsModal'
import PomodoroTimer from '@/components/PomodoroTimer'
import { mapGetters, mapState } from 'vuex'

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
    ...mapGetters(['isFinished', 'secondsStringFormat']),
    ...mapState(['isRunning', 'isTimeShownInTitle']),
    title() {
      return this.isRunning && this.isTimeShownInTitle
        ? this.secondsStringFormat
        : 'Pomodoro'
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

body,
html {
  font-family: 'Kumbh Sans', sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
}

button:focus {
  outline: 0;
}

.full-screen-div {
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f05b56;
}

.container {
  width: 100%;
}

.finished {
  background-color: #0fa4a9;
}

.settings-icon {
  font-size: 1.5em;
  color: #ffffff;
  cursor: pointer;
  margin: 0.5em 0;
  text-align: right;
  display: block;
  width: 100%;
  margin-right: 1em;
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

@media (min-height: 400px) {
  .settings-icon {
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: 2em;
    margin: 0;
  }
}
</style>
