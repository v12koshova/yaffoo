import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./app/features/postsSlice";
import { fetchProducts } from "./app/features/shopSlice";
import { useEffect } from "react";
import SinglePost from "./pages/SinglePost";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const shopStatus = useSelector((state) => state.shop.status);
  const products = useSelector((state) => state.shop.products);
  const postsStatus = useSelector((state) => state.posts.status);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (shopStatus === "idle" && !products.length) {
      dispatch(fetchProducts());
    }
    if (postsStatus === "idle" && !posts.length) {
      dispatch(fetchPosts());
    }
  }, [shopStatus, postsStatus, dispatch]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
