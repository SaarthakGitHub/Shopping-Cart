import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

// It is destructuring the props that is send in parameters only
//                             |
//                             |
//                             |
//                            \/
const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch = useDispatch();

  const handleClick = ()=> {
    dispatch(cartActions.addToCart({name,id,price}));
    
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
