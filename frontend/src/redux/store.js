import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice.js'
import authReducer from "./slices/authSlice.js"

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer
    }
})