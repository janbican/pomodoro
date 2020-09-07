<template>
  <div>
    <button v-for="option in options"
            :key="option.value"
            :class="{ selected: option === selected }"
            @click="click(option)">
      {{ option.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'GroupChoice',
  props: {
    options: Array,
    selected: Object
  },
  methods: {
    click(option) {
      this.$emit('change', option)
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid transparent;
  background: none;
  border-radius: 5px;
  padding: .6em .8em .45em;
  cursor: pointer;
  color: #fff;
}
  
.selected {
  border: 1px dashed #ffffff;
}
</style>