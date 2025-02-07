import React from 'react'

function About() {
  return (
    <main className="about">
        <div className="about__img about__img--main">
          <img src={`${process.env.PUBLIC_URL}/assets/about.webp`} alt="Sophie Blanche" />
        </div>
      <h1 className="about__title title title--l">Hi, I’m Sophie Blanche</h1>
      <p className="about__profession">PHOTOGRAPHER & BLOGGER</p>
      <div className="about__text text">
      <p>Hey! I’m Sophie, I started this blog somewhere in 2012 as an interesting means of noting,
        chronicling and expressing my idlvp, projects, inspirations and daydreams. It has constantly evolved ever since
        and become more fashion & lifestyle oriented.</p>
      </div>
      <div className="about__text text"><p>I personally write all posts which vary from fashion to beauty to trends to food and then
        some more. Theres trendspotting at the Indian Fashion Weeks, reviews of collections, outfit posts, unique
        products, jewelry and accessories, other fashion related events and whatever else that seems to catch my fancy at
        the time!</p></div>
      
      <blockquote className="about__quote quote">We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows
        like a shadow that never leaves.
        <span className="about__quote-author quote-author">Gautama Buddha</span>
      </blockquote>

      <div  className="about__text text"><p>How to estimate your Travel Loan amount?Research your destination: Read guidebooks or travel
        websites to get an idea of the places you want to visit. Make a list of things you would like to do there, and
        their likely costs.</p></div>
      
      <div className="about__text text"><p>For editorial inquiries, contact text@nebotheme.net</p>
      <p>All other inquries hello@nebotheme.net</p></div>
      
      <p className="about__text text">Sincerely,<span className="about__name">Sophie Blanche</span></p>

        
        <div className="about__img">
          <img src={`${process.env.PUBLIC_URL}/assets/Sophie-Signature.webp`} alt="Sophie Blanche" />
        </div>
      </main>
  )
}

export default About