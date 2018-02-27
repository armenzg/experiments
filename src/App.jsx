import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Welcome to our app!</h1>
  </div>
);

const AppContainer = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link href="/" to="/">App</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

export default AppContainer;
