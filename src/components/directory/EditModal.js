import React, {useState, useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";
import EditModalContext from "./EditModalContext";
import EditUserForm from "./EditUserForm";

function handleSave(e) {
  console.log("in save handler");
}

/**
 * Set an object's nested property given a property chain array.
 * @param obj The object to operate on.
 * @param propChain The property chain.
 * @param val The value to set.
 * @param index The current index in the property chain.
 */
function setNestedProperty(obj, propChain, val, index = 0) {
  if (index < propChain.length - 1) {
    setNestedProperty(obj[propChain[index]], propChain, val, ++index);
  } else {
    obj[propChain[index]] = val;
  }
}

/**
 * Edit User Modal
 */
export default function EditModal({user}) {
  // Get state from context
  const [showModal, setShowModal] = useContext(EditModalContext);
  const [editingUser, setEditingUser] = useState(user);

  function handleChange(e) {
    let mutatedUser = {...editingUser};
    let propChain = e.target.id.split('.');
    setNestedProperty(mutatedUser, propChain, e.target.value);
    setEditingUser(mutatedUser);
  }

  if (!showModal) return null;
  const modal = (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={() => {
        setShowModal(false)
      }}>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <EditUserForm user={user} handleChange={handleChange}/>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => handleSave}>Save</Button>
        <Button variant="secondary"
                onClick={() => setShowModal(false)}>Cancel</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
  return ReactDOM.createPortal(modal, document.getElementById('portal'));
}
