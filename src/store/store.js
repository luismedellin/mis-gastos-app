import { configureStore } from "@reduxjs/toolkit";
import { paymentMethodsSlice } from '.';

const globalState = localStorage.getItem('GLOBAL_STATE');
const initialState = globalState ? JSON.parse(globalState) : undefined;

export const store = configureStore({
    reducer: {
        paymentMethods: paymentMethodsSlice.reducer
    }
}, initialState);

export const saveState = () => {
    const state = store.getState();
    localStorage.setItem('GLOBAL_STATE', JSON.stringify(state));
};