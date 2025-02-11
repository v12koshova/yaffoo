import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        subtotal: 0,
        total: 0,
        isCoupon: false
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.product.id)

            const price = action.payload.product.discount === 0 ? (+action.payload.product.price).toFixed(2) : (action.payload.product.price - (action.payload.product.price * action.payload.product.discount / 100)).toFixed(2)

            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    price,
                    quantity: state.products[index].quantity + +action.payload.quantity
                }
            }  else {
                state.products.push({...action.payload.product, price, quantity: action.payload.quantity})
            }

            const amount = (+state.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)).toFixed(2)
            state.subtotal = amount
            state.total = amount
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)

            const amount = (+state.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)).toFixed(2)
            state.subtotal = amount
            state.total = amount

            if (amount === "0.00") {
                state.isCoupon = false
            }
        },
        changeQuantity: (state, action) => {
            if (!action.payload.value) return 

            const index = state.products.findIndex(product => product.id === action.payload.id)

            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    quantity: action.payload.value
                }

                const amount = (+state.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)).toFixed(2)
                state.subtotal = amount
                state.total = amount
            }  else {
                throw new Error
            }
            

            const amount = (+state.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)).toFixed(2)
            state.subtotal = amount
            state.total = amount
        },

        applyCoupon: (state) => {
            state.total = (state.total - state.total * 0.2).toFixed(2);
            state.isCoupon = true
        }
    }
}) 

export const { addToCart, removeItem, changeQuantity, applyCoupon } = cartSlice.actions
export default cartSlice.reducer