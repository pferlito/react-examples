import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "../common/TextField"


function handleChange(e) {
  console.log('in handleChange');
}

export default function EditUserForm({user}) {
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <TextField
            id="FirstName"
            label="First name"
            required="required"
            value={user.name.first}
            handleChange={handleChange}
            require="required"
          />
        </Col>
        <Col className="mb-3">
          <TextField
            id="LastName"
            label="Last name"
            required="required"
            value={user.name.last}
            handleChange={handleChange}
            require="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="Username"
            label="Username"
            required="required"
            value={user.login.username}
            handleChange={handleChange}
            require="required"
          />
        </Col>
      </Row>
    </Container>
  );
}