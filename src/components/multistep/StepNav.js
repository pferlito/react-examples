import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StepNav({handleNavigation, state, steps}) {
  return (
    <Row>
      <Col md={{span: 8}}>
        {state.step === 0 ||
        <button
          onClick={() => handleNavigation(-1)}
          className="btn btn-primary float-left">Back</button>}
        {state.step === steps - 1 ||
        <button
          onClick={() => handleNavigation(1)}
          className="btn btn-primary float-right">Next</button>}
      </Col>
    </Row>
  );
}