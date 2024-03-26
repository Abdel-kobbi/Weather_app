import { configureStore } from "@reduxjs/toolkit";
import reducer from "./weatherSlice"
const store = configureStore({
    reducer: {
        weather: reducer
    }
});

export default store;