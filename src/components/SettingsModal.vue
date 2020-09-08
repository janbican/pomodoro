<template>
  <div class="settings-modal">
    <modal name="modal" :adaptive="true" :max-width="500" title="Settings">
      <div class="modal-content">
        <h3>Settings</h3>
        <hr />
        <label for="pomodoro">Pomodoro:</label>
        <input
          type="number"
          id="pomodoro"
          name="pomodoro"
          v-model="pomodoro"
          min="1"
          max="99"
        />
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
      pomodoro: null
    }
  },
  created() {
    this.pomodoro = this.pomodoroValue
  },
  methods: {
    save() {
      this.$store.commit('setPomodoroValue', this.pomodoro)
    }
  },
  computed: {
    pomodoroValue() {
      return this.$store.getters.pomodoroValue
    }
  }
}
</script>

<style scoped>
.modal-content {
  padding: 1em;
}
</style>
