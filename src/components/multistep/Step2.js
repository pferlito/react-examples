import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomSelect from "../checkout/fields/CustomSelect";

export default function Step2({handleChange, state}) {
  const ages = [
    {
      code: '18-35',
      label: '18-35'
    },
    {
      code: '35-49',
      label: '35-49'
    },
    {
      code: '50+',
      label: '50+'
    }
  ];

  return (
    <Row>
      <Col md={4} className="mb-3">
        <CustomSelect
          id="age"
          label="Age"
          value={state.age}
          handleChange={handleChange}
          options={ages}
          required="required"
        />
      </Col>
    </Row>
  );
}