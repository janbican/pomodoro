<template>
  <div class="choice-container">
    <button
      v-for="mode in modes"
      :key="mode.text"
      :class="{ selected: mode === selectedMode }"
      class="choice-btn"
      @click="click(mode)"
    >
      {{ mode.text }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModeChoice',
  methods: {
    click(mode) {
      this.$emit('change', mode)
    }
  },
  computed: mapState(['modes', 'selectedMode'])
}
</script>

<style scoped>
.choice-container {
  display: flex;
}

.choice-btn {
  border: 1px solid transparent;
  background: none;
  border-radius: 5px;
  padding: 0.6em 0.4em 0.45em;
  cursor: pointer;
  color: #fff;
  width: 85px;
  font-size: 0.8em;
}

.selected {
  border: 1px dashed #ffffff;
}

@media (min-width: 599px) {
  .choice-btn {
    width: 120px;
    font-size: 1em;
    padding: 0.6em 0.8em 0.45em;
  }
}
</style>
