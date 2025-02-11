import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Menu({ state, setMenu }) {
  const handleClose = (e) => {
    if (
      e.target.classList.contains("side-menu") ||
      e.target.classList.contains("side-menu__link") ||
      e.target.classList.contains("side-menu__button")
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
        <div className="side-menu__logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.webp`}
            alt="Yaffoo logo"
          />
        </div>

        <ul className="side-menu__nav">
          <li className="side-menu__item">
            <Link className="side-menu__link" to="/">
              HOME
            </Link>
          </li>
          <li className="side-menu__item">
            <Link className="side-menu__link" to="about">
              ABOUT ME
            </Link>
          </li>
          <li className="side-menu__item">
            <Link to="shop" className="side-menu__link">
              SHOP
            </Link>
          </li>
          <li className="side-menu__item">
            <Link className="side-menu__link" to="contacts">
              CONTACTS
            </Link>
          </li>
        </ul>

        <button className="side-menu__button"></button>
      </div>
    </div>,
    document.body
  );
}

export default Menu;



