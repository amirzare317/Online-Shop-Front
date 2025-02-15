import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProductItems } from "@/components/ProductItem";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: IProductProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await result.json()) as IProductItems;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 p-4">
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-purple-100">{data.description}</p>
          <p className="font-bold text-xl">
            Price: <span>{data.price}$</span>
          </p>
          <AddToCart id={id}/>
        </div>
        <div className="col-span-3  h-48">
          <img
            className="rounded-lg"
            src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}

export default Product;
