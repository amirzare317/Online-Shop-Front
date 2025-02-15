import React from "react";

export interface IProductItems {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number
}

function ProductItem({image, title, price, description}: IProductItems) {
  return (
    <div className="shadow-md">
      <img
        className="rounded-lg"
        src={image}
        alt=""
      />
      <div className="p-2">
        <h3 className="font-bold">{title}</h3>
        <p>
          Price: <span>{price}</span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
