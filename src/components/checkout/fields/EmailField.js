import React, {Fragment} from "react";
import PropTypes from "prop-types";

function EmailField({id, label, value, handleChange, required}) {
  return (
    <Fragment>
      <label htmlFor={id}>{label}{required ? "*" : ""}</label>
      <input type="email" className="form-control" id={id}
             onChange={handleChange}
             placeholder=""
             required={required}
             value={value}
      />
    </Fragment>
  );
}

EmailField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.string
};

export default EmailField;