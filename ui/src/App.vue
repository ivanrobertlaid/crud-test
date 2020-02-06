<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #E4E5E6;
}
</style>

<style lang="scss">
  @import '@/assets/scss/custom';
</style>
