<template>
  <div class="settings-modal">
    <modal name="modal" :adaptive="true" :max-width="400" title="Settings">
      <div class="modal-content">
        <h3>Settings</h3>
        <hr />
        <div class="time-settings-container">
          <div class="time-settings">
            <label for="pomodoro">Pomodoro:</label>
            <input
              type="number"
              id="pomodoro"
              name="pomodoro"
              v-model.number="pomodoro"
              min="1"
              max="99"
            />
          </div>
          <div class="time-settings">
            <label for="shortBreak">Short Break:</label>
            <input
              type="number"
              id="shortBreak"
              name="shortBreak"
              v-model.number="shortBreak"
              min="1"
              max="99"
            />
          </div>
          <div class="time-settings">
            <label for="longBreak">Long Break:</label>
            <input
              type="number"
              id="longBreak"
              name="longBreak"
              v-model.number="longBreak"
              min="1"
              max="99"
            />
          </div>
        </div>

        <div class="volume-container">
          <label for="volume">Volume</label>
          <input
            type="range"
            min="1"
            max="100"
            v-model.number="volume"
            id="volume"
            class="volume-slider"
          />
        </div>

        <hr />

        <div class="button-container">
          <button @click="save">Save</button>
          <button @click="cancel">Cancel</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'SettingsModal',
  data() {
    return {
      pomodoro: null,
      shortBreak: null,
      longBreak: null
    }
  },
  created() {
    this.pomodoro = this.pomodoroValue
    this.shortBreak = this.shortBreakValue
    this.longBreak = this.longBreakValue
    this.volume = this.volumeValue * 100
  },
  methods: {
    save() {
      const settings = {
        pomodoro: this.pomodoro,
        shortBreak: this.shortBreak,
        longBreak: this.longBreak,
        volume: this.volume / 100
      }
      this.$store.commit('applySettingsChange', settings)
      this.$modal.hide('modal')
    },
    cancel() {
      this.$modal.hide('modal')
    }
  },
  computed: {
    pomodoroValue() {
      return this.$store.getters.pomodoroValue
    },
    shortBreakValue() {
      return this.$store.getters.shortBreakValue
    },
    longBreakValue() {
      return this.$store.getters.longBreakValue
    },
    volumeValue() {
      return this.$store.state.volume
    }
  }
}
</script>

<style scoped>
.modal-content {
  padding: 1em;
  width: 93%;
}

h3 {
  font-weight: 400;
  font-size: 1.2em;
  margin: 0.5em 0;
}

label {
  margin-bottom: 0.5em;
}

button {
  padding: 0.7em 1em;
  margin-right: 0.6em;
  min-width: 100px;
  background-color: #f05b56;
  color: #ffffff;
  border: none;
  border-radius: 5px;
}

.time-settings-container {
  display: flex;
  justify-content: center;
  text-align: center;
}

.time-settings {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding-right: 1em;
}

.time-settings input {
  padding: 0.6em;
  width: 80%;
  background-color: #eeeeee;
  border: none;
  border-radius: 5px;
}

.time-settings input:focus {
  outline: none;
}

.volume-container {
  margin: 1.2em 0 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.volume-slider {
  -webkit-appearance: none;
  width: 70%;
  height: 10px;
  background: #dddddd;
  outline: none;
  border-radius: 5px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f05b56;
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #f05b56;
  cursor: pointer;
}

.button-container {
  text-align: right;
}

hr {
  margin-bottom: 1em;
}
</style>
