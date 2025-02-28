import React, { useEffect, useState } from "react";
import Product from "./Product";

const FilterProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      //   console.log(result.products);
      setProduct(result.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

//   const uniqueCategory = [...new Set(product.map((item) => item.category))];
//   console.log(uniqueCategory);

  return (
    <div style={{ textAlign: "center", marginBlock: "30px" }}>
      <h1>Filter Products By Category</h1>

      <div style={{ display: "inline-flex", gap: "10px" }}>
        <button onClick={(e) => setFilter(e.target.innerText)}>
          groceries
        </button>
        <button onClick={(e) => setFilter(e.target.innerText)}>
          furniture
        </button>
        <button onClick={(e) => setFilter(e.target.innerText)}>
          fragrances
        </button>
        <button onClick={(e) => setFilter(e.target.innerText)}>beauty</button>

        <button onClick={() => setFilter("")}>Clear Filter</button>
      </div>

      <div>
        {loading && <p>Loading Products...</p>}
        {error && <p>{error}</p>}
        <div
          style={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
          }}
        >
          {product?.length > 0 && !filter
            ? product.map((item) => <Product key={item.id} item={item} />)
            : product
                .filter(
                  (prod) => prod.category.toLowerCase() === filter.toLowerCase()
                )
                .map((item) => <Product key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
