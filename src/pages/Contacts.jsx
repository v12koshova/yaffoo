import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialContactsFormState } from "../constants/constants";
import Sidebar from "../components/Sidebar";

function Contacts() {
  const [data, setData] = useState(initialContactsFormState);
  const [errors, setErrors] = useState({});
  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errors = {};
    if (!data.name) errors.name = "Name cannot be blank";
    if (!data.email) errors.email = "Email cannot be blank";
    if (!data.subject) errors.subject = "Subject cannot be blank";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setData(initialContactsFormState);
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  };
  return (
    <main>
      <div className="heading">
        <h1 className="heading__title title title--xl">Contacts</h1>
        <div className="heading__navigation">
          <Link to="/" className="heading__link">
            Home
          </Link>
          <span> / Contacts</span>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="contacts">
              <h2 className="contacts__title title title--m">
                Have any Questions?
              </h2>
              <div className="contacts__img">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/contacts.webp`}
                  alt="Sophie Blanche"
                />
              </div>
              <p className="contacts__text">
                The quietude of the country along with the abundance of natural
                marvels is incomparable as well as astounding. Intense volcanic
                and tectonic activity that happened in the past gradually led to
                the formation of distinctive land forms that are nowhere to be
                seen in any other part of this planet. Apart from{" "}
                <span>natural brilliance</span> Iceland is also known for its
                bustling night life full of parties and entertainment.
              </p>
              <p className="contacts__text">
                Contact us to find out more or how we can help you better.
              </p>

              <form onSubmit={handleSubmit} className="form">
                <div className="form__item">
                  <label htmlFor="name" className="form__label">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form__input"
                    value={data.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="form__warning">{errors.name}</p>
                  )}
                </div>
                <div className="form__item">
                  <label htmlFor="email" className="form__label">
                    Your Email (required)
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form__input"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="form__warning">{errors.email}</p>
                  )}
                </div>
                <div className="form__item">
                  <label htmlFor="subject" className="form__label">
                    Your Subject (required)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form__input"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="form__warning">{errors.subject}</p>
                  )}
                </div>
                <div className="form__item">
                  <label htmlFor="message" className="form__label">
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    type="text"
                    id="message"
                    className="form__input form__input"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__item">
                  <button className="form__btn" type="submit">
                    Send
                  </button>
                </div>
                {(errors.name || errors.email || errors.subject) && (
                  <p className="form__warning">
                    One or more fields have an error. Please check and try
                    again.
                  </p>
                )}

                {modalActive && (
                  <p className="form__modal">
                    We have received your message and will contact you soon!
                    Have a nice day :)
                  </p>
                )}
              </form>
            </div>

            <Sidebar partial />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
