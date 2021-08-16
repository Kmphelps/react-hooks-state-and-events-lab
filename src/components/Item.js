import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false);

  function addToCart() {
    setItem((item) => !item);
  };

  const appClass = item ? "in-cart" : "";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
