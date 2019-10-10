import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function BillingForm({state,handleChange}) {
  return (
    <form>
      <Row>
        <Col md={6} className="mb-3">
          <label htmlFor="firstName">First name</label>
          <input type="text" className="form-control" id="firstName"
                 onChange={handleChange}
                 placeholder=""
                 value={state.firstName}/>
        </Col>
        <Col md={6} className="mb-3">
          <label htmlFor="lastName">Last name</label>
          <input type="text" className="form-control" id="lastName"
                 onChange={handleChange}
                 placeholder=""
                 value={state.lastName}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email"
                 onChange={handleChange}
                 placeholder=""
                 value={state.email}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address"
                 onChange={handleChange}
                 placeholder=""
                 value={state.address}/>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <label htmlFor="address">Address 2 (optional)</label>
          <input type="text" className="form-control" id="address2"
                 onChange={handleChange}
                 placeholder=""
                 value={state.address2}/>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <label htmlFor="country">Country</label>
          <select className="custom-select" id="country"
                  onChange={handleChange}>
            <option value="">Country...</option>
            <option>United States</option>
          </select>
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
          <label htmlFor="firstName">Zip</label>
          <input type="text" className="form-control" id="zip"
                 onChange={handleChange}
                 placeholder=""
                 value={state.zip}/>
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
