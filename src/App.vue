<template>
  <div id="app">
    <TakeHome/>
  </div>
</template>

<script>
import TakeHome from './components/TakeHome'
export default {
  name: 'App',
  components: { TakeHome },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

#app {
  background: url(assets/background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
