import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./features/cart.js"
import counterReducer from "./features/counter.js"
import todoReducer from "./features/todo.js"

const store = configureStore({
  reducer: { 
    cart : cartReducer,
    counter: counterReducer,
    todo: todoReducer,
   },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
