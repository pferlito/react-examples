import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "../common/TextField"

export default function EditUserForm({user, handleChange}) {
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <TextField
            id="name.first"
            label="First name"
            required="required"
            value={user.name.first}
            handleChange={handleChange}
            require="required"
          />
        </Col>
        <Col className="mb-3">
          <TextField
            id="name.last"
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
            id="login.username"
            label="Username"
            required="required"
            value={user.login.username}
            handleChange={handleChange}
            require="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="email"
            label="Email"
            required="required"
            value={user.email}
            handleChange={handleChange}
            require="required"
          />
        </Col>
      </Row>
    </Container>
  );
}