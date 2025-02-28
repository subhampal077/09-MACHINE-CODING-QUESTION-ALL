import React from "react";

const Product = ({ item }) => {

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        flexShrink: "0",
      }}
    >
      <p style={{ margin: "0 0 6px 0" }}>{item.title}</p>
      <p style={{ margin: "0" }}>{item.category}</p>
    </div>
  );
};

export default Product;
