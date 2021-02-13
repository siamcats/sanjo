<template>
  <div class="header">
    <h1>SANJO</h1>
    <ul>
      <li><router-link to="/Main1">Main1</router-link></li>
      <li><router-link to="/Main2">Main2</router-link></li>
      <li v-show="user">{{ user.displayName }}</li>
      <li><button type="button" @click="doLogin">Signin with Twitter</button></li>
      <li><button type="button" @click="doLogout">Singout</button></li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  top: 0;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #ffd916;
  display: flex;
  align-items: center;
}
h1, h2 {
  color: #2c3e50;
  font-weight: bold;
}
ul {
   list-style: none;
   margin: 0;
   display: flex;
}
</style>
