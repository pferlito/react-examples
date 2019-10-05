import React, {Fragment} from 'react';
import Modal from '../routes/Modal';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={App}>
        <h2 className="title">React Examples</h2>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/modal">Modal</Link>
        </div>
        <div className="App">
          <Route path="/modal" component={Modal}/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
