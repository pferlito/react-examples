import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";
import EditModalContext from "./EditModalContext";

/**
 * Edit User Modal
 */
export default function EditModal() {
  // Get state from context
  const [showModal, setShowModal] = useContext(EditModalContext);
  if (!showModal) return null;
  const modal = (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={() => {setShowModal(false)}}>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Form Here</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
  return ReactDOM.createPortal(modal, document.getElementById('portal'));
}
