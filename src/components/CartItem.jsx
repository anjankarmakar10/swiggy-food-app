import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../toolkit/cartSlice";

const CartItem = ({ item }) => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    const item = items.find((item) => item?.card?.info?.id === id);
    const index = items.indexOf(item);
    dispatch(removeItem(index));
  };

  return (
    <div>
      <article key={item?.card?.info?.id} className="rastaurant-list-item">
        <div className="div1">
          <img
            className="w-[120px] h-[120px] object-cover"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
            alt={item?.card?.info?.name}
          />
          <button
            onClick={() => handleClick(item?.card?.info?.id)}
            className="add-btn bg-white"
          >
            Remove
          </button>
        </div>
        <div className="div2">
          <h3 className="menu-item-title">{item?.card?.info?.name}</h3>
          <span className="price">₹{item?.card.info?.price / 100}</span>
          <div className="menu-item-dis max-w-lg">
            {item?.card?.info?.description}
          </div>
        </div>
      </article>
    </div>
  );
};

export default CartItem;
