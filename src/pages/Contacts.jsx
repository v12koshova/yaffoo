import React from 'react'
import Aside from '../components/Aside'

function Contacts({articles}) {
    const ModalWindow = ({ active, setModalActive }) => {
        return <React.Fragment>
            <p className={active ? 'modal modal_active' : 'modal'}>We have received your message and will contact you soon! Have a nice day :)</p>
        </React.Fragment>
    }

    const initState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    const [data, setData] = React.useState(initState)
    const [errors, setErrors] = React.useState({})
    const [modalActive, setModalActive] = React.useState(false)

    const handleChange = (e) => {
        setData(data => ({ ...data, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const errors = {}
        if (!data.name) errors.name = 'Name cannot be blank'
        if (!data.email) errors.email = 'Email cannot be blank'
        if (!data.subject) errors.subject = 'Subject cannot be blank'
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate()
        if (isValid) {
            setData(initState)
            setModalActive(true)
        }
    }


    return (
        <React.Fragment>
            <div className="cart-page">
                <h2 className="cart-page__title">Contacts</h2>
                <h3 className="navigation"><a className="navigation_link" href="index.html">Home</a> / Contacts</h3>

                <div className="wrapper wrapper_contacts">
                    <div className="main">
                        <h4 className="contacts__title">Have any Questions?</h4>
                        <div className="contacts__img-box">
                            <img src="i/people.jpg" alt="Sophie Blanche" className="contacts__img" />
                        </div>
                        <p className="contacts__text">The quietude of the country along with the abundance of natural marvels is incomparable as well as
                            astounding. Intense volcanic and tectonic activity that happened in the past gradually led to the
                            formation of distinctive land forms that are nowhere to be seen in any other part of this planet.
                            Apart from <span>natural brilliance</span> Iceland is also known for its bustling night life full of
                            parties and entertainment.</p>
                        <p className="contacts__text">Contact us to find out more or how we can help you better.</p>
                        
                        <div>
                <form onSubmit={handleSubmit} className="contacts__form">
                    <div className="contacts__form-item">
                        <label htmlFor="name" className="contacts__form-label" >Your Name (required)</label>
                        <input type="text" id='name' name="name"  className="contacts__form-input" value={data.name} onChange={handleChange} />
                        {errors.name && <p className="contacts__form-warning">{errors.name}</p>}
                    </div>
                    <div className="contacts__form-item">
                        <label htmlFor="email" className="contacts__form-label">Your Email (required)</label>
                        <input type="text" id='email' className="contacts__form-input" name="email" value={data.email} onChange={handleChange} />
                        {errors.email && <p className="contacts__form-warning">{errors.email}</p>}
                    </div>
                    <div className="contacts__form-item">
                        <label htmlFor="subject" className="contacts__form-label">Your Subject (required)</label>
                        <input type="text" id='subject' className="contacts__form-input" name="subject" value={data.subject} onChange={handleChange} />
                        {errors.subject && <p className="contacts__form-warning">{errors.subject}</p>}
                    </div>
                    <div className="contacts__form-item">
                        <label htmlFor="message" className="contacts__form-label">Your Message</label>
                        <textarea rows='10' type="text" id='message' className="contacts__form-input contacts__form-input" name="message" value={data.message} onChange={handleChange} />
                    </div>
                    <div className="contacts__form-item">
                        <button className="contacts__form-btn" type='submit'>Send</button>    
                    </div>
                    {(errors.name || errors.email || errors.subject) && <p className="contacts__form-warning">One or more fields have an error. Please check and try again.</p>}
                    <ModalWindow active={modalActive} setActive={setModalActive}/>
                </form>
            </div>


                    </div>
                    <Aside page='contacts' articles={articles}/>
                    {/* <aside className="sidebar sidebar_contacts">
                        <div className="sidebar__popular">
                            <h2 className="sidebar__title"> <span className="sidebar__title-span">Most popular</span></h2>
                            <div className="sidebar__most-popular-posts" id="sidebar__most-popular-posts">


                            </div>
                        </div>
                        <div className="sidebar__subscribe">
                            <h2 className="sidebar__title"><span className="sidebar__title-span">Newsletter</span></h2>
                            <div className="mark">
                                <div className="text">
                                    <h3 className="text__title">Join Our Newsletter</h3>
                                    <p className="text__description">Enter your email and we'll keep you posted with news and updates!</p>
                                </div>
                                <div className="form">
                                    <input className="form__input" type="email" name="" id="" placeholder="Enter your email..." />
                                    <button className="form__btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__social">
                            <h2 className="sidebar__title"><span className="sidebar__title-span">Social icons</span></h2>
                            <div className="icons">
                                <a className="icons__link icons__link_behance" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="27px" width="25px">
                                            <use xlinkHref="i/sprite.svg#behance" />
                                        </svg>
                                    </div> behance
                                </a>
                                <a className="icons__link icons__link_dribble" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                                            <use xlinkHref="i/sprite.svg#dribbble" />
                                        </svg>
                                    </div>dribble
                                </a>
                                <a className="icons__link icons__link_icon-facebook-f" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="25px">
                                            <use xlinkHref="i/sprite.svg#facebook" />
                                        </svg>
                                    </div>facebook
                                </a>
                                <a className="icons__link icons__link_instagram" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px">
                                            <use xlinkHref="i/sprite.svg#instagram" />
                                        </svg>
                                    </div>instagram
                                </a>
                                <a className="icons__link icons__link_pinterest" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                                            <use xlinkHref="i/sprite.svg#pinterest" />
                                        </svg>
                                    </div>pinterest
                                </a>
                                <a className="icons__link icons__link_twitter" href="">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px">
                                            <use xlinkHref="i/sprite.svg#twitter" />
                                        </svg>
                                    </div>twitter
                                </a>
                            </div>
                        </div>



                    </aside> */}
                </div>
            </div>
        </React.Fragment>

    )
}

export default Contacts