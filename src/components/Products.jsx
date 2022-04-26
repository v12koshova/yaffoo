import React from 'react'

function Products({ id, title, link, price, onClickAddProduct, sale }) {
    const totalPrice = sale === 0 ? +price : Math.ceil(+price - ((+price * (+sale / 100))))
    const onAddProduct = (e) => {
        const obj = {
            id,
            title,
            link,
            price: totalPrice,
            sale: sale
        }
        onClickAddProduct(obj)
        e.target.textContent = 'Added to cart'
        e.target.classList.add('product__button_click')

    }


    return (
        <div className="product" id={id} key={title}>
            <h3 className="product__title">{title}</h3>
            {
                sale === '0' ? 
                <div className="product__price">
                 <p className="product__price">£{price}</p>
                </div>
                : <div className="product__price">
                    <p className="product__price product__price_old">£{price}</p>
                    <p className="product__price product__price_new">£{totalPrice}</p>
                </div>
            }
            
            <div className="product__img-box">
                <img src={link} alt={title}
                    className="product__img" />
            </div>
            <button
                className="product__button"
                onClick={onAddProduct}
            >Add to card</button>
            {
                sale !== '0' ?
                    <div className="product__sale">
                        <p className="product__inscr">Sale!</p>
                    </div>
                    : ''
            }
        </div>)
}

export default Products