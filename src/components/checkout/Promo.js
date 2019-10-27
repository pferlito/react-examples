import React from "react";
import PropTypes from "prop-types";


function PromoDisplay({promo, setPromo}) {

  function handleRemovePromo() {
    setPromo({value: 0});
  }

  if (!promo.value) return null;

  return (<li className="list-group-item bg-light">
    <div className="d-flex justify-content-between">
      <div className="text-success">
        <h6 className="my-0">Promo code</h6>
        <small>{promo.codename}</small>
      </div>
      <span className="text-success">-${promo.value}</span>
    </div>
    <div>
      <small>
        <button className="btn btn-link" onClick={handleRemovePromo}>Remove</button>
      </small>
    </div>
  </li>);
}

PromoDisplay.propTypes = {
  promo: PropTypes.object.isRequired,
  setPromo: PropTypes.func.isRequired,
};

function PromoForm({setPromo}) {

  function handleSubmit(e) {
    e.preventDefault();
    setPromo({
      codename: e.target[0].value,
      value: 5
    });
  }

  return (
    <form onSubmit={handleSubmit} className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Redeem
          </button>
        </div>
      </div>
    </form>
  );
}

PromoForm.propTypes = {
  setPromo: PropTypes.func.isRequired,
};

export {PromoDisplay, PromoForm};