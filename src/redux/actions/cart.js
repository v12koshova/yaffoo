export const addProductToCart = (obj) => ({
    type: 'ADD_PRODUCT_CART',
    payload: obj,
})
export const orderProducts = () => ({
    type: 'ON_ORDER',
})
export const removeProductItem = (id) => ({
    type: 'REMOVE_PRODUCT_ITEM',
    payload: id,
})
export const onApplyCoupon = (id) => ({
    type: 'ON_APPLY_COUPON',
    payload: id,
})

export const onPlusQuantityProductItem = (id) => ({
    type: 'ON_ADD_QUANTITY',
    payload: id,
})
export const onMinusQuantityProductItem = (id) => ({
    type: 'ON_MINUS_QUANTITY',
    payload: id,
})