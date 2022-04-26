import React from 'react'

function MobileCartItem({ id, title, price, link, quantity, subtotal, onClickRemoveProduct, onClickPlusQuantityProduct, onClickMinusQuantityProduct }) {
    const handleRemoveProduct = () => {
        onClickRemoveProduct(id)
    }

    const handlePlusQuantityProduct = () => {
        onClickPlusQuantityProduct(id)
    }
    const handleMinusQuantityProduct = () => {
        onClickMinusQuantityProduct(id)
    }

    if (document.documentElement.clientWidth > 768) {
        return (
            <div className="cart-item cart-item_page">
                <button onClick={handleRemoveProduct} className="cart-item__element cart-item__element_page cart-item__element_remove cart-item__element_remove-page" > x </button>

                <div className="cart-item__element cart-item__element_img-box cart-item__element_img-box-page cart-item__element_page">
                    <img className="cart-item__element cart-item__element_page cart-item__element_img cart-item__element_img-page" src={link} alt={title} />
                </div>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_title cart-item__element_title-page">{title}</h3>

                <p className="cart-item__element cart-item__element_page cart-item__element_price cart-item__element_price-page">{price}</p>

                <div className="cart-item__element cart-item__element_page cart-item__element_quantity cart-item__element_quantity-page">

                    <button onClick={handleMinusQuantityProduct}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handlePlusQuantityProduct}>+</button>
                </div>
                <p className="cart-item__element cart-item__element_page cart-item__element_totalprice cart-item__element_totalprice-page">{subtotal}</p>
            </div>
        )
    } else {
        return (
            <div className="cart-item cart-item_page">
                <button onClick={handleRemoveProduct} className="cart-item__element cart-item__element_page cart-item__element_remove cart-item__element_remove-page cart-item__element_designation">x</button>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_designation">Product</h3>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_title cart-item__element_title-page">{title}</h3>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_designation">Price</h3>

                <p className="cart-item__element cart-item__element_page cart-item__element_price cart-item__element_price-page">{price}</p>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_designation">Quantity</h3>

                <div className="cart-item__element cart-item__element_page cart-item__element_quantity cart-item__element_quantity-page">

                    <p onClick={handleMinusQuantityProduct}>-</p>
                    <p>{quantity}</p>
                    <p onClick={handlePlusQuantityProduct}>+</p>
                </div>

                <h3 className="cart-item__element cart-item__element_page cart-item__element_designation">Subtotal</h3>

                <p className="cart-item__element cart-item__element_page cart-item__element_totalprice cart-item__element_totalprice-page">{subtotal}</p>
            </div>)
    }
}

export default MobileCartItem