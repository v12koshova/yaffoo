import React, { useEffect, useRef } from "react";
import Instagram from "../components/Instagram";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../app/features/cartSlice";
import { fetchProducts } from "../app/features/shopSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const products = useSelector((state) => state.shop.products);

  const { id } = useParams();

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts()); // Отримуємо товари, якщо їх немає
    }
  }, [dispatch, products.length]);
  
  const product = products.length ? products.find((p) => p.id === id) : null;

  if (!product) {
    return <p>Loading...</p>; // Уникаємо NaN, поки товар не знайдено
  }

  const price =
    product.discount === 0
      ? product.price
      : product.price - (product.price * product.discount) / 100;

  return (
    <>
      <div className="single-product">
        <div className="container">
          <div className="single-product__wrapper">
            {product && (
              <>
                <div className="single-product__image">
                  <img src={product.image} alt="" />
                </div>
                <div className="single-product__content">
                  <h1 className="single-product__title title title--m">
                    {product.title}
                  </h1>
                  <p className="single-product__price">
                    {product.discount !== 0 && (
                      <span className="single-product__price single-product__price--old">
                        ${Number(product.price).toFixed(2)}
                      </span>
                    )}
                    ${(+price).toFixed(2)}
                  </p>
                  <div
                    className="single-product__description"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>

                  <div className="single-product__order">
                    <input
                      type="number"
                      max="10"
                      min="1"
                      defaultValue="1"
                      ref={inputRef}
                      className="single-product__input"
                    />
                    <button
                      className="single-product__btn button"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            product,
                            quantity: inputRef.current.value,
                          })
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </>
            )}

            {
               !product && (
                <p>Loading...</p>
              )
            }
          </div>
        </div>
      </div>

      <Instagram />
    </>
  );
}

export default SingleProduct;
