import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import Sidebar from "../components/Sidebar";
import { fetchPosts } from "../app/features/postsSlice";

function SinglePost() {
  const { posts } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts()); // Отримуємо товари, якщо їх немає
    }
  }, [dispatch, posts.length]);

  const singlePost = posts.length
    ? posts.find((post) => post.id === id)
    : null;

  if (!singlePost) {
    return <p>Loading...</p>; // Уникаємо NaN, поки товар не знайдено
  }

  return (
    <div className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="single-post">
            <div className="single-post__info">
              <p className="single-post__tag tag">{singlePost.category}</p>
              <h1 className="single-post__title title title--xl">
                {singlePost.title}
              </h1>
              <div className="single-post__breadcrumbs breadcrumbs">
                <p className="single-post__author">Sophie Blanche</p>
                <p className="single-post__date date">
                  {format(singlePost.date, "MMMM d, y").toLocaleUpperCase()}
                </p>
              </div>
              <div className="single-post__img">
                <img src={singlePost.image} alt="" />
              </div>
            </div>
            <div
              className="single-post__content"
              dangerouslySetInnerHTML={{ __html: singlePost.content }}
            ></div>
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
