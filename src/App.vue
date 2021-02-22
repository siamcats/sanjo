<template>
  <div id="app">
    <Header/>
    <div id="wrapper">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Main2,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Average+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap');

#app {
  font-family: 'Average Sans', 'Noto Sans', sans-serif;
  /* font-family: "Helvetica Neue","Helvetica","Arial"; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  padding: 0px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}
#pallet {
  color: #2c3e50;
  color: #ffd916;
  color: #f9f1e6;
}
</style>
