import myfirebase from "./myfirebase";
import "firebase/auth";

function doAuth(email, password) {
  console.log(`Uwierzytelniam ${email} hasłem *****`);
  return myfirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Podczas uwierzytelnienia wystąpił błąd: ${error.message}`);
    });
}

myfirebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(`Poprawnie uwierzytelniłem: ${email} (UID: ${uid})`);
  } else {
    console.log(`Poprawnie wylogowałem: ${email} (UID: ${uid})`);
  }

  notifyObservers();
});

function getAuthenticatedUser() {
  return myfirebase.auth().currentUser;
}

var _observers = [];

function authAddObserver(f) {
  _observers.push(f);
}

function notifyObservers() {
  _observers.map(o => {
    console.log(o);
    o();
  });
}

function doLogout() {
  console.log("Wylogowuję: " + getAuthenticatedUser().email);
  myfirebase
    .auth()
    .signOut()
    .then(notifyObservers())
    .catch(err => {
      console.log(err);
    });
}

module.exports = { doAuth, getAuthenticatedUser, doLogout, authAddObserver };
