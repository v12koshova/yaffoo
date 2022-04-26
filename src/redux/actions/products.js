export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
} )

export const fetchProducts = () => dispatch => {
  dispatch(setLoaded(false))
    fetch('http://localhost:3000/data_base_shop.json')
      .then((r) => r.json())
      .then(data => 
        dispatch(setProducts(data)))
}

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
})