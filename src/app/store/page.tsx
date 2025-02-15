import Container from "@/components/Container";
import ProductItem, { IProductItems } from "@/components/ProductItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Store() {
  const result = await fetch("http://localhost:3001/products");
  const data = (await result.json()) as IProductItems[];

  return (
    <Container>
      <h1 className="py-4">Store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
