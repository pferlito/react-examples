import React, {Fragment} from "react";

function TextField({id, label, state, handleChange}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input type="text" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             value={state[{id}]}
      />
    </Fragment>
  );
}

export default TextField;