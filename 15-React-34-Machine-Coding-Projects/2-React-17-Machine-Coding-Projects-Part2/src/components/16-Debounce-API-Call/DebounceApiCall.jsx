import React, { useEffect, useState } from "react";
import useDebounce from "./UseDebounce";

const DebounceApiCall = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);

  const debounceParamValue = useDebounce(searchParam, 1000);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/search?q=${debounceParamValue}`)
      .then((res) => res.json())
      .then((data) => data?.recipes?.length > 0 && setRecipes(data.recipes))
      .catch((err) => console.log(err));

    console.log(debounceParamValue);
  }, [debounceParamValue]);

  return (
    <div>
      <h1>Debounce API Call</h1>
      <div>
        <input
          type="text"
          placeholder="Search Recipe here..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {recipes?.length > 0 &&
          recipes.map((item) => (
            <div key={item.id}>
              <p>{item?.name}</p>
              <img
                style={{ width: "200px", objectFit: "contain" }}
                src={item.image}
                alt="recipe-img"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DebounceApiCall;
