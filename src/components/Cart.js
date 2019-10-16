import React, {useState} from "react";
import Col from "react-bootstrap/Col";

function LineItem({item}) {
  return (
    <li
      className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{item.name}</h6>
        <small className="text-muted">{item.description}</small>
      </div>
      <span className="text-muted">${item.price}</span>
    </li>
  );
}

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
        <small><button onClick={remove}>Remove</button></small>
      </div>
    </li>
  );
}

function Cart() {
  const [promo, setPromo] = useState({
    codename: 'EXAMPLECODE',
    value: 5
  });
  const [cart, setCart] = useState([
    {
      name: 'Product 1',
      description: 'Product 1 description',
      price: 18
    },
    {
      name: 'Product 2',
      description: 'Product 2 description',
      price: 22
    },]);
  let index = 0;

  function handleRemovePromo() {
    setPromo(false);
  }

  return (
    <Col md={{span: 4, order: 2}}>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="">3 items</span>
      </h4>
      <ul className="list-group mb-3">
        {cart.map((item, index) => {
          return <LineItem key={index} item={item}/>
        })}
        {promo && <PromoDisplay
          promo={promo}
          remove={handleRemovePromo}
        />}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem
            </button>
          </div>
        </div>
      </form>
    </Col>
  );
}

export default Cart;