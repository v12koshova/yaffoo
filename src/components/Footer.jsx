import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social">
            <div className="social">
              <a className="social__item social__item--facebook" href=""></a>
              <a className="social__item social__item--instagram" href=""></a>
              <a className="social__item social__item--twitter" href=""></a>
              <a className="social__item social__item--pinterest" href=""></a>
              <a className="social__item social__item--behance" href=""></a>
            </div>
            <p className="footer__copyright">
              Lifestyle Blog & Magazine WordPress Theme
            </p>
          </div>

          <div className="footer__logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.webp`}
              alt="Yaffoo logo"
              className="header__logo-img"
            />
          </div>

          <nav className="footer__menu">
            <ul className="footer__nav nav">
              <li className="nav__item">
                <a className="nav__link" href="index.html">
                  HOME
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="shop.html">
                  SHOP
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="about.html">
                  ABOUT ME
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="contacts.html">
                  CONTACTS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
