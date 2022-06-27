import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import ContextCart from "./ContextCart";
import { products } from "./products";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const ClearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  const increament = (id) => {
    return dispatch({
      type: "INCREAMENT",
      payload: id,
    });
  };

  const decreament = (id) => {
    return dispatch({
      type: "DECREAMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("aswome");
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, ClearCart, increament, decreament }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
