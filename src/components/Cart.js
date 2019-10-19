import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import {PromoDisplay, PromoForm} from "./Promo";

function Quantity({qty, handleQtyChange}) {
  let options = [];
  for (let i = 1; i < 10; i++) {
    options.push(<option key={`qty-${i}`}>{i}</option>);
  }
  return (
    <select className="qty-select custom-select" onChange={handleQtyChange} value={qty}>
      {options}
    </select>
  );
}

function LineItem({idx, item, handleItemRemove, handleQtyChange}) {
  function QtyChange(e) {
    handleQtyChange(idx,e.target.value);
  }

  return (
    <li
      className="list-group-item lh-condensed">
      <div className="wrap d-flex justify-content-between">
        <div className="cart-item-wrap">
          <h6 className="my-0">{item.name}</h6>
          <small className="text-muted">{item.description}</small>
        </div>
        <Quantity
          qty={item.qty}
          handleQtyChange={QtyChange}
        />
        <span className="cart-price text-muted">${item.price}</span>
      </div>
      <div>
        <small>
          <button
            data-idx={idx}
            onClick={handleItemRemove}
            className="link-button">Remove
          </button>
        </small>
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
      qty: 1,
      price: 18
    },
    {
      name: 'Product 2',
      description: 'Product 2 description',
      qty: 2,
      price: 22
    },]);

  function handleItemRemove(e) {
    const index = e.target.dataset.idx;
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function handleQtyChange(index,qty) {
    const newCart = [...cart];
    newCart[index].qty = qty;
    setCart(newCart);
  }

  let total = useEffect(() => {
  }, [cart]);
  return (
    <Col md={{span: 4, order: 2}}>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="">3 items</span>
      </h4>
      <ul className="list-group mb-3">
        {cart.map((item, index) => {
          return <LineItem
            idx={index}
            key={index}
            item={item}
            handleItemRemove={handleItemRemove}
            handleQtyChange={handleQtyChange}
          />
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