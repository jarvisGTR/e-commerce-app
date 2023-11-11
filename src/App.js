import React from 'react';


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Layout/>}>
      <Route index element={<Home/>}/> 
      <Route path="about" element= {<About/>}/>
      <Route path="Contact" element= {<Contact/>}/>
      <Route path="product" element= {<Store/>}/>
      <Route path="product/:id" element= {<SingleProduct/>}/>
      <Route path="Blog" element= {<Blog/>}/>
      <Route path="CompareProduct" element= {<CompareProduct/>}/>
      <Route path="Wishlist" element= {<Wishlist/>}/>
      <Route path="Login" element= {<Login/>}/>
      <Route path="Forgotpassword" element= {<Forgotpassword/>}/>
      <Route path="Signup" element= {<Signup/>}/>
      <Route path="Resetpassword" element= {<Resetpassword/>}/>
      <Route path="Singleblog" element= {<Singleblog/>}/>
      <Route path="SingleProduct" element= {<SingleProduct/>}/>
      <Route path="Cart" element= {<Cart/>}/>
      <Route path="Checkout" element= {<Checkout/>}/>

      
      
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  
}

export default App;
