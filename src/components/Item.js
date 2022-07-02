import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "./cart.css";

const Item = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increament, decreament } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="image" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decreament(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => increament(id)}></i>
        </div>

        <div className="price">{price}</div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Item;
