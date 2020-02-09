import React, {useState} from 'react';
import Alert from "react-bootstrap/Alert";

export default function useConfirmation() {
  const [confirmation, setConfirmation] = useState({
    show: false,
    message: ""
  });

  /**
   * Show a confirmation message after an operation.
   * @param message
   */
  function showConfirmation(message) {
    const n = 3000;
    setConfirmation({show: true, message});
    // hide the confirmation after n seconds
    setTimeout(() => {
      setConfirmation({show: false, message: ""})
    }, n);
  }

  function getConfirmation() {
    return confirmation;
  }

  return {
    showConfirmation,
    getConfirmation
  }
}