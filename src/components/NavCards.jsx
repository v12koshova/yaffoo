import React from 'react'
import { Link } from 'react-router-dom'

function NavCards() {
  return (
    <section className="nav-cards">
      <div className="container">
        <div className="nav-cards__wrapper">
          <Link to="about" className="nav-cards__item nav-card">
              <h3 className="nav-card__title">About me</h3>
              <div className="nav-card__img">
                <img
                  width="768"
                  height="584"
                  src={`${process.env.PUBLIC_URL}/assets/about-me.webp`}
                  alt="About me"
                />
            </div>
          </Link>
          <Link to="shop" className="nav-cards__item nav-card">
              <h3 className="nav-card__title">My store</h3>
              <div className="nav-card__img">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/waterfall.webp`}
                  width="768"
                  height="584"
                  alt="My store"
                />
            </div>
          </Link>
          <a href="https://www.instagram.com/nebo.theme/" className="nav-cards__item nav-card">
              <h3 className="nav-card__title">Instagram</h3>
              <div className="nav-card__img">
                <img
                  width="768"
                  height="584"
                  src={`${process.env.PUBLIC_URL}/assets/polaroid.webp`}
                  alt="Instagram"
                />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NavCards