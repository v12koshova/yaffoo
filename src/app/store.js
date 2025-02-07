import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shopSlice";
import cartReducer from "./features/cartSlice";
import postsReducer from "./features/postsSlice";

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        posts: postsReducer
    }
})