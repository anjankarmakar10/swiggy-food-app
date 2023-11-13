import RestaurantCard from "./RestaurantCard";
import { NavLink } from "react-router-dom";

const RestaurantList = ({ restaurantList }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {restaurantList.map((restaurant) => (
        <NavLink
          to={`restaurant/${restaurant.info.id}`}
          key={restaurant.info.id}
        >
          <RestaurantCard {...restaurant.info} />
        </NavLink>
      ))}
    </section>
  );
};

export default RestaurantList;
