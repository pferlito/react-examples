import React, {Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function DirectoryPage() {
  function handleChange() {
    console.log('in handleChange');
  }
  
  return (
    <Container>
      <Row>
        <Col md={{span: 8}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control onChange={handleChange} type="text" placeholder="Search" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DirectoryPage;