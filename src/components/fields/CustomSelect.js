import React, {Fragment} from "react";

function CustomSelect({id, label, handleChange, options}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <select className="custom-select" id={id}
              onChange={handleChange}>
        <option value="">{label}...</option>
        {options.map(({code, label}) => {
          return (
            <option key={code} value={code}>{label}</option>
          )
        })}
      </select>
    </Fragment>
  );
}

export default CustomSelect;