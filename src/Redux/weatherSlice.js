import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false,
    clouds: {},
    main: {},
    name: '',
    sys: {},
    weather: [],
    wind: {}
}
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            const { clouds, main, name, sys, weather, wind } = action.payload;
            state.clouds = clouds;
            state.main = main;
            state.name = name;
            state.sys = sys;
            state.weather = weather[0];
            state.wind = wind;
            state.isLoaded = true;
        },
        resetInfo: (state) => {
            state.isLoaded = false;
        },
    }
});

export const { setInfo, resetInfo } = weatherSlice.actions;
export default weatherSlice.reducer;