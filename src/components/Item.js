import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleCartItems(){
    setIsInCart(!isInCart)
  }

    return (
    <li className= {isInCart? "in-cart" : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartItems} className={isInCart ? 'remove' : 'add'}>
        {!isInCart ? 'Add to Cart': 'Remove From Cart'}
      </button>
    </li>
  );
}

export default Item;
