import React from 'react'

function Posts({posts}) {
  const increasedPost = posts.splice(posts.find(post => post.increased), 1)
  
  return (
    <div className="posts">
    {posts.map(post => 
      <div className="post" key={post.id}>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__tag">{post.tag.join(',  ')}</p>
            <div className="post__breadcrumbs">
              <p className="post__time">{post.time}</p>
              <p className="post__date">{post.date}</p>
            </div>
            <div className="post__img-box">
            <img className="post__img" src={post.link} 
                alt={post.title} /></div>
          </div>)}
    </div>
  )
}

export default Posts