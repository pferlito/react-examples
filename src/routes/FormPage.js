import React, {useState, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TextField from '../components/fields/TextField.js';
import CustomSelect from '../components/fields/CustomSelect.js';
import Checkbox from '../components/fields/Checkbox.js';

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

function Cart({state}) {
  return (
    <Col md={{span: 4, order: 2}}>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li
          className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>
        <li
          className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$8</span>
        </li>
        <li
          className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(state, null, 2)}</p>
    </Col>
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
          <Cart state={state}/>
        </Row>
      </Container>
    </Fragment>
  );
}

export default FormPage;
