import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import {PromoDisplay, PromoForm} from "./Promo";

/**
 * Quantity selector.
 * @param {number} qty
 * @param {function} handleQtyChange
 */
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

/**
 * Remove line item link.
 * @param {number} idx
 * @param {function} handleItemRemove
 */
function RemoveLineItem({idx,handleItemRemove}) {
  return (
    <div>
      <small>
        <button
          data-idx={idx}
          onClick={handleItemRemove}
          className="btn btn-link">Remove
        </button>
      </small>
    </div>
  );
}

/**
 * Cart line item.
 * @param {number} idx
 * @param {Object} item
 * @param {function} handleItemRemove
 * @param {function} handleQtyChange
 */
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
      <RemoveLineItem idx={idx} handleItemRemove={handleItemRemove}/>
    </li>
  );
}

/**
 * Cart total.
 * @param {Object} cart
 * @param {number} total
 */
function Total({cart,total}) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>Total (USD)</span>
      <strong>${total}</strong>
    </li>
  );
}

/**
 * Cart.
 */
function Cart() {
  const [promo, setPromo] = useState({
    codename: 'EXAMPLECODE',
    value: 5
  });

  const [total,setTotal] = useState(0);

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

  // calculates total
  useEffect(() => {
    let cartTotal = cart.reduce((total,el) => {
      total += el.qty * el.price;
      return total;
    },0);
    setTotal(cartTotal - promo.value);
  }, [cart,promo.value]);

  /**
   * Handle removal of line item.
   * @param {Object} e
   */
  function handleItemRemove(e) {
    const index = e.target.dataset.idx;
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  /**
   * Handle quantity change.
   * @param {number} index
   * @param {number} qty
   */
  function handleQtyChange(index,qty) {
    const newCart = [...cart];
    newCart[index].qty = qty;
    setCart(newCart);
  }

  return (
    <Col className="cart" md={{span: 4, order: 2}}>
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
        <Total cart={cart} total={total}/>
      </ul>
      <PromoForm promo={promo} setPromo={setPromo}/>
    </Col>
  );
}

export default Cart;