// Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'

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
      case "EMPTY_BASKET": {
        return {
          ...state,
          basket: [], // Réinitialise le tableau du panier
          isItemAdded: false, // Optionnel, dépend de votre logique d'application
        };
      }
    default:
      return state;
  }
  
};

const Store = configureStore({
  reducer: {
    auth: authReducer, // Slice généré par Redux Toolkit pour l'authentification
    basket: basketReducer, // Votre reducer personnalisé pour le panier
  },
});


export default Store;
