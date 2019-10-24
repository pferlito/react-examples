import React from "react";
import PropTypes from "prop-types";

function Checkbox({id, label, value, handleChange}) {
  return (
    <div className="custom-control custom-checkbox">
      <input onChange={handleChange}
             type="checkbox"
             className="custom-control-input"
             id={id}
             value={value}
      />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;