import {useState} from 'react';

/**
 * Hook that provides a confirmation message.
 */
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