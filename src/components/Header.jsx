import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { removeProductItem } from '../redux/actions/cart'

function Header({ articles }) {
  const cart = useSelector(({ cart }) => cart)
  const items = useSelector(({ cart }) => cart.items)
  const products = Object.keys(items).map((key) => items[key].items[0])
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')

  let articlesTitle = []

  for (let value of articles) {
    articlesTitle.push({ title: value.title, photo: value.link, tag: 'post' })
  }
  for (let value of products) {
    articlesTitle.push({ title: value.title, photo: value.link, tag: 'product' })
  }
  const searchPostsValue = (e) => {
    setSearchValue(e.target.value)
  }

  const searchResults = articlesTitle.filter((data) => {
    return data.title.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())
  })

  const onClickRemoveProduct = (id) => {
    dispatch(removeProductItem(id))
  }

  const refDarkOverlay = useRef(null)
  const refMenu = useRef(null)
  const refSearch = useRef(null)

  const setMenu = () => {
    refMenu.current.classList.toggle('visible')
    refDarkOverlay.current.classList.toggle('visible')
  }
  const setSearch = () => {
    refSearch.current.classList.toggle('active')
  }

  return (
    <React.Fragment>
      <header className="header" data-scroll-header>
        <h1 className="title">Yaffo</h1>
        <nav className="header-nav">
          <ul className="nav">
            <Link to='/' key='q'>
              <li className="nav__item nav__link">HOME</li>
            </Link>
            <Link to='/about' key='w'>
              <li className="nav__item nav__link">ABOUT ME</li>
            </Link>
            <Link to='/shop' key='e'>
              <li className="nav__item nav__link">SHOP</li>
            </Link>
            <Link to='/contacts' key='r'>
              <li className="nav__item nav__link">CONTACTS</li>
            </Link>
          </ul>
        </nav>
        <div className="social social_header">
          <a className="social__item social__item_header" href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="25px">
              <use xlinkHref="i/sprite.svg#facebook" />
            </svg>
          </a>
          <a className="social__item social__item_header" href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="23px">
              <use xlinkHref="i/sprite.svg#instagram" />
            </svg>
          </a>
          <a className="social__item social__item_header" href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
              <use xlinkHref="i/sprite.svg#twitter" />
            </svg>
          </a>
          <a className="social__item social__item_header" href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px">
              <use xlinkHref="i/sprite.svg#pinterest" />
            </svg>
          </a>
          <a className="social__item social__item_header" href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="27px" width="25px">
              <use xlinkHref="i/sprite.svg#behance" />
            </svg>
          </a>
          <div className="cart-wrap" id="cart-wrap" data-cart="cart">
            <Link to='/cart'>
              <div className="cart" id="checkout">
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="23px">
                  <use xlinkHref="i/sprite.svg#cart" />
                </svg>
                <span className="cart__count">{cart.totalCount}</span>
              </div>
            </Link>
            <div id="cart_content">
              <section className="products-cart" id="products-cart">

                {
                  products.length === 0 ?
                    <h2>Cart is empty</h2>
                    : (
                      <React.Fragment>
                        <div className="cart-items" data-cart="cart">
                          {products.map((obj) => <CartItem
                            quantity={items[obj.id].items.length}
                            key={obj.title}
                            id={obj.id}
                            title={obj.title}
                            price={obj.price}
                            link={obj.link}
                            sale={obj.sale}
                            onClickRemoveProduct={onClickRemoveProduct} />)}
                        </div>
                        <div className="cart-total">
                          <p className="cart-total__title">Subotal: <span className="cart-total__price">£{cart.totalPrice}</span></p>
                        </div>
                        <div className="cart-buttons">
                          <Link to='/cart'>
                            <button href="cart.html" className="cart-buttons__btn cart-buttons__btn_view-cart" type="button">View cart</button></Link>
                          <Link to='/checkout'>
                            <button href="checkout.html" className="cart-buttons__btn cart-buttons__btn_chekout" type="button">Checkout</button>
                          </Link>
                        </div></React.Fragment>)
                }


              </section>
            </div>
          </div>
        </div>
      </header>

      <div className="sec-head">
        <button href="#" className="menu-button" onClick={setMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="dark-overlay" ref={refDarkOverlay} onClick={setMenu}></div>
        <div className="menu" ref={refMenu}>
          <div className="menu-wrap">
            <div className="wrap">
              <button href="#" className="menu-button in-mobile active" onClick={setMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="menu__logo">
                <img className="menu__img"
                  src="https://www.yaffotheme.com/primary/wp-content/themes/yaffo/assets/images/logos/header-mobile/logo.png"
                  alt="" />
              </div>
            </div>
            <nav className="menu__nav" onClick={setMenu}>
              <ul className="menu__items">
                <Link to='/'><li className="menu__item menu__link">Home</li></Link>
                <Link to='/about'><li className="menu__item menu__link">About me</li></Link>
                <Link to='/shop'><li className="menu__item menu__link">Shop</li></Link>
                <Link to='/contacts'><li className="menu__item menu__link">Contacts</li></Link>
              </ul>
            </nav>
            <div className="mark mark_menu">
              <div className="text text_menu">
                <h3 className="text__title text__title_menu">Join Our Newsletter</h3>
                <p className="text__description text__description_menu">Enter your email and we'll keep you posted with news
                  and updates!</p>
              </div>
              <div className="form form_menu">
                <input className="form__input form__input_menu" type="email" name="" id="" placeholder="Enter your email..." />
                <button className="form__btn form__btn_menu">Subscribe</button>
              </div>
            </div>
            <div className="social social_menu">
              <a className="social__item" href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="25px">
                  <use xlinkHref="i/sprite.svg#facebook" />
                </svg>
              </a>
              <a className="social__item" href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="23px">
                  <use xlinkHref="i/sprite.svg#instagram" />
                </svg>
              </a>
              <a className="social__item" href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                  <use xlinkHref="i/sprite.svg#twitter" />
                </svg>
              </a>
              <a className="social__item" href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px">
                  <use xlinkHref="i/sprite.svg#pinterest" />
                </svg>
              </a>
              <a className="social__item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="27px" width="25px">
                  <use xlinkHref="i/sprite.svg#behance" />
                </svg>
              </a>
              <Link to='/cart' className="cart" onClick={setMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="23px">
                  <use xlinkHref="i/sprite.svg#cart" />
                </svg>
                <span className="cart__count cart__count_cart-page">{cart.totalCount}</span>
              </Link>
              <div></div>
            </div>
          </div>
        </div>


        <div className="logo">
          <img className="logo__img"
            src="https://www.yaffotheme.com/primary/wp-content/themes/yaffo/assets/images/logos/header-mobile/logo.png"
            alt="" />
        </div>
        <div className="search" onClick={setSearch}>
          <svg id="search" dataid="searchBtn" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px">
            <use xlinkHref="i/sprite.svg#search" />
          </svg>
        </div>
        <form className="search-form " id="search-form" ref={refSearch}>
          <input className="search-form__input" dataid="search-form__input" type="search" name="" id=""
            placeholder="Enter Keywords" onChange={searchPostsValue} value={searchValue} />
          <svg className="search-form__span" dataid="searchBtn" xmlns="http://www.w3.org/2000/svg" height="17px" width="17px" onClick={setSearch}>
            <use xlinkHref="i/sprite.svg#close" />
          </svg>
          <div className="search-form__results">
            <ul className="search-form__results-wrap">

              { searchResults && searchResults.length < articlesTitle.length ? searchResults.map((data, index) =>  {
                return (
                <li className="post post_search" key={index}>
                    <a href="" className="post post_search">
                        <h3 className="post__title post__title_search">{data.title}</h3>
                        <img className="post__img post__img_search" src={data.photo} />
                        <p className="post__tag post__tag_search post__tag_${data.tag}">{data.tag}</p>
                    </a>
                </li>
            )}) :  <li className="post post_search">
            <h3 className="post__title post__title_search post__title_user-value">{searchValue}</h3>
        </li>
            
              
              }
            </ul>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Header