/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home = () => (
  <Link to="/quantum" href="quantum">Quantum</Link>
);

const QuantumIndex = () => (
  <h2 key="moreData">
    More data on <strong>https://health.graphics/quantum</strong>.
    Ask questions in <strong>#quantum</strong> (IRC & Slack)
  </h2>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/quantum" component={QuantumIndex} />
  </Router>
);

export default Routes;
