<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link :to='"bannan"'>to bannan</router-link>
    <router-link :to='"apple"'>to apple</router-link>
    <router-link :to='"/apple/red"'>to apple</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
