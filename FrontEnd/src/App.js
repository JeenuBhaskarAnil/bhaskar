import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceOrder from "./components/PlaceOrderPage";
import Addproduct from "./components/Admin/AdminPage";
import MainComponent from "./components/getdata";
import Welcome from "./components/Layout/WelcomePage";




function App() {
    
// const handleClick = () => {
//     window.location.href = '/ap'    
// }

// const handleCustomerPage = () => {
//   window.location.href = '/op'
// }

  return (
    <>
    {/* <h1>Hello All</h1> */}
    {/* <header><button onClick={handleClick}>Admin page</button> <button onClick={handleCustomerPage}>Place Order</button></header> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Welcome />} />
      <Route path="/ap" element = {<Addproduct />} />
      <Route path="/op" element = {<PlaceOrder />} />
      <Route path="/god" element = {<MainComponent />} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;