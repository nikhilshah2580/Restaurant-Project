import { useMemo, useReducer } from "react";
import { CartContext } from "./cartStore";


const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const quantity = product.quantity || 1;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...product, quantity }],
      };
    }

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const cartCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      items: state.items,
      cartCount,
      cartTotal,
      addToCart: (product) =>
        dispatch({ type: "ADD_TO_CART", payload: product }),
      increaseQuantity: (id) =>
        dispatch({ type: "INCREASE_QUANTITY", payload: id }),
      decreaseQuantity: (id) =>
        dispatch({ type: "DECREASE_QUANTITY", payload: id }),
      removeFromCart: (id) =>
        dispatch({ type: "REMOVE_FROM_CART", payload: id }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
    }),
    [state.items, cartCount, cartTotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
