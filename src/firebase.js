import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyDVFe6Pp1tNy4C3D8VSE3hykoN16nbqWqU",
    authDomain: "fone-screener.firebaseapp.com",
    databaseURL: "https://fone-screener.firebaseio.com",
    projectId: "fone-screener",
    storageBucket: "fone-screener.appspot.com",
    messagingSenderId: "1061248224892"
  }

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()