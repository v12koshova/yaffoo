import React from 'react'

function Aside({ page, tags, articles }) {
  const [email, setEmail] = React.useState('')

  const handleTypeEmail = (e) => {
    setEmail(email => e.target.value)
  }

  let viewsArr = articles.map(obj => +obj.view)
  let indexesArr = []
  let mostPopularPosts = []

  for (let i = 0; i < 3; i++) {
  indexesArr[i] = viewsArr.indexOf(Math.max.apply(null, viewsArr))
  viewsArr[indexesArr[i]] = 0
  mostPopularPosts.push(articles[indexesArr[i]])
}

  return (
    <aside className="sidebar">
      { 
        page === 'contacts' ? <React.Fragment>

          <div className="sidebar__popular">
            <h2 className="sidebar__title"> <span className="sidebar__title-span">Most popular</span></h2>
            <div className="sidebar__most-popular-posts" id="sidebar__most-popular-posts">

            { mostPopularPosts[0] ?
                  mostPopularPosts.map(obj => <div key={obj.title} className="sidebar__most-popular-post posts posts_sidebar">
                  <h3 className="post__title post__title_sidebar">{obj.title}</h3>
                  <p className="post__view post__view_sidebar">{obj.view} VIEWS</p>
                  <div className="post__img-box post__img-box_sidebar">
                    <img src={obj.link} alt={obj.title} className="sidebar__most-popular-post-img  post__img post__img_sidebar" />
                  </div>
                </div>)
                   : ''
               
              }


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
                <input className="form__input" type="email" name="" id="" placeholder="Enter your email..." onChange={handleTypeEmail} />
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
        </React.Fragment> : <React.Fragment>


          <div className="sidebar__about">
            <h2 className="sidebar__title"><span className="sidebar__title-span">About me</span></h2>
            <div className="about">

              <h3 className="about__me">Sophie Blanche</h3>
              <h4 className="about__proffesion">PHOTOGRAPHER & BLOGGER</h4>
              <p className="about__description">I'm Sophie! I am a lifestyle and fashion blogger, an obsessed photo-taker of
                my
                kids, a bubble tea lover, a shopaholic, and I love being busy.</p>
              <div className="about__img-box about__img-box_my-photo">
                <img className="img" src="i/Sophie.png" alt="" />
              </div>
              <div className="about__img-box about__img-box_my-signature">
                <img className="img" src="i/Sophie-B.png" alt="" />
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

          <div className="sidebar__popular">
            <h2 className="sidebar__title"> <span className="sidebar__title-span">Most popular</span></h2>
            <div className="sidebar__most-popular-posts" id="sidebar__most-popular-posts">
              { mostPopularPosts[0] ?
                  mostPopularPosts.map(obj => <div key={obj.title} className="sidebar__most-popular-post posts posts_sidebar">
                  <h3 className="sidebar__most-popular-post-title post__title post__title_sidebar">{obj.title}</h3>
                  <p className="sidebar__most-popular-post-view post__view post__view_sidebar">{obj.view} VIEWS</p>
                  <div className="sidebar__most-popular-post-img-box  post__img-box post__img-box_sidebar">
                    <img src={obj.link} alt={obj.title} className="sidebar__most-popular-post-img  post__img post__img_sidebar" />
                  </div>
                </div>)
                   : ''
               
              }




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
                <input className="form__input" type="email" name="" id="" placeholder="Enter your email..." value={email} onChange={handleTypeEmail} />
                <button className="form__btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="sidebar__tags">
            <h2 className="sidebar__title"> <span className="sidebar__title-span">Tags</span></h2>

            {
              [...tags].map(obj => <p key={obj} className="post__tag post__tag_aside">{obj}</p>)
            }

          </div>

          <div className="sidebar__banner">
            <div className="img-box">
              <img className="img" src="i/banner.jpg" alt="" />
            </div>
          </div></React.Fragment>
      }
    </aside>
  )
}

export default Aside