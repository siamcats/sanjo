<template>
  <div class="main">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Main2',
  data () {
    return {
      msg: 'ここはメイン２ですABCDabcd'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin: 100px;
  background-color: #fff;
}
</style>
