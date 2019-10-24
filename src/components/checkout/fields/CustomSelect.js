import React, {Fragment} from "react";

function CustomSelect({id, label, value, handleChange, options, required}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}{required ? "*" : ""}</label>
      <select className="custom-select" id={id}
              required={required}
              value={value}
              onChange={handleChange}>
        <option value="">{label}...</option>
        {options.map(({code, label}) => <option key={code} value={code}>{label}</option>)};
      </select>
    </Fragment>
  );
}

export default CustomSelect;