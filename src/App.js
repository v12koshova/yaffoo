import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import { fetchProducts } from './redux/actions/products';
import { useDispatch } from "react-redux";

function App() {
  const [articles, setArticles] = React.useState([])
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
  fetch('http://localhost:3000/data_base.json')
    .then((r) => r.json())
    .then(json => {
      setArticles(json.articles)
    })
  }, [])

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchProducts());;
  }, []);
  

  return (
    <React.Fragment>
      <div className="container" id="home">
        <Header articles={articles}/>
        
        <Routes>
            <Route path="/" element={<Home articles={articles}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contacts" element={<Contacts articles={articles}/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
