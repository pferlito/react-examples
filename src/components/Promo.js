import React from "react";

function PromoDisplay({promo, remove}) {
  return (
    <li className="list-group-item bg-light">
      <div className="d-flex justify-content-between">
        <div className="text-success">
          <h6 className="my-0">Promo code</h6>
          <small>{promo.codename}</small>
        </div>
        <span className="text-success">-${promo.value}</span>
      </div>
      <div>
        <small>
          <button className="link-button" onClick={remove}>Remove</button>
        </small>
      </div>
    </li>
  );
}

function PromoForm() {
  return (
    <form className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code"/>
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Redeem
          </button>
        </div>
      </div>
    </form>
  );
}

export {PromoDisplay, PromoForm};