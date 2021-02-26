import React from "react";

const Cart = (props) => {
  console.log("cart Page", props);
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let shippingCost = 0;
  let tax = (total * 0.1).toFixed(2);

  const grandTotal = +(total + shippingCost + Number(tax)).toFixed(3);
  if (total > 15) {
    shippingCost = 5;
  } else if (total > 50) {
    shippingCost = 2;
  }
  return (
    <div>
      <h4>Order Summary: {cart.length}</h4>
      <h3>Product price: {total}</h3>
      <h5>Shipping Cost: {shippingCost}</h5>
      <small>Tax + vat: {tax}</small>
      <h5>Total: {grandTotal}</h5>
    </div>
  );
};

export default Cart;
