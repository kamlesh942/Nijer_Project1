import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App";
import HomePage from "./component/HomePage/Homepage";
import Contact from "./component/Contact/Contact";
import BuyNow from "./component/BuyNow/BuyNow";
import AddToCartBuyNow from "./component/AddToCart&BuyNow/AddToCart&BuyNow";
import ConfirmOrder from "./component/Order/Order";
import AddCard from "./component/Cart/CartPage";
import MyOrderPage from "./component/MyOrder/MyOrderPage";
import AboutUsPage from "./component/AboutUs/AboutUs";
import CreateProduct from "./component/createproduct/createProduct";
import CreateBlog from "./component/CreateBlog/createBlog";
import GetContact from "./component/Contact/getcontact";
import AdminPanel from "./component/Admin/Admin";
import NewArrival from "./component/newarrival/Newarrive";
import AddShop from "./component/createShop/CreateShop";
import StoreOrder from "./component/Storeorders/stororder.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />{" "}
        {/* Set HomePage as the default route */}
        <Route path="Contact" element={<Contact />} />
        <Route path="BuyNow" element={<BuyNow />} />
        <Route path="AddToCartBuyNow" element={<AddToCartBuyNow />} />
        <Route path="ConfirmOrder" element={<ConfirmOrder />} />
        <Route path="AddCard" element={<AddCard />} />
        <Route path="MyOrderPage" element={<MyOrderPage />} />
        <Route path="AboutUsPage" element={<AboutUsPage />} />
      </Route>
      {/* Admin Panel Routes */}
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/create-blog" element={<CreateBlog />} />
        <Route path="/admin/getallcontacts" element={<GetContact />} />
        <Route path="/admin/new-product" element={<NewArrival />} />
        <Route path="/admin/create-shop" element={<AddShop />} />
        <Route path="/admin/getorders" element={<StoreOrder />} />
      </Route>
    </>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
