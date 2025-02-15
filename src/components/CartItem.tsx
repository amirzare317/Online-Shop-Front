import React from "react";

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-gray-800 mb-4">
      <div className="col-span-10">
        <div className="">
          <h2>Product Name</h2>
          <p>
            Count: <span>3</span>
          </p>
          <p>
            Price: <span>45$</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-blue-700 font-bold">
            -
          </button>
          <p className="font-black">3</p>
          <button className="px-4 py-2 rounded-lg bg-blue-700 font-bold">
            +
          </button>
        </div>
      </div>
      <img
        className="col-span-2"
        src="https://www.akamai.com/site/im-demo/media-viewer/01.jpg?imwidth=5000"
        alt=""
      />
    </div>
  );
}

export default CartItem;
