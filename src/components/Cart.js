import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import {PromoDisplay, PromoForm} from "./Promo";

function LineItem({item}) {
  return (
    <li
      className="list-group-item lh-condensed">
      <div className="wrap d-flex justify-content-between">
        <div className="item-wrap">
          <h6 className="my-0">{item.name}</h6>
          <small className="text-muted">{item.description}</small>
        </div>
        <span className="text-muted">${item.price}</span>
      </div>
      <div>
        <small><button className="link-button">Remove</button></small>
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

  let total = useEffect(() => {},[cart]);
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
        <PromoDisplay promo={promo} setPromo={setPromo}/>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <PromoForm promo={promo} setPromo={setPromo}/>
    </Col>
  );
}

export default Cart;