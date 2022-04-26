import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MyForm, EmptyCartModalWindow, Order } from './CheckoutModules';
import { Link } from 'react-router-dom';
import { orderProducts } from '../redux/actions/cart'
import ProductsSideBar from '../components/ProductsSideBar';

function Checkout() {
    const items = useSelector(({ cart }) => cart.items)
    const cart = useSelector(({ cart }) => cart)
    const products = Object.keys(items).map((key) => items[key].items[0])
    const dispatch = useDispatch()

    const totalPrice =  cart.coupon === 1 ? (cart.totalPrice * 0.8).toFixed(2) : cart.totalPrice
    
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        message: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
    }

    const [data, setData] = React.useState(initState)
    const [errors, setErrors] = React.useState({})
    const [modalActive, setModalActive] = React.useState(false)

    const handleChange = (e) => {
        setData(data => ({ ...data, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const errors = {}
        if (!data.firstName || !data.lastName || !data.email || !data.country || !data.street || !data.city || !data.state || !data.zip || !data.phone) errors.name = 'One or more fields are empty or have an error. Please check and try again.'
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate()
        if (isValid) {
            dispatch(orderProducts())
            setModalActive(true)
        }
    }



    const ModalWindow = ({ active, setActive }) => {
        return <div className='modal modal_active'>
            <p className='modal__inscription'>We have received your order and will contact you soon! Have a nice day :)</p>
            <Link to='/'>
                <button className='modal__button'>Go home</button>
            </Link>
        </div>
    }

    const mainContent = () => {
        // if (totalCount === 0) {
        //     return <EmptyCartModalWindow />
        // } else {
        if (modalActive === false) {
            return <React.Fragment>
                <div className="order-box">
                    <h2 className="order-box__element order-box__element_title">Your order</h2>
                    <div className="costs-box">
                        <div className="costs-box__element costs-box__element_head">
                            <p className="costs-box__element costs-box__element_head-title costs-box__element_head-title-product">Product</p>
                            <p className="costs-box__element costs-box__element_head-title costs-box__element_head-title-subtotal">Subtotal</p>
                        </div>

                        {products.map((obj, i) => <Order
                            id={obj.id}
                            key={obj.title}
                            title={obj.title}
                            quantity={items[obj.id].items.length}
                            price={obj.price} />
                        )}

                        <div className="costs-box__element costs-box__element_val-box costs-box__element_subtotal">
                            <p className="costs-box__element costs-box__element_span">Subtotal</p>
                            <p className="costs-box__element costs-box__element_price">£{cart.totalPrice}</p>
                        </div>
                        <div className="costs-box__element costs-box__element_val-box costs-box__element_total">
                            <p className="costs-box__element costs-box__element_span">Total</p>
                            <p className="costs-box__element costs-box__element_price costs-box__element_price-total">£{totalPrice}</p>
                        </div>
                    </div>
                </div>
                <form className='contacts' onSubmit={handleSubmit}>
                    <MyForm title='firstName' value={data.firstName} text='First Name (required)' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='lastName' value={data.lastName} text='Last Name (required)' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='country' value={data.country} text='Country / Region *' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='street' value={data.street} text='Street address *' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='city' value={data.city} text='Town / City *' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='state' value={data.state} text='State *' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='zip' value={data.zip} text='ZIP Code *' type='number' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='phone' value={data.phone} text='Phone *' type='phone' handleChange={handleChange} data={data} errors={errors} setData={setData} />
                    <MyForm title='email' value={data.email} text='Email address *' type='email' handleChange={handleChange} data={data} errors={errors} setData={setData} />

                    <div className="contacts__form-item">
                        <label htmlFor='message' className="contacts__form-label" >Order notes (optional)</label>
                        <textarea rows='7' type='text' id='message' name='message' className="contacts__form-input" value={data.message} onChange={handleChange} />

                    </div>

                    {errors.name && <p className="contacts__form-warning">{errors.name}</p>}

                    <div className="contacts__form-item">
                        <button className="contacts__form-btn" type='submit'>Send</button>
                    </div>

                </form>
            </React.Fragment>
        } else {
            return <React.Fragment>
                <ModalWindow active={modalActive} setActive={setModalActive} />
            </React.Fragment>
        }
    }
    // }



    return (
        <React.Fragment>
            <div className="cart-page">
                <h2 className="cart-page__title">Cart</h2>
                <h3 className="navigation"><Link className="navigation_link" to="/">Home</Link> / Checkout</h3>
            </div>

            <div className="wrapper">


                {
                    mainContent()
                }


                <ProductsSideBar />
            </div>
        </React.Fragment>
    )
}

export default Checkout