// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDcHF-WfGN5RHloz5RqsihtWrdxXWoUYDk',
  authDomain: 'sanjo-ca95d.firebaseapp.com',
  databaseURL: 'https://sanjo-ca95d-default-rtdb.firebaseio.com',
  projectId: 'sanjo-ca95d',
  storageBucket: 'sanjo-ca95d.appspot.com',
  messagingSenderId: '717318369410',
  appId: '1:717318369410:web:8a21af9ce7bb97eaadc49b',
  measurementId: 'G-E7VCQF7HD4'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
