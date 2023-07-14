import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//Outlet, Link임포트

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to="/">
          <div>로고</div>
        </Link>
        {/* 로고 클릭시 메인페이지로 경로 설정하기 */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link to="/login">
            <div>로그인</div>
          </Link>
          <Link to="/signup">
            <div>회원가입</div>
          </Link>
          {/* 로그인, 회원가입 버튼 클릭시 각 페이지로 이동하게 하기 */}
        </div>
      </header>
      <Outlet />
      {/* 넣을 애들을 어디에 넣을 지 지정해줌 */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
