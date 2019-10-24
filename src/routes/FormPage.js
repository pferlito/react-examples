import React, {useState, useEffect, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TextField from '../components/fields/TextField.js';
import EmailField from '../components/fields/EmailField.js';
import CustomSelect from '../components/fields/CustomSelect.js';
import Checkbox from '../components/fields/Checkbox.js';
import Cart from '../components/Cart.js';
import zipcodes from 'zipcodes';

function BillingForm({state, handleChange}) {
  const countries = [{
    code: 'US',
    label: 'United States'
  }];
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
            state={state}
            handleChange={handleChange}
            options={countries}
            required="required"
          />
        </Col>
        <Col md={4} className="mb-3">
          <label htmlFor="state">State</label>
          <select className="custom-select" id="billState"
                  required="required"
                  onChange={handleChange}>
            <option value="">State...</option>
            <option>California</option>
          </select>
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

function ShippingForm({state, handleChange}) {
  const countries = [{
    code: 'US',
    label: 'United States'
  }];
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
            state={state}
            handleChange={handleChange}
            options={countries}
            required="required"
          />
        </Col>
        <Col md={4} className="mb-3">
          <label htmlFor="state">State</label>
          <select className="custom-select"
                  id="shipState"
                  required="required"
                  onChange={handleChange}>

            <option value="">State...</option>
            <option>California</option>
          </select>
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

function FormPage() {
  const [state, setState] = useState({
    billFirstName: '',
    billLastName: '',
    email: '',
    billStreet: '',
    billStreet2: '',
    billCity: '',
    billCountry: '',
    billState: '',
    billZip: '',
    sameAsBilling: false,
    shipFirstName: '',
    shipLastName: '',
    shipStreet: '',
    shipStreet2: '',
    shipCity: '',
    shipCountry: '',
    shipState: '',
    shipZip: '',
  });

  // look up city from zip
  useEffect(() => {
    let info = zipcodes.lookup(state.billZip);
    if (info) {
      console.log(info.city);
      setState({...state, billCity: info.city});
    }

  },[state.billZip]);

  function handleChange(e) {
    setState({...state, [e.target.id]: e.target.value});
  }

  function toggleValue(e) {
    setState({...state, [e.target.id]: !state[e.target.id]});
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={{span: 8, order: 1}}>
            <h4 className="mb-3">Billing Address</h4>
            <form>
              <BillingForm
                state={state}
                handleChange={handleChange}
              />
              <Checkbox
                id="sameAsBilling"
                label="Shipping same as Billing"
                state={state}
                handleChange={toggleValue}
              />
              <hr className="mb-4"/>
              {!state.sameAsBilling && <ShippingForm
                state={state}
                handleChange={handleChange}
              />}
              <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
          </Col>
          <Cart/>
        </Row>
        <Row>{JSON.stringify(state, null, 2)}</Row>
      </Container>
    </Fragment>
  );
}

export default FormPage;
