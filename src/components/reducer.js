export const reducer = (state, action) => {
  if (action.type === "RREMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((temp) => {
        return temp.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  if (action.type === "INCREAMENT") {
    const updatedCart = state.item.map((temp) => {
      if (temp.id === action.payload) {
        return { ...temp, quantity: temp.quantity + 1 };
      }
      return temp;
    });

    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREAMENT") {
    const updatedCart = state.item
      .map((temp) => {
        if (temp.id === action.payload) {
          return { ...temp, quantity: temp.quantity - 1 };
        }
        return temp;
      })
      .filter((temp) => temp.quantity !== 0);
    return { ...state, item: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
