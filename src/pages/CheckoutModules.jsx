import { Link } from 'react-router-dom';

const MyForm = (props) => {
    return (
        <div className="contacts__form-item">
            <label htmlFor={props.title} className="contacts__form-label" >{props.text}</label>
            <input type={props.type} id={props.title} name={props.title} className="contacts__form-input" value={props.value} onChange={props.handleChange} />
        </div>)
}



const EmptyCartModalWindow = () => {
    return <div className='order-box'>
          <div className='cart-table__component'>
            <p className='cart-table__notice'>Your cart is currently empty.</p>
            <Link to='/shop'>
                <button className='cart-table__btn cart-table__btn_notice'>Return to shop</button>
            </Link>
          </div>
        </div>
}
function Order(props) {
    return (<div className="costs-box__element costs-box__element_order" key={props.id}>
        <h3 className="costs-box__element costs-box__element_title" >{props.title}
            <span className="costs-box__element costs-box__element_quantity" >  x{props.quantity}</span>
        </h3>
        <p className="costs-box__element costs-box__element_price">£{props.price}</p>
    </div>)
}


export {MyForm, EmptyCartModalWindow, Order}