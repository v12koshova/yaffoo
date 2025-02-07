import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const { products, status } = useSelector((state) => state.shop);
  const cartProducts = useSelector((state) => state.cart.products);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const total = useSelector((state) => state.cart.total);

  const initState = {
    firstName: {
      value: "",
      placeholder: "First name *",
      type: "text",
    },
    lastName: {
      value: "",
      placeholder: "Last name *",
      type: "text",
    },
    email: {
      value: "",
      placeholder: "Email address *",
      type: "email",
    },
    country: {
      value: "",
      placeholder: "Country *",
      type: "text",
    },
    street: {
      value: "",
      placeholder: "Street address *",
      type: "text",
    },
    city: {
      value: "",
      placeholder: "City *",
      type: "text",
    },
    zip: {
      value: "",
      placeholder: "ZIP Code *",
      type: "text",
    },
    phone: {
      value: "",
      placeholder: "Phone *",
      type: "tel",
    },
    message: {
      value: "",
      placeholder: "Order notes (optional)",
      type: "text",
    },
  };

  const [data, setData] = useState(initState);
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

            <aside className="sidebar">
              {status === "success" && products.length && (
                <div className="sidebar__products">
                  <p className="sidebar__title">
                    <span className="sidebar__title-span">Products</span>
                  </p>
                  <div className="sidebar-products">
                    {products.map((product) => {
                      if (product.id <= 3) {
                        const price =
                          product.discount === 0
                            ? product.price
                            : product.price -
                              (product.price * product.discount) / 100;
                        return (
                          <Link
                            key={`cart-${product.id}`}
                            to={`/shop/${product.id}`}
                            className="sidebar-products__item"
                          >
                            <div className="sidebar-products__item-info">
                              <h3 className="sidebar-products__item-title title title--xxs">
                                {product.title}
                              </h3>
                              <p className="sidebar-products__item-price">
                                {product.discount !== 0 && (
                                  <span className="sidebar-products__item-price sidebar-products__item-price--old">
                                    ${Number(product.price).toFixed(2)}
                                  </span>
                                )}
                                ${(+price).toFixed(2)}
                              </p>
                            </div>

                            <div className="sidebar-products__item-img">
                              <img src={product.image} alt="" />
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
