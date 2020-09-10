import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// time modes
const pomodoro = { text: 'Pomodoro', minutes: 25 }
const shortBreak = { text: 'Short Break', minutes: 5 }
const longBreak = { text: 'Long Break', minutes: 10 }

export const store = new Vuex.Store({
  state: {
    modes: [pomodoro, shortBreak, longBreak],
    selectedMode: pomodoro,
    seconds: pomodoro.minutes * 60, // seconds remaining
    volume: 0.5,
    isRunning: false
  },
  getters: {
    isFinished(state) {
      return state.seconds === 0
    },
    pomodoroMinutes() {
      return pomodoro.minutes
    },
    shortBreakMinutes() {
      return shortBreak.minutes
    },
    longBreakMinutes() {
      return longBreak.minutes
    }
  },
  mutations: {
    decrementSeconds(state) {
      state.seconds -= 1
    },
    setMode(state, option) {
      state.selectedMode = option
      state.seconds = option.minutes * 60
    },
    setIsRunning(state, value) {
      state.isRunning = value
    },
    applySettings(state, payload) {
      pomodoro.minutes = payload.pomodoroMinutes
      shortBreak.minutes = payload.shortBreakMinutes
      longBreak.minutes = payload.longBreakMinutes
      state.volume = payload.volume

      if (!state.isRunning) {
        state.seconds = state.selectedMode.minutes * 60
      }
    }
  }
})
