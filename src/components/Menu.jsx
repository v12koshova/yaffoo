import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { pages } from "../constants/constants";

function Menu({ state, setMenu, cartCounter }) {
  const handleClose = (e) => {
    if (
      e.target.closest(".side-menu--opened") &&
      !e.target.classList.contains("side-menu__content")
    ) {
      setMenu(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`side-menu ${state ? "side-menu--opened" : ""}`}
      onClick={handleClose}
    >
      <div className="side-menu__content">
        <div className="side-menu__top">
          <Link to="/" className="side-menu__logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.webp`}
              alt="Yaffoo logo"
            />
          </Link>

          <ul className="side-menu__nav">
            {Object.keys(pages).map((item) => (
              <li key={item} className="side-menu__item">
                <Link className="side-menu__link" to={pages[item]}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button className="side-menu__button"></button>
        </div>
        <div className="side-menu__bottom links">
          <SocialMedia attr="side-menu" />
          <Link to="cart" className="side-menu__cart-link cart-link">
            <span className="side-menu__cart-count cart-link__count">
              {cartCounter}
            </span>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Menu;
