import { createSlice } from "@reduxjs/toolkit";
import { IPaymentMethod } from "../../interfaces/interfaces";

interface IInitialState {
    paymentMethods: IPaymentMethod[];
    isLoading: boolean;
}

const initialState:IInitialState={
    paymentMethods: [],
    isLoading: true
}

export const paymentMethodsSlice = createSlice({
    name: 'paymentMethods',
    initialState: initialState,
    reducers: {
        onGetInformation: (state) => {
            state.isLoading = true;
        },
        onLoadingPaymentMethods: (state, { payload }) => {
            state.paymentMethods = payload;
            state.isLoading = false;
        },
        onSavingPaymentMethods: (state, { payload }) => {
            state.paymentMethods.push(payload);
            state.isLoading = false;
        },
        onDeletingPaymentMethod: (state, { payload }) => {
            state.paymentMethods = state.paymentMethods.filter((p: IPaymentMethod) => p.paymentMethodId !== payload );
            state.isLoading = false;
        },
    }
})

export const { 
    onLoadingPaymentMethods, 
    onGetInformation, 
    onSavingPaymentMethods, 
    onDeletingPaymentMethod 
} = paymentMethodsSlice.actions; 