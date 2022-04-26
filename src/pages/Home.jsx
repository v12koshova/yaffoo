import React from 'react'
import Aside from '../components/Aside';
import { Link } from 'react-router-dom';
import Posts from "../components/Posts";



function Home({articles}) {
  const [postsQuantity, setPostsQuantity] = React.useState(6)

  const increasedPostIndex = articles.findIndex(obj => obj.increased)
  const increasedPost = articles[increasedPostIndex]

  let posts = articles.slice(0, postsQuantity)
  
  const [button, setButton] = React.useState(true)
  const [email, setEmail] = React.useState('')

  const showMorePosts = () => {
    setPostsQuantity(postsQuantity + 4)
    if (postsQuantity + 4 >= articles.length) {
      setButton(false)
    }
  }

  const handleTypeEmail = (e) => {
    setEmail(email => e.target.value)
  }
  
  let tags = new Set()
  for (let item in articles) {
    for (let i = 0; i < articles[item].tag.length; i++) {
      tags.add(articles[item].tag[i])
      break
    }
  }
  return (
    <React.Fragment>
        <div className="slider" id="slider">
          <div className="slider-wrap">
            <div className="post post_main">
              <div className="post__description post__description_slider">
                <a href="#">
                  <h2 className="post__title post__title_slider">Our Favorite Things To Do In Big Sur California</h2>
                </a>
                <p className="post__tag post__tag_slider">INTERIOR</p>
                <div className="post__breadcrumbs post__breadcrumbs_slider">
                  <p className="post__time post__time_slider">MARCH 27, 2020</p>
                  <p className="post__date post__date_slider">3 MINS READ</p>
                </div>
              </div>
              <div className="post__img-box post__img-box_slider post__img-box_slider1">

              </div>
            </div>
          </div>
        </div>




        <div className="small-container">

          <div className="desc">
            <Link to="/about">
              <div className="card card_about-me">
                <h3 className="card__title card__title_about-me">About me</h3>
                <div className="card__img-box card__img-box_about-me">
                  <img className="card__img" width="768" height="584" src="i/girlwithscarf.jpg" alt="" />
                </div>
              </div>
            </Link>
            <Link to="/shop">
              <div className="card card_store">
                <h3 className="card__title card__title_store">My store</h3>
                <div className="card__img-box card__img-box_store">
                  <img className="card__img" src="i/waterfall.jpg" width="768" height="584" alt="" />
                </div>
              </div>
            </Link>
            <a href="https://www.instagram.com/nebo.theme/">
              <div className="card card_instargam">
                <h3 className="card__title card__title_instargam">Instagram</h3>
                <div className="card__img-box card__img-box_instargam">
                  <img className="card__img card__img_instargam" width="768" height="584" src="i/polaroid.jpg" alt="" />
                </div>
              </div>
            </a>
          </div>

          <div className="mark mark_main">
            <div className="text text_main">
              <h3 className="text__title text__title_main">Join Our Newsletter</h3>
              <p className="text__description text__description_main">Enter your email and we'll keep you posted with news and
                updates!</p>
            </div>
            <div className="form form_main">
              <input className="form__input form__input_main" type="email" name="" id="" placeholder="Enter your email..." onChange={handleTypeEmail}/>
              <button className="form__btn form__btn_main" type="submit">Subscribe</button>
            </div>
          </div>

          <div className="wrapper">
            <div className="main">
             {increasedPost &&
               <div className="article" id="increased">
                <a href="">
                  <h2 className="post__title">{increasedPost.title}</h2>
                </a>
                <a className="post__tag-link" href="">
                  <p className="post__tag">{increasedPost.tag[0]}</p>
                </a>
                <div className="post__breadcrumbs">
                  <p className="post__time">{increasedPost.time}</p>
                  <p className="post__date">{increasedPost.date}</p>
                </div>
                <a href="" className="post__content">
                  <div className="post__content">{increasedPost.increased.text}</div>
                </a>

                <div className="post__video-box">
                  <video autoPlay muted loop poster={increasedPost.link} className="post__video">
                    <source src={increasedPost.video.videoSrc} type={increasedPost.video.type} />
                  </video>
                </div>
                <div className="post__buttons">
                  <a href="" className="post__btn">Continue reading</a>
                  <div className="post__share">
                    <p>shares</p>
                    <div className="post__share-icons">
                      <a href="f" className="post__share-icons_icon icon-facebook"></a>
                      <a href="t" className="post__share-icons_icon icon-twitter"></a>
                      <a href="p" className="post__share-icons_icon icon-pinterest"></a>
                    </div>
                  </div>
                </div>
              </div>}
             


              <Posts posts={posts}/>


              {button &&
              <div className="posts__button">
                <button 
                dataload="Loading..." 
                datamore="Show more" 
                className="posts__btn" 
                onClick={showMorePosts}
                >Show more</button>
              </div>}
            </div>
            
                <Aside page='home' tags={tags} articles={articles}/>

          </div>
        </div>


        


       



      
    </React.Fragment>
  )
}

export default Home