import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeQuantity,
  removeItem,
  applyCoupon,
} from "../app/features/cartSlice";
import SidebarShop from "../components/SidebarShop";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);
  const isCoupon = useSelector((state) => state.cart.isCoupon);

  const couponInputRef = useRef();

  const [coupon, setCoupon] = useState({
    couponState: "",
    couponMessage: "",
  });

  useEffect(() => {
    if (isCoupon) {
      setCoupon({
        couponState: "success",
        couponMessage: "Coupon has been applied",
      });
    }
  }, [isCoupon]);

  function handleCoupon(e) {
    e.preventDefault();
    if (couponInputRef.current.value !== "h") {
      setCoupon({
        couponState: "error",
        couponMessage: `Coupon "${couponInputRef.current.value}" does not exist!`,
      });
    } else if (isCoupon && couponInputRef.current.value === "h") {
      setCoupon({
        couponState: "error",
        couponMessage: "Coupon has already been applied.",
      });
    } else if (!isCoupon && couponInputRef.current.value === "h") {
      setCoupon({
        couponState: "success",
        couponMessage: "Coupon has been applied",
      });
      dispatch(applyCoupon());
    } else {
      setCoupon({
        couponState: "error",
        couponMessage: "Something went wrong, please try again or contact us.",
      });
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
                {coupon.couponState !== "" && (
                  <div className="notification">
                    <p
                      className={`notification__span notification__span--${coupon.couponState}`}
                    >
                      {coupon.couponMessage}
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
                              alt={product.title}
                            />
                          </Link>
                        </td>
                        <td>
                          <table>
                            <tbody>
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
                            </tbody>
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

            <SidebarShop />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
