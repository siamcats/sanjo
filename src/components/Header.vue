<template>
  <div id="header">
    <div id="logo">
      <div>
        <div id="logo1"><p>NATIONAL</p></div>
        <div id="logo2"><p>GEO JIG PUZZLE</p></div>
      </div>
    </div>
    <ul>
      <!-- <li><router-link to="/">Main</router-link></li>
      <li><router-link to="/Main2">Main2</router-link></li> -->
      <!-- <li v-show="user">{{ user.displayName }}</li>
      <li><button type="button" @click="doLogin">Signin with Twitter</button></li>
      <li><button type="button" @click="doLogout" v-show="user">Singout</button></li> -->
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Header',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    // ログイン処理
    doLogin () {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        }
      })
    },
    // ログアウト処理
    doLogout () {
      firebase.auth().signOut()
    }
  }
}
</script>

<style scoped>
#header {
  top: 0;
  width: 100%;
  height: 80px;
  /* background-color: #ffd916; */
  display: flex;
  align-items: center;
}
#logo{
  display: flex;
  align-items: left;
  text-align: left;
  line-height: 0.2em;
  font-size: 1.2em;
}
#logo::before{
  content: url( 'data:image/svg+xml;utf-8,<svg fill="%23ffd916" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 73.8"><title>folder</title><g><g><path d="M90,12H40L28,0H10A10,10,0,0,0,0,10V63.8a10,10,0,0,0,10,10H90a10,10,0,0,0,10-10V22A10,10,0,0,0,90,12Z"/></g></g></svg>' );
  display: block;
  margin: 0.5em;
  width: 60px;
}
#logo1{
  font-weight: bold;
}
#logo2{
  font-weight: normal;
}
ul {
  list-style: none;
  margin: 0;
  display: flex;
}
</style>
