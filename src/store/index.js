import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    modes: [
      { text: 'Pomodoro', minutes: 25 },
      { text: 'Short Break', minutes: 5 },
      { text: 'Long Break', minutes: 10 }
    ],
    selectedMode: null,
    seconds: 0, // seconds remaining
    volume: 0.5,
    isRunning: false
  },
  plugins: [
    createPersistedState({
      paths: ['modes', 'volume']
    })
  ],
  getters: {
    isFinished(state) {
      return state.seconds === 0
    },
    secondsStringFormat(state) {
      const seconds = state.seconds % 60
      const minutes = Math.floor(state.seconds / 60)
      return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    },
    pomodoroMinutes(state) {
      return state.modes[0].minutes
    },
    shortBreakMinutes(state) {
      return state.modes[1].minutes
    },
    longBreakMinutes(state) {
      return state.modes[2].minutes
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
      state.modes[0].minutes = payload.pomodoroMinutes
      state.modes[1].minutes = payload.shortBreakMinutes
      state.modes[2].minutes = payload.longBreakMinutes
      state.volume = payload.volume

      if (!state.isRunning) {
        state.seconds = state.selectedMode.minutes * 60
      }
    }
  }
})

store.state.selectedMode = store.state.modes[0]
store.state.seconds = store.state.selectedMode.minutes * 60
