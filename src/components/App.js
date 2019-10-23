import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="Home">
            <h2 className="text-center">React Examples</h2>
            <dl>
              <dt><a href="/modal">Modal</a></dt>
              <dd>A Modal implementation using a Portal.</dd>
              <dt><a href="/checkout">Checkout Form</a></dt>
              <dd>A Checkout Form for an ecommerce site.</dd>
            </dl>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
