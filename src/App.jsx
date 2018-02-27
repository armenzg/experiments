import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import graph from './Graph';

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
          <Link href="/" to="/">Home</Link>
        </li>
        <li>
          <Link href="/react-metrics-graphics" to="/react-metrics-graphics">
            React-metrics-graphics demo
          </Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/react-metrics-graphics" component={graph} />
    </div>
  </Router>
);

export default AppContainer;
