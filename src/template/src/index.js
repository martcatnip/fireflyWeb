import React from "react";
import ReactDOM from "react-dom";

import db from "./mydb";
import "./styles.css";

var docRef = db.collection("test").doc("citi");
docRef
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      console.log("Name: " + doc.data().name);
    } else {
      console.log("No such document!");
    }
  })
  .catch(function(error) {
    console.log("Error getting document:", error);
  });

db.collection("test")
  .get()
  .then(function(qry) {
    qry.forEach(function(doc) {
      console.log(doc.data());
    });
  });

var cRef = db.collection("test");
cRef
  .orderBy("name")
  .get()
  .then(function(qry) {
    qry.forEach(function(d) {
      console.log("Sorted: " + JSON.stringify(d.data()));
    });
  });

function App() {
  return (
    <div className="App">
      <h1>Firefly Test</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
