import React from "react";
import "./products.css";

function Pagination(props) {
  return (
    <div className="pagination">
      <button>&larr;</button>
      {props.pages.map((pageIndex) => (
        <button>{pageIndex + 1}</button>
      ))}
      <button>&rarr;</button>
    </div>
  );
}

export default Pagination;
