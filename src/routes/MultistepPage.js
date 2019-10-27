import React, {useState, useEffect, Fragment} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MultistepPage() {


  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={{span: 8}}>
            Multistep Form
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MultistepPage;
