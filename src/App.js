import logo from './logo.svg';
import './App.css';
import { Redirect } from "react-router-dom";
import Home from './Home.jsx';
import {Button} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home/about" />
      <Route exact path="/home/:page?" render={props => <Home {...props} />} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;



