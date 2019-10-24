import React, {Fragment} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "./fields/TextField";
import EmailField from "./fields/EmailField";
import CustomSelect from "./fields/CustomSelect";
import PropTypes from "prop-types";

export default function BillingForm({state, handleChange, states, countries}) {

  return (
    <Fragment>
      <Row>
        <Col md={6} className="mb-3">
          <TextField
            id="billFirstName"
            label="First name"
            value={state.billFirstName}
            handleChange={handleChange}
            required="required"
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            id="billLastName"
            label="Last name"
            value={state.billLastName}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <EmailField
            id="email"
            label="Email"
            state={state}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="billStreet"
            label="Street"
            value={state.billStreet}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="billStreet2"
            label="Street 2 (optional)"
            value={state.billStreet2}
            handleChange={handleChange}
          />
        </Col>
        <Col className="mb-3">
          <TextField
            id="billCity"
            label="City"
            value={state.billCity}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <CustomSelect
            id="billCountry"
            label="Country"
            value={state.billCountry}
            handleChange={handleChange}
            options={countries}
            required="required"
          />
        </Col>
        <Col md={4} className="mb-3">
          <label htmlFor="state">State</label>
          <CustomSelect
            id="shipState"
            value={state.shipState}
            required="required"
            options={states}
            onChange={handleChange}>
          </CustomSelect>
        </Col>
        <Col md={4} className="mb-3">
          <TextField
            id="billZip"
            label="Zip"
            state={state}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
    </Fragment>
  );
}

BillingForm.propTypes = {
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};