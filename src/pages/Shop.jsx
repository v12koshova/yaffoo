import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Products from '../components/Products'


import { addProductToCart } from '../redux/actions/cart';
import { LoadingBlock } from '../components';

function Shop() {
    const dispatch = useDispatch();
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const products = useSelector(({products}) => products.items.products)

      const handleAddProductToCart = obj => {
          dispatch(addProductToCart(obj));
      }

    return (
            <div className="products">
            {isLoaded
          ? products.map((obj) => (<Products {...obj} key={obj.title} onClickAddProduct={handleAddProductToCart}/>))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
                
            </div>

    )
}

export default Shop