import React from "react";

function Instagram() {
  return (
    <section className="instagram">
      <div className="container container--l">
        <div className="instagram__wrapper">
          <h2 className="instagram__title">
            <a className="instagram__link" href="">
              FOLLOW ON INSTAGRAM
            </a>
          </h2>
          <div className="instagram__gallery">
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5JTJBUXI/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i.webp`} alt="Instagram image" />
            </a>
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5HcJhWkn/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i1.webp`} alt="Instagram image" />
            </a>
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5F3Sh998/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i2.webp`} alt="Instagram image" />
            </a>
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5EBPBz5H/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i3.webp`} alt="Instagram image" />
            </a>
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5CFXB6DJ/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i4.webp`} alt="Instagram image" />
            </a>
            <a
              className="instagram__img"
              href="https://www.instagram.com/p/CLY5AFohmSJ/"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/i5.webp`} alt="Instagram image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
