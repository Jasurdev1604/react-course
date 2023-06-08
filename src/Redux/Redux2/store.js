import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Redux2/counterSlice";
export const store = configureStore({
    reducer:{
     counterSlice,   
    }
})