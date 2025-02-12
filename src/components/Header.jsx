import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { removeItem } from "../app/features/cartSlice";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  const subtotal = useSelector((state) => state.cart.subtotal);
  const [cartCounter, setCartCounter] = useState(0);
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    const counter = cartProducts.reduce(
      (acc, product) => acc + +product.quantity,
      0
    );
    setCartCounter(counter);
  }, [cartProducts]);

  return (
    <header className="header" id="home" data-scroll-header>
      <div className="container">
        <div className="header__line header__line--base">
          <h1 className="header__title">Yaffo</h1>
          <nav className="header__menu">
            <ul className="header__nav nav">
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="about">
                  ABOUT ME
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="shop" className="nav__link">
                  SHOP
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="contacts">
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header__links links">
            <div className="header__social social">
              <a className="social__item social__item--facebook" href=""></a>
              <a className="social__item social__item--instagram" href=""></a>
              <a className="social__item social__item--twitter" href=""></a>
              <a className="social__item social__item--pinterest" href=""></a>
            </div>
            <div className="header__cart">
              <Link to="cart" className="header__cart-link cart-link">
                <span className="header__cart-count cart-link__count">{cartCounter}</span>
              </Link>
              <div className="cart cart--header">
                {!cartProducts.length ? (
                  <p>No products in the cart.</p>
                ) : (
                  <table className="cart__table cart-table">
                    <tbody>
                      {cartProducts.map((product) => (
                        <tr
                          className="cart-table__item"
                          key={`header-${product.id}`}
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
                                  <td>${product.price}</td>
                                  <td>
                                    <span>x</span>
                                    <span>{product.quantity}</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td colSpan="3" className="cart-table__subtotal">
                          <span className="cart-table__bold">Subotal:</span>
                          <span>${(+subtotal).toFixed(2)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <div className="cart-table__buttons">
                            <Link to="cart" className="cart-table__btn button">
                              View cart
                            </Link>
                            <Link
                              to="checkout"
                              className="cart-table__btn button"
                            >
                              Checkout
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header__line">
          <div className="header__side-menu">
            <button
              className="header__side-menu-button"
              onClick={() => setMenu((menuState) => !menuState)}
            ></button>
            <Menu state={menu} setMenu={setMenu} cartCounter={cartCounter} />
          </div>
          <Link to="/" className="header__logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.webp`}
              alt="Yaffoo logo"
              className="header__logo-img"
            />
          </Link>
          <div className="header__search">
            <button
              className="header__search-button"
              onClick={() => setSearchBar(true)}
            ></button>

            <Search setSearchBar={setSearchBar} searchBar={searchBar} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
