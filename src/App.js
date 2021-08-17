import logo from './logo.svg';
import './App.css';
import { Redirect } from "react-router-dom";
import Home from './Home.jsx';
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//console.log("App.js");
import * as Realm from "realm-web";
import React from 'react';

const REALM_APP_ID = "fireflyapp-rkzpw"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

// Create a component that displays the given user's details
function UserDetail({ user }) {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}

/*function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home/about" />
      <Route exact path="/home/:page?" render={props => <Home {...props} />} />
    </Switch>
    </BrowserRouter>
  );
}*/
const App = () => {
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = React.useState(app.currentUser);

  // If a user is logged in, show their details.
  // Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
	  <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/home/about" />
            <Route exact path="/home/:page?" render={props => <Home {...props} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;



