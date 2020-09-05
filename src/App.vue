<template>
  <div id="app">
    <div class="container">
      <pomodoro-timer />
    </div>
  </div>
</template>

<script>
import PomodoroTimer from '@/components/PomodoroTimer'

export default {
  name: 'App',
  components: {
    'pomodoro-timer': PomodoroTimer
  }
}
</script>

<style>
@import 'assets/css/normalize.css';

html {
  box-sizing: border-box;
}

body {
  background-color: #f05b56;
}

button:focus {
  outline:0;
}

#app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  padding: 1em;
}

@media (min-width: 599px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 400px;
  }
}
</style>