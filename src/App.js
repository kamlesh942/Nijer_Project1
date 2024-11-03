import React from 'react';
import './App.css';

import Nijer from './component/nijer.js';
import MyOrder from './component/My-Order/myOrder.js';

// import ContactPage from './component/Contact/contact.js';
// import Header from './component/Nav/nav.js';
import Footer from './component/Footer/footer.js';
import ContactPage from './component/Contact/contact.js';
import LoggedIn from './component/LoggedIn/loggedIn.js';
import AddressForm from './component/BuyNow/buyNow.js';

import AddCard from './component/addCard/addCard.js';

import ProductCard from './component/ProductDetailpage/productDetailPage.js'
import Sell from './component/Sell/sell.js';
import ConfirmOrder from './component/ConfirmOrder/confirmOrder.js';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Nijer />}/>
      <Route path='/addCard' element={<AddCard />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/sell' element={<Sell />}/>
     


      </Routes>
      {/* <Nijer/>
      <ContactPage/> */}
    </>

    // <div>
    //     {/* <Nijer /> */}
    //     {/* <LoggedIn /> */}
    //    {/* <Footer /> */}
    //     {/* <Header /> */}
    //     {/* <ContactPage /> */}
    //     {/* <AddressForm /> */}
    //     {/* <AddCard /> */}
    //     {/* <ProductCard /> */}

    //     {/* <MyOrder /> */}
    //     {/* <Sell /> */}
    //     <ConfirmOrder />
    
        // </div>
    
  );
}

export default App;
