import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('shop/fetchProducts', async () => {
    const response = await fetch('https://679c91fc87618946e6529a2b.mockapi.io/products');
    const data = await response.json();
    return data;
})

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                if (action.payload === 'Not found') {
                    state.status = 'reject'
                } else {
                    state.status = 'success';
                    state.products = action.payload;
                }
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'reject'
            })
    }
})


export default shopSlice.reducer