import React, {Fragment} from "react";
import PropTypes from "prop-types";

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

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.string
};

export default CustomSelect;