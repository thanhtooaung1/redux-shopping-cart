import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart_slice";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
