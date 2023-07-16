import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.products);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
