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
    </form>
  );
}

function FormPage() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: ''
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
