import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReadingTime from "../utils/ReadingTime";
import PostDate from "../utils/PostDate";

function Posts() {
  const { posts, status } = useSelector((state) => state.posts);

  const stickyPost = posts.find((el) => el.sticky === true);

  const gridPosts = posts.filter((post) => !post.sticky && !post.slider);
  const [postsCount, setPostsCount] = useState(4);
  let postsInGrid = 0;

  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="posts">
            {stickyPost && (
              <div className="post post--sticky">
                <Link to={`/post/${stickyPost.id}`} href="">
                  <h2 className="post__title title title--m">
                    {stickyPost.title}
                  </h2>
                </Link>
                <a className="post__tag tag" href="">
                  {stickyPost.category}
                </a>
                <div className="post__breadcrumbs breadcrumbs">
                  <ReadingTime content={stickyPost.content} />
                  <PostDate date={stickyPost.date} />
                </div>
                <Link to={`/post/${stickyPost.id}`} className="post__content">
                  {stickyPost.excerpt}
                </Link>

                {stickyPost.video ? (
                  <Link to={`/post/${stickyPost.id}`} className="post__video">
                    <img src={stickyPost.image} alt="" />
                    <video
                      autoPlay
                      muted
                      loop
                      poster={stickyPost.image}
                      className="post__video"
                    >
                      <source src={stickyPost.video} type="video/mp4" />
                    </video>
                  </Link>
                ) : (
                  <Link to={`/post/${stickyPost.id}`} className="post__img">
                    <img src={stickyPost.image} alt="" />
                  </Link>
                )}

                <div className="post__buttons">
                  <Link
                    to={`/post/${stickyPost.id}`}
                    href=""
                    className="post__btn"
                  >
                    Continue reading
                  </Link>
                  <div className="post__share">
                    <p>shares</p>
                    <div className="post__share-icons social">
                      <a
                        href="f"
                        className="social__item social__item--facebook"
                      ></a>
                      <a
                        href="t"
                        className="social__item social__item--twitter"
                      ></a>
                      <a
                        href="p"
                        className="social__item social__item--pinterest"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {status === "loading" && <p>Loading...</p>}
            {status === "success" &&
              (gridPosts.length ? (
                <div className="posts__grid">
                  {gridPosts.map((post) => {
                    if (postsInGrid < postsCount) {
                      postsInGrid++;
                      return (
                        <Link
                          to={`/post/${post.id}`}
                          className="post"
                          key={`post-${post.id}`}
                        >
                          <h3 className="post__title title title--xs">
                            {post.title}
                          </h3>
                          <p className="post__tag tag">{post.category}</p>
                          <div className="post__breadcrumbs breadcrumbs breadcrumbs">
                            <ReadingTime content={post.content} />
                            <PostDate date={post.date} />
                          </div>
                          <div className="post__img">
                            <img src={post.image} alt="" />
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              ) : (
                <p>No posts found. Check back later!</p>
              ))}

            {status === "reject" && (
              <p>Posts are currently unavailable. Please try again later.</p>
            )}

            {postsCount < gridPosts.length && (
              <div className="posts__button">
                <button
                  className="posts__btn"
                  onClick={() => setPostsCount((count) => count + 4)}
                >
                  Show more
                </button>
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Posts;
