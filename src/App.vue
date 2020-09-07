<template>
  <div class="app" :class="{ finished: finished }">
    <div class="container">
      <pomodoro-timer @changeColor="finished = !finished" />
    </div>
  </div>
</template>

<script>
import PomodoroTimer from '@/components/PomodoroTimer'

export default {
  name: 'App',
  components: {
    'pomodoro-timer': PomodoroTimer
  },
  data() {
    return {
      finished: false
    }
  }
}
</script>

<style>
@import 'assets/css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

html {
  box-sizing: border-box;
}

body {
  font-family: 'Kumbh Sans', sans-serif;
}

button:focus {
  outline: 0;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f05b56;
}

.container {
  width: 100%;
  padding: 1em;
}

.finished {
  background-color: #0fa4a9;
}

@media (min-width: 599px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 500px;
  }
}
</style>
