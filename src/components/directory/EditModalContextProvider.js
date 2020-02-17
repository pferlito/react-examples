import React, {createContext} from 'react';
import PropTypes from "prop-types";

export const EditModalContext = createContext([]);

/**
 * Pass state as context in the value prop, forwarding the children.
 */
export default function EditModalContextProvider(props) {
  const {showModal, setShowModal, userToEdit, setUserToEdit} = props;
  return (
    <EditModalContext.Provider value={[showModal, setShowModal, userToEdit, setUserToEdit]}> {/* pass state as context */}
      {props.children}
    </EditModalContext.Provider>
  );
};

EditModalContextProvider.propTypes = {
  props: PropTypes.object,
};
