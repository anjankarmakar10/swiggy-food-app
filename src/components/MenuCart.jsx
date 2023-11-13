import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../toolkit/cartSlice";
const MenuCart = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(item));
  };

  return (
    <article key={item.card.info?.id} className="rastaurant-list-item">
      <div className="div1 ">
        <img
          className="w-[120px] h-[120px] object-cover"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info?.imageId}`}
          alt={item.card.info?.name}
        />
        <button onClick={handleClick} className="add-btn bg-white">
          ADD
        </button>
      </div>
      <div className="div2">
        <h3 className="menu-item-title">{item.card.info?.name}</h3>
        <span className="price">₹{item.card.info?.price / 100}</span>
        <div className="menu-item-dis max-w-lg">
          {item.card.info?.description}
        </div>
      </div>
    </article>
  );
};

export default MenuCart;
