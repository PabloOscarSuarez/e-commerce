import React from "react";

export default function addToCart({ handleClick, book }) {

  return (
    <button
      type="submit"
      className="btn btn-secondary"
      onClick={() => {
        handleClick(book);
      }}
    >
      AddtoCart
    </button>
  );
}
