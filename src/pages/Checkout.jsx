import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarShop from "../components/SidebarShop";
import { initialCheckoutFormState } from "../constants/constants";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.products);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);

  const [data, setData] = useState(initialCheckoutFormState);
  const [errors, setErrors] = useState({});
  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    }));
  };

  const validate = () => {
    const errors = {};
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.country ||
      !data.street ||
      !data.city ||
      !data.state ||
      !data.zip ||
      !data.phone
    )
      errors.name =
        "One or more fields are empty or have an error. Please check and try again.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      // dispatch(orderProducts())
      setModalActive(true);
    }
  };

  return (
    <main>
      <div className="heading">
        <h1 className="heading__title title title--xl">Checkout</h1>
        <div className="heading__navigation">
          <Link to="/" className="heading__link">
            Home
          </Link>
          <span> / Checkout</span>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="main__wrapper">
            {!modalActive && (
              <div className="checkout">
                <div className="order">
                  <h2 className="order__title">Your order</h2>

                  <table className="order__cart-table cart-table">
                    <thead className="cart-table__head">
                      <tr>
                        <th className="cart-table__head-item">Product</th>
                        <th className="cart-table__head-item">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((product) => (
                        <tr className="cart-table__item" key={product.id}>
                          <td>
                            <span>{product.title}</span>
                            <span className="cart-table__bold">
                              x{product.quantity}
                            </span>
                          </td>
                          <td>${product.price}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="cart-table">
                      <tr className="cart-table__item">
                        <td>Subtotal</td>
                        <td>${subtotal}</td>
                      </tr>
                      <tr className="cart-table__item">
                        <td>Total</td>
                        <td className="cart-table__bold">${total}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  {Object.keys(data).map((el) => (
                    <div className="form__item" key={el}>
                      <label htmlFor={el} className="form__label">
                        {data[el].placeholder}
                      </label>
                      <input
                        type={data[el].type}
                        id={data[el]}
                        name={el}
                        className="form__input"
                        value={data[el].value}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  {errors.name && (
                    <p className="form__warning">{errors.name}</p>
                  )}

                  <div className="form__item">
                    <button className="form__btn" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            )}

            {modalActive && (
              <div className="modal modal_active">
                <p className="modal__inscription">
                  {
                    "We have received your order and will contact you soon! Have a nice day :)"
                  }
                </p>
                <Link to="/" className="modal__button">
                  Go home
                </Link>
              </div>
            )}

            <SidebarShop />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
