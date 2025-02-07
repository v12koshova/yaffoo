import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Subscribe from "./Subscribe";
import PostDate from "../utils/PostDate";
import { Autoplay } from "swiper/modules";

function Sidebar() {
  const { posts, status } = useSelector((state) => state.posts);

  return (
    <aside className="sidebar">
      <div className="sidebar__about">
        <p className="sidebar__title">
          <span className="sidebar__title-span">About me</span>
        </p>
        <div className="sidebar-about">
          <div className="sidebar-about__img sidebar-about__img--main">
            <img
              src={`${process.env.PUBLIC_URL}/assets/about-p-1.webp`}
              alt=""
            />
          </div>
          <h3 className="sidebar-about__name title title--xxs">
            Sophie Blanche
          </h3>
          <p className="sidebar-about__proffesion">PHOTOGRAPHER & BLOGGER</p>
          <p className="sidebar-about__description">
            I'm Sophie! I am a lifestyle and fashion blogger, an obsessed
            photo-taker of my kids, a bubble tea lover, a shopaholic, and I love
            being busy.
          </p>

          <div className="sidebar-about__img">
            <img
              className="img"
              src={`${process.env.PUBLIC_URL}/assets/Sophie-Signature.webp`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sidebar__social">
        <p className="sidebar__title">
          <span className="sidebar__title-span">Social icons</span>
        </p>
        <div className="sidebar-social social">
          <a className="social__link" href="">
            <div className="social__item social__item--behance"></div>
            <p className="social__text">behance</p>
          </a>
          <a className="social__link" href="">
            <div className="social__item social__item--dribble"></div>
            <p className="social__text">dribble</p>
          </a>
          <a className="social__link" href="">
            <div className="social__item social__item--facebook"></div>
            <p className="social__text">facebook</p>
          </a>
          <a className="social__link" href="">
            <div className="social__item social__item--instagram"></div>
            <p className="social__text">instagram</p>
          </a>
          <a className="social__link" href="">
            <div className="social__item social__item--pinterest"></div>
            <p className="social__text">pinterest</p>
          </a>
          <a className="social__link" href="">
            <div className="social__item social__item--twitter"></div>
            <p className="social__text">twitter</p>
          </a>
        </div>
      </div>
      {status === 'success' && posts.length && (
        <div className="sidebar__featured">
          <p className="sidebar__title">
            <span className="sidebar__title-span">Featured posts</span>
          </p>
          <Swiper
            className="sidebar-featured"
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
          >
            {posts.map((post) => {
              if (post.featured) {
                return (
                  <SwiperSlide key={`featured-${post.id}`}>
                    <Link to={`/post/${post.id}`}>
                      <div className="sidebar-featured__background">
                        <img src={post.image} alt="" />
                      </div>
                      <div className="sidebar-featured__content">
                        <p className="sidebar-featured__tag tag">
                          {post.category}
                        </p>
                        <h3 className="sidebar-featured__title title title--xxs">
                          {post.title}
                        </h3>
                        <PostDate date={post.date} />
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      )}

      <div className="sidebar__subscribe">
        <p className="sidebar__title">
          <span className="sidebar__title-span">Newsletter</span>
        </p>
        <Subscribe />
      </div>
    </aside>
  );
}

export default Sidebar;
