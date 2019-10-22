import React, {useState, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TextField from '../components/fields/TextField.js';
import EmailField from '../components/fields/EmailField.js';
import CustomSelect from '../components/fields/CustomSelect.js';
import Checkbox from '../components/fields/Checkbox.js';
import Cart from '../components/Cart.js';

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
            state={state}
            handleChange={handleChange}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            id="billLastName"
            label="Last name"
            state={state}
            handleChange={handleChange}
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
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="billAddress"
            label="Address"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="billAddress2"
            label="Address 2 (optional)"
            state={state}
            handleChange={handleChange}
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
            id="billZip"
            label="Zip"
            state={state}
            handleChange={handleChange}
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
            state={state}
            handleChange={handleChange}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            id="shipLastName"
            label="Last name"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="shipAddress"
            label="Address"
            state={state}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <TextField
            id="shipAddress2"
            label="Address 2 (optional)"
            state={state}
            handleChange={handleChange}
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
          />
        </Col>
        <Col md={4} className="mb-3">
          <label htmlFor="state">State</label>
          <select className="custom-select"
                  id="shipState"
                  onChange={handleChange}>
            <option value="">State...</option>
            <option>California</option>
          </select>
        </Col>
        <Col md={4} className="mb-3">
          <TextField
            id="shipZip"
            label="Zip"
            state={state}
            handleChange={handleChange}
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
    billAddress: '',
    billAddress2: '',
    billCountry: '',
    billState: '',
    billZip: '',
    sameAsBilling: false,
    shipFirstName: '',
    shipLastName: '',
    shipAddress: '',
    shipAddress2: '',
    shipCountry: '',
    shipState: '',
    shipZip: '',
  });

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
