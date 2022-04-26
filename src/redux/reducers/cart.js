const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    coupon: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CART': {
            const currentProductsItems = !state.items[action.payload.id] ? [action.payload] :
            [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProductsItems,
                    totalPrice: getTotalPrice(currentProductsItems)
                }
            };

            const items = Object.values(newItems).map((obj) => obj.items)
            const allProducts = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allProducts)

            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            }
        }

        case 'ON_ORDER': {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case 'REMOVE_PRODUCT_ITEM': {
            const newItems = {
                ...state.items
            }

            const totalPrice = state.totalPrice - newItems[action.payload].totalPrice
            // console.log(newItems[action.payload].items[0].price);
            const totalCount = state.totalCount - newItems[action.payload].items.length
            
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case 'ON_APPLY_COUPON': {
            return {
                ...state,
                coupon: action.payload
            }
        }
        case 'ON_ADD_QUANTITY': {
            const currentProductsItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
            
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: currentProductsItems,
                    totalPrice: getTotalPrice(currentProductsItems)
                }
            };

            const items = Object.values(newItems).map((obj) => obj.items)
            const allProducts = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allProducts)

            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            }
        }
        case 'ON_MINUS_QUANTITY': {
            const oldCartItems = state.items[action.payload].items

            const newCartItems = oldCartItems.length > 1 ? oldCartItems.slice(1) : oldCartItems
            
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newCartItems,
                    totalPrice: getTotalPrice(newCartItems)
                }
            };

            const items = Object.values(newItems).map((obj) => obj.items)
            const allProducts = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allProducts)

            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            }
        }
        default:
            return state;
    }
}

export default cart