import React, {Fragment} from "react";

function TextField({id, label, handleChange, required, ...rest}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}{required ? "*" : ""}</label>
      <input type="text" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             required={required}
             {...rest}
      />
    </Fragment>
  );
}

export default TextField;