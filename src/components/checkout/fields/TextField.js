import React, {Fragment} from "react";

function TextField({id, label, value, handleChange,required}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}{required ? "*" : ""}</label>
      <input type="text" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             required={required}
             value={value}
      />
    </Fragment>
  );
}

export default TextField;