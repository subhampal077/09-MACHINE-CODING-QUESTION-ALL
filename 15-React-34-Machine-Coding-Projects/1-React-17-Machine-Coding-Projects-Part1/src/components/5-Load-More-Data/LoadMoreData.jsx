// Limiting resources API: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (products.length >= 100) {
      return;
    }
    fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }&select=title,price`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, ...data.products]);
      })
      .catch((err) => console.log(err.message));
  }, [count]);

  //   console.log(products);

  useEffect(() => {
    products?.length >= 100 ? setDisable(true) : setDisable(false);
  }, [products]);

  return (
    <div className="text-center">
      <div className="m-5 grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-x-5 gap-y-5">
        {products?.map((item, i) => (
          <div
            key={i}
            className="p-4 flex flex-col gap-2 bg-slate-400 w-[200px] border rounded-lg"
          >
            <p>Product Id: {item.id}</p>
            <p>Product Price: ${item.price}</p>
            <p>Product Title: {item.title}</p>
          </div>
        ))}
      </div>
      <button
        disabled={disable}
        onClick={() => setCount(count + 1)}
        className=" px-4 py-2 border rounded bg-black text-white mb-5 disabled:bg-red-600 disabled:cursor-not-allowed"
      >
        Load More
      </button>

      {products.length >= 100 ? (
        <p className="font-semibold mb-5 text-lg text-red-600">
          You have scrolled 100 items.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoadMoreData;
