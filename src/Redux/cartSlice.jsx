import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
// Local storage functions
const LOCAL_STORAGE_KEY_ITEMS = "cartItems";
const LOCAL_STORAGE_KEY_TOTALS = "cartTotals";

export const getLocalStorageItems = () => {
  const storedItems =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ITEMS)) || [];
  return storedItems;
};

export const setLocalStorageItems = (items) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_ITEMS, JSON.stringify(items));
};

export const getLocalStorageTotals = () => {
  const storedTotals =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOTALS)) || {};
  return storedTotals;
};

export const setLocalStorageTotals = (totals) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_TOTALS, JSON.stringify(totals));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getLocalStorageItems(),
    totals: getLocalStorageTotals(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If the item already exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If the item does not exist, push it to the cart
        state.items.push(action.payload);
      }

      // Update totals and store in local storage
      state.totals = calculateTotals(state.items);
      setLocalStorageItems(state.items);
      setLocalStorageTotals(state.totals);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totals = calculateTotals(state.items);
      setLocalStorageItems(state.items);
      setLocalStorageTotals(state.totals);
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[itemIndex].quantity += 1;
      state.totals = calculateTotals(state.items);
      setLocalStorageItems(state.items);
      setLocalStorageTotals(state.totals);
    },
    decreaseQuantity: (state, action) => {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload
        );
      
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          // If the quantity is 1 or less, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      
        state.totals = calculateTotals(state.items);
        setLocalStorageItems(state.items);
        setLocalStorageTotals(state.totals);
      },
    clearCart: (state) => {
      state.items = [];
      state.totals = calculateTotals(state.items);
      setLocalStorageItems(state.items);
      setLocalStorageTotals(state.totals);
    },
  },
});

// Calculate totals function
const calculateTotals = (items) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return {
    totalQuantity,
    totalPrice,
    grandTotal: totalPrice,
  };
};

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotals = (state) => state.cart.totals;

export default cartSlice.reducer;
