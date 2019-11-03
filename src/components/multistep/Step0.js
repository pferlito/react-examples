import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "../checkout/fields/TextField";

export default function Step0({handleChange, state}) {
  return (
    <Row>
      <Col md={4} className="mb-3">
        <TextField
          id="firstName"
          label="First name"
          value={state.firstName}
          handleChange={handleChange}
          required="required"
        />
      </Col>
      <Col md={4} className="mb-3">
        <TextField
          id="lastName"
          label="Last name"
          value={state.lastName}
          handleChange={handleChange}
          required="required"
        />
      </Col>
    </Row>
  );
}