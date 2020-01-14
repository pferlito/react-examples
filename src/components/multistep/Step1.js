import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "../common/TextField";
import EmailField from "../checkout/fields/EmailField";

export default function Step1({handleChange, state}) {
  return (
    <Row>
      <Col md={4} className="mb-3">
        <EmailField
          id="email"
          label="Email"
          value={state.email}
          handleChange={handleChange}
          required="required"
        />
      </Col>
      <Col md={4} className="mb-3">
        <TextField
          id="phone"
          label="Phone"
          value={state.phone}
          handleChange={handleChange}
          required="required"
        />
      </Col>
    </Row>
  );
}