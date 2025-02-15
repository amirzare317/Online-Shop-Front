import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="my-4">Cart</h1>

      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="bg-gray-500 shadow-md p-4">
        <h3>
          Total Price: <span>77$</span>
        </h3>
        <h3>
          The money that has benefit for you: <span>77$</span>
        </h3>
        <h3>
          Price after off: <span>77$</span>
        </h3>
      </div>

      <div className="flex">
        <label>Have a coupon?</label>
        <input type="text" placeholder="Enter it :)" />
        <button className="bg-blue-600 rounded-lg px-4 py-2">Add it</button>
      </div>
    </Container>
  );
}

export default Cart;
