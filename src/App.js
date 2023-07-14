import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Main, Product, Products, Layout 임포트
// Login, Signup 임포트
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* url Parameter를 사용해서 상세페이지로 넘어가는 path를 상품 하나하나 안만들어도 됨. */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 로그인 회원가입 페이지 라우트 연결  */}
      </Route>
      <Route path="*" element={<>없는 페이지 입니다.</>} />
      {/* 없는 url주소로 접근할 경우 보여줄 페이지. */}
    </Routes>
  );
}

export default App;
