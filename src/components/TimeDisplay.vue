<template>
  <div class="time-display">
    <span>{{ secondsStringFormat }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TimeDisplay',
  computed: {
    ...mapGetters(['secondsStringFormat'])
  }
}
</script>

<style scoped>
.time-display {
  margin: 1em 0;
}

span {
  font-family: Monaco, sans-serif;
  font-size: 5em;
  font-weight: 400;
  color: #ffffff;
}

@media (min-width: 599px) {
  .time-display {
    margin-bottom: 1.4em;
  }

  span {
    font-size: 7.4em;
  }
}
</style>
