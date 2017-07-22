<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVFe6Pp1tNy4C3D8VSE3hykoN16nbqWqU",
    authDomain: "fone-screener.firebaseapp.com",
    databaseURL: "https://fone-screener.firebaseio.com",
    projectId: "fone-screener",
    storageBucket: "fone-screener.appspot.com",
    messagingSenderId: "1061248224892"
  };
  firebase.initializeApp(config);
let app = Firebase.initializeApp(config)
let db = app.database()

export default {
  name: 'app'
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
