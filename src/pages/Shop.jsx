import React from "react";
import Instagram from "../components/Instagram";
import { useSelector } from "react-redux";
import Product from "../components/Product";

function Shop() {
  const { products, status } = useSelector((state) => state.shop);
  
  return (
    <main>
      <div className="products">
        <div className="container">
          <div className="products__wrapper">
            {status === "success" &&
              products.map((product) => (
                <Product product={product} key={`shop-${product.id}`} />
              ))}

            {status === "loading" && <p>Loading...</p>}

            {status === "reject" && (
              <p>Shop is currently unavailable. Please try again later.</p>
            )}
          </div>
        </div>
      </div>

      <Instagram />
    </main>
  );
}

export default Shop;
