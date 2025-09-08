import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utlis/CartSlice";

const appStor = configureStore({
    // It is used to combine multiple reducers
    reducer : {
        // It is cart Slice reducer
        cart : cartReducer,
    }
});

export default appStor;