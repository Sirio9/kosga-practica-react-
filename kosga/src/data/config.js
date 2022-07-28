import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPHtNpnQ8N0TvMVmCqIDdJN1ft8XC9l7w",
  authDomain: "edteam-react-cero.firebaseapp.com",
  databaseURL: "https://edteam-react-cero.firebaseio.com",
  projectId: "edteam-react-cero",
  storageBucket: "edteam-react-cero.appspot.com",
  messagingSenderId: "162887274551"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth