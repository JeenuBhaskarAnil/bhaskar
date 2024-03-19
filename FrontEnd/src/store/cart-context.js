import React from "react";
const CartContext = React.createContext({
  items: [],
  // billDetails: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearall: () => {},
});

export default CartContext;
