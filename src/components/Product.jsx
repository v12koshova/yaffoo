import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/features/cartSlice";
import { Link } from "react-router-dom";

function Product({ product }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.products);

    const button = cart.findIndex(cartEl => cartEl.id === product.id)

    const price = product.discount === 0 ? product.price : product.price - (product.price * product.discount / 100)

  return (
    <div className="product">
      <Link className="product__link" to={product.id}><h2 className="product__title">{product.title}</h2></Link>
      <p className="product__price">
        {product.discount !== 0 && (
          <span className="product__price product__price--old">${Number(product.price).toFixed(2)}</span>
        )}
        ${(+price).toFixed(2)}
      </p>
      <Link to={product.id} className="product__img">
        <img src={product.image} alt={product.title} />
      </Link>

      {
        button === -1 ? (
          <button className="product__button" onClick={() => dispatch(addToCart({product, quantity: 1}))}>
        Add to card
      </button>
        ) : (
          <Link to='/cart' className="product__link button button--full">View cart</Link>
        )
      }
      

      {
        product.discount !== 0 && (
            <div className="product__sale">
                <p className="product__inscr">Sale!</p>
            </div>
        )
      }
      
    </div>
  );
}

export default Product;
