import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCPd542A-RWp-FRoxbjCctSegKzrlP4Kio",
    authDomain: "noteherder-59c0e.firebaseapp.com",
    databaseURL: "https://noteherder-59c0e.firebaseio.com",
    projectId: "noteherder-59c0e",
    storageBucket: "noteherder-59c0e.appspot.com",
    messagingSenderId: "47436753242"
  }
)

const db = database(app)

export default Rebase.createClas(db)

