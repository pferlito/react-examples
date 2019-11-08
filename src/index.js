import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import ModalPage from "./routes/ModalPage";
import FormPage from "./routes/FormPage";
import MultistepPage from "./routes/MultistepPage";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/modal">Modal</Nav.Link>
      <Nav.Link href="/checkout">Checkout Form</Nav.Link>
      <Nav.Link href="/multistep">Multistep Form</Nav.Link>
    </Nav>
    <Switch>
      <Route exact path="/"><App /></Route>
      <Route path="/modal"><ModalPage /></Route>
      <Route path="/checkout"><FormPage /></Route>
      <Route path="/multistep"><MultistepPage steps={2}/></Route>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
