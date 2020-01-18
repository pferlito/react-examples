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
            value={user.name.first}
            handleChange={handleChange}
            required="required"
          />
        </Col>
        <Col className="mb-3">
          <TextField
            id="name.last"
            label="Last name"
            value={user.name.last}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="login.username"
            label="Username"
            value={user.login.username}
            readOnly
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="email"
            label="Email"
            value={user.email}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
    </Container>
  );
}