import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortByPrice, reset } from "../redux/products";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <>
      {/* Header */}
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(sortByPrice());
          }}
        >
          가격순정렬
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          리셋
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => {
            return (
              <Link to={`/products/${product.id}`}>
                <div
                  key={product.id}
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <div>{product.name}</div>
                  <div>가격: {product.price}</div>
                </div>
              </Link>
            );
          })}
          {/* 상세페이지로 넘기기 */}
        </div>
      </div>
    </>
  );
}
