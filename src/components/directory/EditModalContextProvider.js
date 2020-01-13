import React from 'react';
import EditModalContext from "./EditModalContext";

const EditModalContextProvider = (props) => {
  const {showModal, setShowModal} = props;
  return (
    <EditModalContext.Provider value={[showModal, setShowModal]}> {/* pass state as context */}
      {props.children}
    </EditModalContext.Provider>
  );
};

export default EditModalContextProvider;