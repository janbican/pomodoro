<template>
  <div class="settings-modal">
    <modal name="modal" :adaptive="true" :max-width="400" :min-height="320">
      <div class="modal-container">
        <h3>Settings</h3>
        <hr />
        <div class="time-settings-container">
          <div class="time-settings">
            <label for="pomodoro">Pomodoro</label>
            <input
              type="number"
              id="pomodoro"
              name="pomodoro"
              v-model.number="pomodoroValue"
              min="1"
              max="99"
            />
          </div>
          <div class="time-settings">
            <label for="shortBreak">Short Break</label>
            <input
              type="number"
              id="shortBreak"
              name="shortBreak"
              v-model.number="shortBreakValue"
              min="1"
              max="99"
            />
          </div>
          <div class="time-settings">
            <label for="longBreak">Long Break</label>
            <input
              type="number"
              id="longBreak"
              name="longBreak"
              v-model.number="longBreakValue"
              min="1"
              max="99"
            />
          </div>
        </div>

        <div class="volume-container">
          <label for="volume">Volume</label>
          <input
            type="range"
            min="0"
            max="100"
            v-model.number="volumeValue"
            id="volume"
            class="volume-slider"
          />
        </div>

        <hr />

        <div class="button-container">
          <button class="btn" @click="save">Save</button>
          <button class="btn" @click="cancel">Cancel</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SettingsModal',
  created() {
    this.pomodoroValue = this.pomodoroMinutes
    this.shortBreakValue = this.shortBreakMinutes
    this.longBreakValue = this.longBreakMinutes
    this.volumeValue = this.volume * 100
  },
  methods: {
    save() {
      const settings = {
        pomodoroMinutes: this.pomodoroValue,
        shortBreakMinutes: this.shortBreakValue,
        longBreakMinutes: this.longBreakValue,
        volume: this.volumeValue / 100
      }
      this.$store.commit('applySettings', settings)
      this.$modal.hide('modal')
    },
    cancel() {
      this.$modal.hide('modal')
    }
  },
  computed: {
    ...mapGetters(['pomodoroMinutes', 'shortBreakMinutes', 'longBreakMinutes']),
    ...mapState(['volume'])
  }
}
</script>

<style scoped>
.modal-container {
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

hr {
  margin-bottom: 1em;
}

.time-settings-container {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
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

.btn {
  padding: 0.7em 1em;
  margin-right: 0.6em;
  min-width: 100px;
  background-color: #f05b56;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}
</style>
