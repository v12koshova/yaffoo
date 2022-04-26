import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MobileCartItem from '../components/MobileCartItem'
import ProductsSideBar from '../components/ProductsSideBar'
import {removeProductItem, onApplyCoupon, onPlusQuantityProductItem, onMinusQuantityProductItem} from '../redux/actions/cart'
 
function Cart() {
  const cart = useSelector(({ cart }) => cart)
  const items = useSelector(({ cart }) => cart.items)
  const productsCart = Object.keys(items).map((key) => items[key].items[0])
  
  const dispatch = useDispatch()

  console.log('coupon = q');
  
  const onClickRemoveProduct = (id) => {
    dispatch(removeProductItem(id))
  }

  const [coupon, setCoupon] = React.useState('')

  const handleCoupon = (e) => {
    setCoupon(e.target.value)
  }

  const onClickApplyCoupon = () => {
    if (coupon === 'q') {
      dispatch(onApplyCoupon(1))
      setCoupon('')
    } else {
      dispatch(onApplyCoupon(2))
      setCoupon('')
    }
  }

  const onPlusQuantityProduct = (id) => {
    dispatch(onPlusQuantityProductItem(id))
  }
  const onMinusQuantityProduct = (id) => {
    dispatch(onMinusQuantityProductItem(id))
  }
  



  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Cart</h2>
      <h3 className="navigation"><Link className="navigation_link" to="/">Home</Link> / Cart</h3>

      <div className="wrapper wrapper_cart">
      {cart.coupon === 0 ? ''
            :
        <div className="coupon">
          
             {cart.coupon === 1 ?
            <p className="coupon__span coupon__span_success">Hello! Now you have 20% off!</p>
            : <p className="coupon__span coupon__span_error">This coupon does not exist! Try one more time</p>}
          
          
        </div>}
        {
          cart.totalCount !== 0 ?
            (<div className="cart-table">
              <div className="cart-table__head">
                <p className="cart-table__head-item cart-table__head-item_product">Product</p>
                <p className="cart-table__head-item">Price</p>
                <p className="cart-table__head-item">Quantity</p>
                <p className="cart-table__head-item">Subtotal</p>
              </div>
              <div className="cart-table__body">
 
                {
                  productsCart.map((item) => <MobileCartItem key={item.title}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    quantity={items[item.id].items.length}
                    subtotal={items[item.id].totalPrice}
                    link={item.link}
                    onClickRemoveProduct={onClickRemoveProduct} 
                    onClickPlusQuantityProduct={onPlusQuantityProduct}
                    onClickMinusQuantityProduct={onMinusQuantityProduct}
                    />)
                }

              </div>
              <div className="cart-table__footer">
                <div className="cart-table__form">
                  <input className="cart-table__item" type="text" placeholder="Coupon code" value={coupon} onChange={handleCoupon}/>
                  <button className="cart-table__btn cart-table__btn_form" onClick={onClickApplyCoupon}>Apply coupon</button>
                </div>
                
              </div>

              <div className="cart-table__val-block">
                <h2 className="cart-table__val-block cart-table__val-block_title">Cart totals</h2>
                <div className="cart-table__val-block cart-table__val-block_container">
                  <div className="cost-box cost-box_subtotal">
                    <p className="cost-box__element cost-box__element_span">Subtotal</p>
                    <p className="cost-box__element cost-box__element_price cost-box__element_price-subtotal">£{cart.totalPrice}</p>
                  </div>
                  <div className="cost-box cost-box_total">
                    <p className="cost-box__element cost-box__element_span">Total</p>
                    
                    {
                      cart.coupon ? <p className="cost-box__element cost-box__element_price cost-box__element_price-total">£{(cart.totalPrice * 0.8).toFixed(2)}</p>
                      : <p className="cost-box__element cost-box__element_price cost-box__element_price-total">£{cart.totalPrice}</p>
                    }
                    
                  </div>
    
                  <Link to='/checkout' className="cart-table__button">
                    <button className="cart-table__btn cart-table__btn_checkout">Proceed to checkout</button></Link>
                </div>
              </div>

            </div>)
            : (<div className='cart-table__component'>
              <h4 className='cart-table__notice'>Your cart is currently empty.</h4>
              <Link to='/shop' className='cart-table__btn-box'>
                <button className='cart-table__btn cart-table__btn_notice'>return to shop</button>
              </Link>
            </div>)

            
        }
        <ProductsSideBar />
      </div>
    </div>
  )
}

export default Cart