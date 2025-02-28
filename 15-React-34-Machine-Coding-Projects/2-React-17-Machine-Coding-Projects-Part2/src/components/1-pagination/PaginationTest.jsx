import React, { useState } from "react";
import Pagination from "./Pagination";
import "./Pagination.css";

const PaginationTest = () => {
  const dummyData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const perPageContent = 10;

  const totalPages = Math.ceil(dummyData.length / perPageContent);

  const startIndex = (currentPage - 1) * perPageContent;

  const currentListItems = dummyData.slice(
    startIndex,
    startIndex + perPageContent
  );

  function handlePage(page) {
    setCurrentPage(page);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Pagination Project</h1>
      <div>
        {currentListItems.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePage={handlePage}
      />
    </div>
  );
};

export default PaginationTest;
