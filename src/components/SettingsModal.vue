<template>
  <div class="settings-modal">
    <modal name="modal" :adaptive="true" :max-width="500" title="Settings">
      <div class="modal-content">
        <h3>Settings</h3>
        <hr />
        <div class="time-settings">
          <div>
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
          <div>
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
          <div>
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

        <div class="slidecontainer">
          <label for="volume">Volume</label>
          <input
            type="range"
            min="1"
            max="100"
            v-model.number="volume"
            id="volume"
          />
        </div>
        <button @click="save">Save</button>
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
}

h3 {
  font-weight: 400;
  font-size: 1.2em;
  margin: 0.5em 0;
}
</style>
