
import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        addToBasket: (state, action) => {
        
        },
        emptyBasket: (state) => {
        state.items = [];
        },
        
    },
});

export const { addToBasket, emptyBasket } = basketSlice.actions;

export default basketSlice.reducer;
