import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReadingTime from "../utils/ReadingTime";
import PostDate from "../utils/PostDate";

function Slider() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <div className="slider">
        <div className="container container--l">
          <Swiper
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="slider__wrapper"
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // speed={2000}
          >
            {posts &&
              posts.map((post) => {
                if (post.slider) {
                  return (
                    <SwiperSlide key={`slider-${post.id}`}>
                      <Link to={`/post/${post.id}`}>
                        <div className="slide__background">
                          <img src={post.image} alt="" />
                        </div>
                        <div className="slide__content">
                          <p className="slide__tag tag">{post.category}</p>
                          <h2 className="slide__title title title--xl">{post.title}</h2>
                          <div className="slide__breadcrumbs breadcrumbs">
                            <ReadingTime content={post.content} />
                            <PostDate date={post.date} />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                }
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
