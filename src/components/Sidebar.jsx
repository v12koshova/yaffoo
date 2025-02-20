import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Subscribe from "./Subscribe";
import PostDate from "../utils/PostDate";
import { Autoplay } from "swiper/modules";
import { socialMediaFull } from "../constants/constants";

function Sidebar({ partial=false }) {
  const { posts, status } = useSelector((state) => state.posts);
  const isSuccess = status === "success" && posts.length;

  return (
    <aside className={`sidebar ${partial ? "sidebar--partial" : ''}`}>
      {!partial && (
        <div className="sidebar__about">
          <p className="sidebar__title">
            <span className="sidebar__title-span">About me</span>
          </p>
          <div className="sidebar-about">
            <div className="sidebar-about__img sidebar-about__img--main">
              <img
                src={`${process.env.PUBLIC_URL}/assets/about-p-1.webp`}
                alt="Sophie Blanche"
              />
            </div>
            <h3 className="sidebar-about__name title title--xxs">
              Sophie Blanche
            </h3>
            <p className="sidebar-about__proffesion">PHOTOGRAPHER & BLOGGER</p>
            <p className="sidebar-about__description">
              I'm Sophie! I am a lifestyle and fashion blogger, an obsessed
              photo-taker of my kids, a bubble tea lover, a shopaholic, and I
              love being busy.
            </p>

            <div className="sidebar-about__img">
              <img
                className="img"
                src={`${process.env.PUBLIC_URL}/assets/Sophie-Signature.webp`}
                alt="Signature photo"
              />
            </div>
          </div>
        </div>
      )}

      <div className="sidebar__social">
        <p className="sidebar__title">
          <span className="sidebar__title-span">Social icons</span>
        </p>
        <div className="sidebar-social social">
          {Object.keys(socialMediaFull).map((sm) => (
            <a key={sm} className="social__link" href={socialMediaFull[sm]}>
              <div className={`social__item social__item--${sm}`}></div>
              <p className="social__text">{sm}</p>
            </a>
          ))}
        </div>
      </div>
      {isSuccess && (
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
                        <img src={post.image} alt={post.title} />
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
