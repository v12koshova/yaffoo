import React from 'react'
import { useSelector } from 'react-redux';

function CartItem({ id, title, price, link, onClickRemoveProduct, quantity }) {
    const handleRemoveProduct = () => {
        onClickRemoveProduct(id)
    }
    return (
        <div className="cart-item" >
            <button className="cart-item__element cart-item__element_remove"
                onClick={handleRemoveProduct}
            >x</button>
            <div className="cart-item__element cart-item__element_description">
                <h3 className="cart-item__element cart-item__element_title">{title}</h3>
                <div className="cart-item__element cart-item__element_sub">
                    <p className="cart-item__element cart-item__element_quantity" type="number" value="1">{quantity}</p>
                    <p className='cart-item__element cart-item__element_cross'>×</p>
                    <p className="cart-item__element cart-item__element_price">{price}</p>
                </div>
            </div>
            <div className="cart-item__element cart-item__element_img-box">
                <img className="cart-item__element cart-item__element_img"
                    src={link}
                    alt={title} />
            </div>
        </div>

    )
}

export default CartItem