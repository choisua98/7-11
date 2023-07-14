import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
//useState 임포트

export default function Product() {
  //url의 id가 달라지면 다른 상품을 보이게 하기.
  const { id } = useParams();
  const [selectedOption, setselectedOption] = useState("");
  //옵션 선택이 변함에 따라 '구매옵션'에 보이는 글자가 달라져야 해서 스테이트 설정
  const [itemList, setitemList] = useState([
    {
      name: "멋진 바지",
      price: "20000",
      option1: "28",
      option2: "30",
      option3: "32",
      likes: "100",
    },
    {
      name: "멋진 셔츠",
      price: "10000",
      option1: "small",
      option2: "medium",
      option3: "large",
      likes: "200",
    },
    {
      name: "멋진 신발",
      price: "30000",
      option1: "230",
      option2: "240",
      option3: "250",
      option4: "260",
      option5: "270",
      likes: "300",
    },
  ]);
  console.log(id);
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
            }}
          >
            {itemList[id - 1].name}
            {/* 상품 id를 가져와서 같은 url 이지만 다른 상품을 보여줄 수 있게 됨. */}
            {/* ->상품 이름으로 바꿈 */}
          </div>
          <div>
            <h3>가격: {itemList[id - 1].price}</h3>
            <h3>좋아요: {itemList[id - 1].likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setselectedOption(e.target.value);
              }}
              //선택된 셀렉트값을 setselectedOption에 넣어줌
            >
              <option>{itemList[id - 1].option1}</option>
              <option>{itemList[id - 1].option2}</option>
              <option>{itemList[id - 1].option3}</option>
              <option>{itemList[id - 1].option4}</option>
              <option>{itemList[id - 1].option5}</option>
              {/* id-1이 배열이랑 같아서 이렇게 씀 */}
            </select>
            <div>구매옵션 : {selectedOption}</div>
            {/* setselectedOption로 선택된 옵션 보여줌 */}
          </div>
        </div>
      </div>
    </>
  );
}
