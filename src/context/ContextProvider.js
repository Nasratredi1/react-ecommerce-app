import ContextApi from "./context-api";
import { useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type == "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const addItemHandler = (item) => {
    cartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    cartAction({
      type: "ADD",
      id: id,
    });
  };

  const clearCartHandler = () => {
    cartAction({
      type: "CLEAR",
    });
  };

  const contextApi = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
    isMenuActive,
    setIsMenuActive,
    isCartActive,
    setIsCartActive,
    isModalActive,
    setIsModalActive,
  };

  return (
    <ContextApi.Provider value={contextApi}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
