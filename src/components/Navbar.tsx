"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

function Navbar() {
  const pathName = usePathname();
  const {cartTotalQty} = useShoppingCartContext()
  const navLinks = [
    {
      href: "/",
      title: "Home",
      id: 1,
    },
    {
      href: "/store",
      title: "Store",
      id: 2,
    },
  ];
  return (
    <nav className="shadow p-4 ">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((item) => (
              <Link
                className={`pb-2 pt-2 pr-4 pl-4 mr-4 rounded-lg hover:bg-blue-700 ${
                  pathName === item.href ? "bg-blue-700" : ""
                }`}
                key={item.id}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="text-white px-2 py-1 bg-red-500 rounded-full">{cartTotalQty}</span>
            <Link href="/cart">Cart</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
