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
    seconds: pomodoro.value
  },
  getters: {
    isFinished(state) {
      return state.seconds === 0
    },
    pomodoroValue() {
      return pomodoro.value
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
    setPomodoroValue(state, value) {
      pomodoro.value = value
    }
  },
  actions: {}
})
