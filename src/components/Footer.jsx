import React from "react";
import { socialMediaFull } from "../constants/constants";
import Navidation from "./Navidation";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social">
            <div className="social">
              {Object.keys(socialMediaFull).map((sm) => (
                <a key={sm} className={`social__item social__item--${sm}`} href={socialMediaFull[sm]}></a>
              ))}
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
            <Navidation attr="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
