import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
      {cartItems.map((cartItem) => {
        return (
        <li key={cartItem.id}>        
        <CartItem id={cartItem.id} price={cartItem.price} total={cartItem.totalPrice} quantity={cartItem.quantity} name={cartItem.name} />
        </li>)
      })}
      </ul>
    </div>
  );
};

export default CartItems;
