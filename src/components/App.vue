<template>
  <div id="app">
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  import TheFooter from '@/components/TheFooter'

  export default {
    name: 'App',
    components: {TheFooter}
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900");

  body {
    font-family: "PingFang SC", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    background-image: linear-gradient(-1deg, #404950 18%, #1D2527 58%, #0D181A 99%);
  }
</style>
