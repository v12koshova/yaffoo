import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search({ searchBar, setSearchBar }) {
  const searchInputRef = useRef();
  const products = useSelector((state) => state.shop.products);
  const posts = useSelector((state) => state.posts.posts);
  let [search, setSearch] = useState([]);

  function handleSearch() {
    if (!searchInputRef.current.value.length) {
      setSearch([]);
      return;
    }
    const searchPosts = posts.filter((post) =>
      post.title
        .toLowerCase()
        .includes(searchInputRef.current.value.toLowerCase())
    );
    const searchProducts = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchInputRef.current.value.toLowerCase())
    );
    setSearch({ posts: [...searchPosts], products: [...searchProducts] });
  }

  function handleSearchBar(e) {
    if (e.target.closest('.search__results') || e.target.classList.contains('search__button') || e.target.classList.contains('search')) {
      setSearchBar(false)
    }
  }

  return ReactDOM.createPortal(
    <div
      className={`search ${searchBar ? "search--opened" : ""}`}
      onClick={handleSearchBar}
    >
      <div className="search__form">
        <div className="container">
          <div className="search__heading">
            <label className="search__label" htmlFor="search">
              <span>Enter Keywords...</span>
            </label>
            <input
              className="search__input"
              id="search"
              type="text"
              placeholder="Enter Keywords..."
              ref={searchInputRef}
              onChange={handleSearch}
            />
            <button className="search__button"></button>
          </div>
          <div className="search__results">
            {Object.keys(search).map((key) =>
              search[key].map((item) => (
                <Link
                  to={key === "posts" ? `/post/${item.id}` : `/shop/${item.id}`}
                  className="search__item"
                  key={`${key}-${item.id}`}
                >
                  <div className="search__info">
                    <div className="search__img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="search__title">{item.title}</div>
                  </div>
                  <p className="search__tag tag">{item.category}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Search;
