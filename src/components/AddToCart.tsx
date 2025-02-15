"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import React, { useContext } from "react";

interface IAddToCartProps {
  id: string;
}
function AddToCart({ id }: IAddToCartProps) {
  const { cartItems, handleIncreaseProductQty, getProductQty } = useShoppingCartContext();

  console.log(cartItems);

  return (
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 rounded-lg bg-blue-700 font-bold">-</button>
      <p className="font-black">{getProductQty(parseInt(id))}</p>
      <button
        onClick={() => handleIncreaseProductQty(parseInt(id))}
        className="px-4 py-2 rounded-lg bg-blue-700 font-bold"
      >
        +
      </button>
    </div>
  );
}

export default AddToCart;
