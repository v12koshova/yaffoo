import React from 'react'
import { useSelector } from 'react-redux'

function ProductsSideBar() {
    const products = useSelector(({ products }) => products.items.products)
    let tags = new Set()
    for (let item in products) {
      for (let i = 0; i < products[item].tag.length; i++) {
        tags.add(products[item].tag[i])
        break
      }
    }
    
  return (
    <aside className="sidebar">

          <div className="sidebar__about">
            <h2 className="sidebar__title"><span className="sidebar__title-span">Products</span></h2>
            <div id="sidebar__most-popular-posts">
                { products &&
                  products.map((obj, index) => index < 3 ? <div key={obj.title} className="sidebar__most-popular-post posts posts_sidebar">
                  <h3 className="sidebar__most-popular-post-title post__title post__title_sidebar">{obj.title}</h3>
                  <p className="sidebar__most-popular-post-view post__view post__view_sidebar">£{obj.sale !== 0 ? (obj.price - (obj.price * (obj.sale / 100))).toFixed(2) : (obj.price).toFixed(2)}</p>
                  <div className="sidebar__most-popular-post-img-box  post__img-box post__img-box_sidebar">
                    <img src={obj.link} alt={obj.title} className="sidebar__most-popular-post-img  post__img post__img_sidebar" />
                  </div>
                </div> :
                '')
                }
            </div>
          </div>

          <div className="sidebar__tags">
            <h2 className="sidebar__title"> <span className="sidebar__title-span">Products tags</span></h2>
            {
              [...tags].map(obj => <p key={obj} className="post__tag post__tag_aside">{obj}</p>)
            }
          </div>



        </aside>
  )
}

export default ProductsSideBar