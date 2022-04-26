import React from 'react'

function About() {
  return (
    <React.Fragment>
        <div className="about-page">
      <h2 className="about-page__title">Hi, I’m Sophie Blanche</h2>
      <h3 className="about-page__profession">PHOTOGRAPHER & BLOGGER</h3>
      <p className="about-page__text">Hey! I’m Sophie, I started this blog somewhere in 2012 as an interesting means of noting,
        chronicling and expressing my idlvp, projects, inspirations and daydreams. It has constantly evolved ever since
        and become more fashion & lifestyle oriented.</p>
      <p className="about-page__text">I personally write all posts which vary from fashion to beauty to trends to food and then
        some more. Theres trendspotting at the Indian Fashion Weeks, reviews of collections, outfit posts, unique
        products, jewelry and accessories, other fashion related events and whatever else that seems to catch my fancy at
        the time!</p>
      <q className="about-page__quote">We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows
        like a shadow that never leaves.
        <span className="about-page__quote-author">Gautama Buddha</span>
      </q>
      <p className="about-page__text">How to estimate your Travel Loan amount?Research your destination: Read guidebooks or travel
        websites to get an idea of the places you want to visit. Make a list of things you would like to do there, and
        their likely costs.</p>
      <p className="about-page__text about-page__text_contact">For editorial inquiries, contact text@nebotheme.net</p>
      <p className="about-page__text about-page__text_contact">All other inquries hello@nebotheme.net</p>
      <p className="about-page__text">Sincerely,<span className="about-page__name">Sophie Blanche</span></p>

        <div className="about-page__img-box about-page__img-box_photo">
          <img src="i/Sophie_full.jpg" alt="Sophie Blanche" className="about-page__img" />
        </div>
        <div className="about-page__img-box about-page__img-box_signature">
          <img src="i/Sophie-B.png" alt="Sophie Blanche" className="about-page__img about-page__img_signature" />
        </div>
      </div>
    
    </React.Fragment>
  )
}

export default About