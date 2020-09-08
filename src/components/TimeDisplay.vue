<template>
  <div class="time-display">
    <span>{{ secondsInString }}</span>
  </div>
</template>

<script>
export default {
  name: 'TimeDisplay',
  computed: {
    seconds() {
      return this.$store.state.seconds
    },
    secondsInString() {
      const seconds = this.seconds % 60
      const minutes = Math.floor(this.seconds / 60)
      return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
    }
  }
}
</script>

<style scoped>
.time-display {
  margin: 0.5em 0 1.4em;
}

span {
  font-family: Monaco, sans-serif;
  font-size: 7em;
  font-weight: 400;
  color: #ffffff;
}
</style>
