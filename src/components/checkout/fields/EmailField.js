import React, {Fragment} from "react";

function EmailField({id, label, state, handleChange, required}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input type="email" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             required={required}
             value={state[{id}]}
      />
    </Fragment>
  );
}

export default EmailField;