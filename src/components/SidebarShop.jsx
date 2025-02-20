import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SidebarShop() {
  const { products, status } = useSelector((state) => state.shop);

  return (
    <aside className="sidebar">
              {status === "success" && products.length && (
                <div className="sidebar__products">
                  <p className="sidebar__title">
                    <span className="sidebar__title-span">Products</span>
                  </p>
                  <div className="sidebar-products">
                    {products.slice(0, 3).map((product) => {
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
                              <img src={product.image} alt={product.title} />
                            </div>
                          </Link>
                        );
                    })}
                  </div>
                </div>
              )}
            </aside>
  )
}

export default SidebarShop