// Store.jsx
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  isItemAdded: false,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const existingProductIndex = state.basket.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedBasket = [...state.basket];
        updatedBasket[existingProductIndex].quantity += 1;

        return {
          ...state,
          basket: updatedBasket,
          isItemAdded: true,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
          isItemAdded: true,
        };
      }
    }

    case "RESET_ADD_STATUS":
      return {
        ...state,
        isItemAdded: false,
      };
    default:
      return state;
  }
};

const Store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default Store;
