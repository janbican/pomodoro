<template>
  <div>
    <div v-for="option in options" :key="option.value">
      <input id="option.value"
             value="option.value"
             type="radio"
             class="radio-btn"
      />
      <label for="option.value" @click="selected = option.value">{{ option.text }}</label>
    </div>

    <!-- <button v-for="option in options" :key="option.value">
      {{ option.text }}
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'TimeModeChoice',
  data() {
    return {
      selected: 'pomodoro',
      options: [
        { text: 'Pomodoro', value: 'pomodoro' },
        { text: 'Short Break', value: 'short-break' },
        { text: 'Long Break', value: 'long-break' }
      ]
    }
  },
  methods: {
    select(value) {
      this.selected = value
    }
  }
}
</script>

<style scoped>
.radio-btn {
  position: absolute;
  left: -9999em;
  top: -9999em;
}

.radio-btn + label {
  float: left;
  padding: .5em .8em;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
}
  
.radio-btn:checked + label {
  background-color: #c44d48;
}
</style>