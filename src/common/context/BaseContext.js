import React, { createContext, useReducer } from "react";
import shop_data from "../../data/shop_data.json";

const BaseContext = createContext();
const initialState = {
  shop_data,
};

const actions = {
  SET_SHOP_DATA: "SET_SHOP_DATA",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_SHOP_DATA:
      return { ...state, isPlaying: action.value };

    default:
      return state;
  }
}
export const BaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    shop_data: state.shop_data,
    setShopData: (value) => {
      dispatch({ type: actions.SET_SHOP_DATA, value });
    },
  };

  return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>;
};

export default BaseContext;
