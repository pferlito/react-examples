import React, { useState, Fragment } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function TextField({id,label,state,handleChange}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input type="text" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             value={state.firstName}/>
    </Fragment>
  );
}

function CustomSelect({id,label,state,handleChange,options}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <select className="custom-select" id={id}
              onChange={handleChange}>
        <option value="">{label}...</option>
        {options.map(({code,label}) => {
          return (
            <option key={code} value={code}>{label}</option>
          )})}
      </select>
    </Fragment>
  );
}

function BillingForm({state,handleChange}) {
  const countries = [{
    code: 'US',
    label: 'United States'
  }];
  return (
    <form>
      <Row>
        <Col md={6} className="mb-3">
          <TextField
            id="firstName"
            label="First name"
            state={state}
            handleChange={handleChange}
            />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            id="lastName"
            label="Last name"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="email"
            label="Email"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="address"
            label="Address"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="address2"
            label="Address 2 (optional)"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <CustomSelect
            id="countries"
            label="Countries"
            state={state}
            handleChange={handleChange}
            options={countries}
            />
        </Col>
        <Col md={4} className="mb-3">
          <label htmlFor="state">State</label>
          <select className="custom-select" id="state"
                  onChange={handleChange}>
            <option value="">State...</option>
            <option>California</option>
          </select>
        </Col>
        <Col md={4} className="mb-3">
          <TextField
            id="zip"
            label="Zip"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <hr className="mb-4" />
    </form>
  );
}

function FormPage() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: ''
  });

  function handleChange(e) {
    setState({...state, [e.target.id]: e.target.value});
  }

  return (
    <Container>
      <Row>
        <Col md={{span: 8, order: 1}}>
          <h4 className="mb-3">Billing Address</h4>
          <BillingForm
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {JSON.stringify(state)}
        </Col>
      </Row>
    </Container>
  );
}

export default FormPage;
