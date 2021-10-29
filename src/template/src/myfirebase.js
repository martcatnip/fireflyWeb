import firebase from "firebase/app";

var config = {
  apiKey: "AIzaSyAOAWI9hwYM3UvcPaK8DQOLt6LH40UYWCc",
  authDomain: "firefly-test-cb79c.firebaseapp.com",
  databaseURL: "https://firefly-test-cb79c-default-rtdb.firebaseio.com",
  projectId: "firefly-test-cb79c",
  storageBucket: "firefly-test-cb79c.appspot.com",
  messagingSenderId: "36305991998",
  appId: "1:36305991998:web:2f82af856cf49b872a946f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
