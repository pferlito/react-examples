import React, {useState, useEffect, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Checkbox from '../components/checkout/fields/Checkbox.js';
import Cart from '../components/checkout/Cart.js';
import BillingForm from '../components/checkout/BillingForm';
import ShippingForm from '../components/checkout/ShippingForm';
import zipcodes from 'zipcodes';

function FormPage() {
  const countries = [{
    code: 'US',
    label: 'United States'
  }];

  const states = [{
    code: 'CA',
    label: 'California'
  }];

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
      setState((state) => { return {...state, billCity: info.city}});
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
                states={states}
                countries={countries}
              />
              <Checkbox
                id="sameAsBilling"
                label="Shipping same as Billing"
                value={state.sameAsBilling}
                handleChange={toggleValue}
              />
              <hr className="mb-4"/>
              {!state.sameAsBilling && <ShippingForm
                state={state}
                handleChange={handleChange}
                states={states}
                countries={countries}
              />}
              <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
          </Col>
          <Cart/>
        </Row>
      </Container>
    </Fragment>
  );
}

export default FormPage;
