// import { BrowserRouter,Route,Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Home from "./pages/Home"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Order from "./pages/Order";

// function App() {
//   const [order,setOrder] = useState(null)

//   return (
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/shop" element={<Shop/>}></Route>
//       <Route path="/cart" element={<Cart/>}></Route>
//       <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
//       <Route path="/order-confirmation" element={<Order order = {order}/>}></Route>
//     </Routes>
//     <Footer/>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from 'react-toastify';
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        {/* <Route path="/order-confirmation" element={<Order order={order} />} /> */}
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route path="/filter-data" element={<FilterData/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

