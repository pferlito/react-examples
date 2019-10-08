import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-bootstrap/Modal";
import './Modal.css';
import Button from 'react-bootstrap/Button';

function MyModal() {
  const modal = (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
  return ReactDOM.createPortal(modal,document.getElementById('portal'));
}

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Button onClick={handleClick} className="open">Click to open</Button>
      {showModal ? <MyModal /> : null}
    </div>
  );
}

export default ModalPage;
