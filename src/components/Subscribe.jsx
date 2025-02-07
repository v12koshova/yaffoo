import React from "react";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <div className="subscribe__text">
            <h2 className="subscribe__title title title--s">Join Our Newsletter</h2>
            <p className="subscribe__description">
              Enter your email and we'll keep you posted with news and updates!
            </p>
          </div>
          <div className="subscribe__form">
            <input
              className="subscribe__input"
              type="email"
              name=""
              id=""
              placeholder="Enter your email..."
            />
            <button className="subscribe__btn" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
