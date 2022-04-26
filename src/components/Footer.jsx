import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <React.Fragment>
      <div className="instagram">
        <h2 className="instagram__name"><a className="instagram__title" href="">FOLLOW ON INSTAGRAM</a></h2>
        <div className="instagram__gallery">
          <a className="instagram__img instagram__img_1" href="https://www.instagram.com/p/CLY5JTJBUXI/"></a>
          <a className="instagram__img instagram__img_2" href="https://www.instagram.com/p/CLY5HcJhWkn/"></a>
          <a className="instagram__img instagram__img_3" href="https://www.instagram.com/p/CLY5F3Sh998/"></a>
          <a className="instagram__img instagram__img_4" href="https://www.instagram.com/p/CLY5EBPBz5H/"></a>
          <a className="instagram__img instagram__img_5" href="https://www.instagram.com/p/CLY5CFXB6DJ/"></a>
          <a className="instagram__img instagram__img_6" href="https://www.instagram.com/p/CLY5AFohmSJ/"></a>
        </div>
      </div>

      <footer className="footer">
        <div className="first-block">
          <div className="social">
            <a className="social__item" href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                <use xlinkHref="i/favorites.min.svg#icon-facebook-f" />
              </svg>
            </a>
            <a className="social__item" href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                <use xlinkHref="i/favorites.min.svg#icon-instagram-new-2" />
              </svg>
            </a>
            <a className="social__item" href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                <use xlinkHref="i/favorites.min.svg#icon-twitter" />
              </svg>
            </a>
            <a className="social__item" href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                <use xlinkHref="i/favorites.min.svg#icon-pinterest" />
              </svg>
            </a>
            <a className="social__item" href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                <use xlinkHref="i/favorites.min.svg#icon-behance" />
              </svg>
            </a>
          </div>
          <p className="first-block__copyright">Lifestyle Blog & Magazine WordPress Theme</p>
        </div>

        <div className="second-block">
          <img className="second-block__img"
            src="https://www.yaffotheme.com/primary/wp-content/themes/yaffo/assets/images/logos/header-mobile/logo.png"
            alt="" />
        </div>

        <nav className="footer-nav">
          <ul className="nav">
            <Link to='/'>
              <li className="nav__item nav__link">HOME</li>
            </Link>
            <Link to='/about'>
              <li className="nav__item nav__link">ABOUT ME</li>
            </Link>
            <Link to='/shop'>
              <li className="nav__item nav__link">SHOP</li>
            </Link>
            <Link to='/contacts'>
              <li className="nav__item nav__link">CONTACTS</li>
            </Link>
          </ul>
        </nav>
      </footer>

      <a id="upBtn" className={"upBtn"} onClick={scroll} >
        <svg width="20" height="20" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8L7 2L13 8" stroke="white" strokeWidth="1.5"></path>
        </svg>
      </a>

      <div className="cookie" style={{ display: 'none' }}>
        <div className="cookie__close">
          <div className="cookie__close-chart cookie__close-chart_one"></div>
        </div>
        <p className="cookie__text">Our site uses cookies. Learn more about our use of cookies: cookie policy</p>
        <button className="cookie__btn">I accept use of cookies</button>
      </div>
    </React.Fragment>
  )
}

export default Footer