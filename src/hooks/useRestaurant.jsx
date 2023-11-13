import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo(resId);
  }, [resId]);

  //   Fetch data from server
  const getRestaurantInfo = async (id) => {
    try {
      const response = await fetch(`${SWIGGY_MENU_URL}${id}`);
      const data = await response.json();

      if (!data.data) throw new Error(`Data ${data.statusMessage}`);

      const resData = data.data.cards[0].card.card.info;
      const menus = data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

      setRestaurant({ resData, menus });
    } catch (error) {
      console.log(error.message);
      return Error(error.message);
    }
  };

  //return restaurant data
  return restaurant;
};

export default useRestaurant;
