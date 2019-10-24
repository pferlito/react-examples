import React from "react";

function Checkbox({id, label, state, handleChange}) {
  return (
    <div className="custom-control custom-checkbox">
      <input onChange={handleChange}
             type="checkbox"
             className="custom-control-input"
             id={id}
             value={state[{id}]}
      />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;