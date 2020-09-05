<template>
  <div>
    <button v-for="option in options"
            :key="option.value"
            :class="{ checked: option.value === selected }"
            @click="selected = option.value">
      {{ option.text }}
    </button>
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
  }
}
</script>

<style scoped>
button {
  border: none;
  background: none;
  border-radius: 5px;
  padding: .5em .8em;
  cursor: pointer;
  color: #fff;
}
  
.checked {
  background-color: #c44d48;
}
</style>