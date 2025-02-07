import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeQuantity,
  removeItem,
  applyCoupon,
} from "../app/features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const {products, status} = useSelector((state) => state.shop);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);

  const couponInputRef = useRef();

  const [coupon, setCoupon] = useState();

  function handleCoupon(e) {
    e.preventDefault();
    if (couponInputRef.current.value === "h") {
      setCoupon("success");
      dispatch(applyCoupon());
    } else {
      setCoupon("reject");
    }
  }

  return (
    <main>
      <div className="heading">
        <h1 className="heading__title title title--xl">Cart</h1>
        <div className="heading__navigation">
          <Link to="/" className="heading__link">
            Home
          </Link>
          <span> / Cart</span>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <div className="main__wrapper">
            {cart.length ? (
              <div className="cart">
                {coupon && coupon === "success" && (
                  <div className="notification">
                    <p className="notification__span notification__span--success">
                      Coupon has been applied
                    </p>
                  </div>
                )}

                {coupon && coupon === "reject" && (
                  <div className="notification">
                    <p className="notification__span notification__span--error">
                      Coupon "{couponInputRef.current.value}" does not exist!
                    </p>
                  </div>
                )}

                <table className="cart__table cart-table">
                  <thead className="cart-table__head">
                    <tr>
                      <th colSpan="3" className="cart-table__head-item">
                        Product
                      </th>
                      <th className="cart-table__head-item">Price</th>
                      <th className="cart-table__head-item">Quantity</th>
                      <th className="cart-table__head-item">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr
                        className="cart-table__item"
                        key={`cart-${product.id}`}
                      >
                        <td>
                          <button
                            className="cart-table__item-remove"
                            onClick={() => dispatch(removeItem(product.id))}
                          ></button>
                        </td>
                        <td>
                          <Link to={`/shop/${product.id}`}>
                            <img
                              className="cart-table__item-img"
                              src={product.image}
                              alt=""
                            />
                          </Link>
                        </td>
                        <td>
                          <table>
                            <tr>
                              <td colSpan="2">
                                <Link
                                  to={`/shop/${product.id}`}
                                  className="cart-table__link"
                                >
                                  {product.title}
                                </Link>
                              </td>
                            </tr>
                            <tr className="cart-table__element cart-table__element--s">
                              <td>{product.price}</td>
                              <td>
                                <span>x</span>
                                <input
                                  type="number"
                                  max="10"
                                  min="1"
                                  value={product.quantity}
                                  name=""
                                  id=""
                                  onChange={(e) =>
                                    dispatch(
                                      changeQuantity({
                                        id: product.id,
                                        value: e.target.value,
                                      })
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td className="cart-table__element cart-table__element--l">
                          ${product.price}
                        </td>
                        <td className="cart-table__element cart-table__element--l">
                          <input
                            type="number"
                            max="10"
                            min="1"
                            value={product.quantity}
                            name=""
                            id=""
                            onChange={(e) =>
                              dispatch(
                                changeQuantity({
                                  id: product.id,
                                  value: e.target.value,
                                })
                              )
                            }
                          />
                        </td>
                        <td className="cart-table__element cart-table__element--l">
                          ${(product.price * product.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="6">
                        <div className="cart-table__coupon-form">
                          <form
                            className="cart-table__form"
                            onSubmit={handleCoupon}
                          >
                            <input
                              className="cart-table__input"
                              type="text"
                              placeholder="Coupon code"
                              ref={couponInputRef}
                            />
                            <button className="cart-table__btn button">
                              Apply coupon
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <div className="cart__totals cart-totals">
                  <h2 className="cart-totals__title title title--xxs">
                    Cart totals
                  </h2>
                  <div className="cart-totals__table">
                    <div className="cart-totals__table-row">
                      <p className="cart-totals__item cart-totals__item--head">
                        Subtotal
                      </p>
                      <p className="cart-totals__item">${subtotal}</p>
                    </div>
                    <div className="cart-totals__table-row">
                      <p className="cart-totals__item cart-totals__item--head">
                        Total
                      </p>
                      <p className="cart-totals__item cart-totals__item--bold">
                        ${total}
                      </p>
                    </div>
                  </div>
                </div>

                {subtotal !== "0.00" ? (
                  <Link
                    to="/checkout"
                    className="cart__btn button button--full"
                  >
                    Proceed to checkout
                  </Link>
                ) : (
                  <button disabled className="cart__btn button button--full">
                    Proceed to checkout
                  </button>
                )}
              </div>
            ) : (
              <div className="cart">
                <div className="notification">
                  <p className="notification__span notification__span--empty">
                    Your cart is currently empty.
                  </p>
                </div>
                <Link to="/shop" className="cart__btn button">
                  Return to shop
                </Link>
              </div>
            )}

            <aside className="sidebar">
            {status === 'success' && products.length && (
              <div className="sidebar__products">
                <p className="sidebar__title">
                  <span className="sidebar__title-span">Products</span>
                </p>
                <div className="sidebar-products">
                  {products.map((product) => {
                    if (product.id <= 3) {
                      const price =
                        product.discount === 0
                          ? product.price
                          : product.price -
                            (product.price * product.discount) / 100;
                      return (
                        <Link key={`cart-${product.id}`} to={`/shop/${product.id}`} className="sidebar-products__item">
                          <div className="sidebar-products__item-info">
                            <h3 className="sidebar-products__item-title title title--xxs">
                              {product.title}
                            </h3>
                            <p className="sidebar-products__item-price">
                              {product.discount !== 0 && (
                                <span className="sidebar-products__item-price sidebar-products__item-price--old">
                                  ${Number(product.price).toFixed(2)}
                                </span>
                              )}
                              ${(+price).toFixed(2)}
                            </p>
                          </div>

                          <div className="sidebar-products__item-img">
                            <img src={product.image} alt="" />
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
