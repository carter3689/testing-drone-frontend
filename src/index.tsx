import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Drones, Home, Login } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drones">Your Drone Collection</Link>
          </li>
          <li>
            <Link to="/login">Login here</Link>
          </li>
        </ul>
      </div>

    <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>
      <Route path ="/drones">
        <Drones></Drones>
      </Route>
      <Route path ="/login">
        <Login></Login>
      </Route>
    </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
