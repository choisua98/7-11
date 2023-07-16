import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cart";
// import { addToCart } from "../index";

export default function Product() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [selectOption, setSelectOption] = useState("");
  const dispatch = useDispatch();
  const [itemNumber, setItemNumber] = useState(1);
  //상품 개수 초기값 설정

  //+-버튼 클릭 핸들러 / 1애서 -버튼 클릭시 alert창 띄우기
  const onPlusButtonClickHandler = () => {
    setItemNumber(itemNumber + 1);
  };
  const onMinusButtonClickHandler = () => {
    if (itemNumber - 1 < 1) {
      alert("상품을 1개 이상 선택해 주세요 !");
    } else {
      setItemNumber(itemNumber - 1);
    }
  };

  // //장바구니애서 삭제 버튼 클릭 핸들러
  // const onDeleteButtonClickHandler = (product) => {
  //   dispatch(deleteFromCart(product));
  // };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
              color: "white",
            }}
          >
            <div>{product.name}</div>
          </div>
          <div>
            <h3>가격: {product.price} 원</h3>
            <h3>좋아요: {product.likes} 개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSelectOption(e.target.value);
              }}
            >
              <option value="">필수 옵션을 선택하세요.</option>
              {product.options.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <div>구매 옵션: {selectOption}</div>

            {/* 갯수선택 */}
            <div>
              개수:&nbsp;
              <input
                type="number"
                value={itemNumber}
                onChange={(e) => {
                  setItemNumber(e.target.value);
                }}
              />
              <button onClick={onPlusButtonClickHandler}>+</button>
              <button onClick={onMinusButtonClickHandler}>-</button>
            </div>
            <div>총 금액: {product.price * itemNumber}원</div>
            <button
              onClick={() => {
                if (selectOption === "") {
                  alert("필수옵션을 선택해주세요 !");
                  // 필수옵션 선택 알림띄우기.
                } else {
                  dispatch(addToCart(product));
                }
              }}
            >
              장바구니 추가하기
            </button>
          </div>
        </div>
        <h1>장바구니</h1>
        <div>
          {cart.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  border: "1px solid black",
                }}
              >
                <h3>{product.name}</h3>
                <h3>가격: {product.price} 원</h3>
                <h3>좋아요: {product.likes} 개</h3>
                <h3>구매 옵션: {selectOption} size</h3>
                <h3>
                  갯수: <button onClick={onMinusButtonClickHandler}>-</button>
                  &nbsp;{itemNumber}&nbsp;
                  <button onClick={onPlusButtonClickHandler}>+</button>
                  {/* 장바구니 안에서 상품 갯수 조정하기*/}
                </h3>
                <h3>총비용: {product.price * itemNumber} 원</h3>
                <button onClick={() => dispatch(deleteFromCart(product))}>
                  {/* 삭제버튼 구현에서 막혀버렸습니다...ㅜ */}
                  장바구니에서 삭제
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
