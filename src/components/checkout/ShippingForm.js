import React, {Fragment} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "../common/TextField";
import CustomSelect from "./fields/CustomSelect";
import PropTypes from "prop-types";

export default function ShippingForm({state, handleChange, states, countries}) {
  return (
    <Fragment>
      <h4 className="mb-3">Shipping Address</h4>
      <Row>
        <Col md={6} className="mb-3">
          <TextField
            id="shipFirstName"
            label="First name"
            value={state.shipFirstName}
            handleChange={handleChange}
            required="required"
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            id="shipLastName"
            label="Last name"
            value={state.shipLastName}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="shipStreet"
            label="Street"
            value={state.shipStreet}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="shipStreet2"
            label="Street 2 (optional)"
            value={state.shipStreet2}
            handleChange={handleChange}
            required="required"
          />
        </Col>
        <Col className="mb-3">
          <TextField
            id="shipCity"
            label="City"
            value={state.shipCity}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <CustomSelect
            id="shipCountry"
            label="Country"
            value={state.shipCountry}
            handleChange={handleChange}
            options={countries}
            required="required"
          />
        </Col>
        <Col md={4} className="mb-3">
          <CustomSelect
            id="shipState"
            label="State"
            value={state.shipState}
            required="required"
            options={states}
            handleChange={handleChange}>
          </CustomSelect>
        </Col>
        <Col md={4} className="mb-3">
          <TextField
            id="shipZip"
            label="Zip"
            value={state.shipZip}
            handleChange={handleChange}
            required="required"
          />
        </Col>
      </Row>
    </Fragment>
  );
}

ShippingForm.propTypes = {
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  states: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};
