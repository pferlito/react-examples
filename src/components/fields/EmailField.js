import React, {Fragment} from "react";

function EmailField({id, label, state, handleChange}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input type="email" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             value={state[{id}]}
      />
    </Fragment>
  );
}

export default EmailField;