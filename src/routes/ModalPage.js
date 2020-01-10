import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

function MyModal({handleClick}) {
  const modal = (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={handleClick}>
        <Modal.Title>Newsletter</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please sign up for our <a
          href="http://www.example.com">newsletter.</a></p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClick} variant="primary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
  return ReactDOM.createPortal(modal, document.getElementById('portal'));
}

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <Row>
        <Col>
          <p>Example of a modal using a <a
            href="https://reactjs.org/docs/portals.html">Portal</a></p>
          <Button onClick={handleClick} className="open">Click to open</Button>
          {showModal ? <MyModal handleClick={handleClick}/> : null}
        </Col>
      </Row>
    </Container>
  );
}

export default ModalPage;
