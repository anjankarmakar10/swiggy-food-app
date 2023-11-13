import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const price = items.reduce((sum, item) => (sum += item?.card.info?.price), 0);

  return (
    <div className="relative">
      <div className="container mx-auto min-h-[90vh] p-4 relative flex gap-8 flex-col md:flex-row">
        <div className="flex flex-col gap-2 w-full">
          {items.length === 0 ? (
            <h1 className="text-center font-bold text-2xl">Cart is Empty...</h1>
          ) : (
            items.map((item) => (
              <CartItem key={item.card.info?.id} item={item} />
            ))
          )}
        </div>

        {items.length !== 0 && (
          <div className=" bg-slate-400  p-4 h-fit md:w-96 w-full rounded-md sticky top-[90px] text-center flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-lg  text-white p-2 rounded-md bg-[#FC8112]">
                Total Items: {items.length}
              </h1>
              <h1 className="font-medium text-lg text-white p-2 rounded-md bg-[#FC8112]">
                Total Price: ₹{price / 100}
              </h1>
            </div>
            <button className="self-end text-white p-2 font-semibold w-full rounded-md bg-[#48C479]">
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
