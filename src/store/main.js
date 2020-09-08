import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const pomodoro = { text: 'Pomodoro', value: 10 }
const shortBreak = { text: 'Short Break', value: 3 }
const longBreak = { text: 'Long Break', value: 5 }

export const store = new Vuex.Store({
  state: {
    modes: [pomodoro, shortBreak, longBreak],
    selectedMode: pomodoro,
    seconds: pomodoro.value,
    volume: 0.5
  },
  getters: {
    isFinished(state) {
      return state.seconds === 0
    },
    pomodoroValue() {
      return pomodoro.value
    },
    shortBreakValue() {
      return shortBreak.value
    },
    longBreakValue() {
      return longBreak.value
    }
  },
  mutations: {
    decrementSeconds(state) {
      state.seconds -= 1
    },
    setMode(state, option) {
      state.selectedMode = option
      state.seconds = option.value
    },
    applySettingsChange(state, payload) {
      pomodoro.value = payload.pomodoro
      shortBreak.value = payload.shortBreak
      longBreak.value = payload.longBreak
      state.volume = payload.volume

      state.seconds = state.selectedMode.value
    }
  },
  actions: {}
})
