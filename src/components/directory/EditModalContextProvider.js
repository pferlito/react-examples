import React from 'react';
import EditModalContext from "./EditModalContext";

export default function EditModalContextProvider(props) {
  const {showModal, setShowModal} = props;
  return (
    <EditModalContext.Provider value={[showModal, setShowModal]}> {/* pass state as context */}
      {props.children}
    </EditModalContext.Provider>
  );
};