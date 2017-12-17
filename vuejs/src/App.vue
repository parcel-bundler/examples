<template>
  <div id="app">
    <h1>Hello {{ title }} 🚀</h1>
    <p>📦 Parcel Vue.js Example</p>
  </div>
</template>

<script>
  export default {
    name: "app",
    data () {
      return {
        title: 'Vue.js'
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    color: #333333;
    margin-top: 60px;
  }
  
  h1 {
    font-weight: lighter;
    color: #42b983;
  }
</style>