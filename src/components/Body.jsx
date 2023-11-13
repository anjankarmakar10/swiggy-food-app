import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { ShimmerUICards } from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useRestaurants from "../hooks/useRestautants";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurants = useRestaurants();

  const onInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // filtered restaurants from all restaurants
    setFilteredRestaurants(filterData(restaurants, searchText));
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  // early return if data was not there
  if (!restaurants) return <h1>Somthing wrong data not found!</h1>;

  return (
    <div>
      <section className="search-section">
        <div className="container">
          <h1 className="search-section-title">
            Great restaurants in Bangalore, delivering to you
          </h1>
          <p className="search-section-subtitle">
            Set exact location to find the right restaurants near you.
          </p>
          <form onSubmit={(e) => onFormSubmit(e)} className="search-wrapper">
            <input
              className="input-search"
              placeholder="Search restautant..."
              type="text"
              value={searchText}
              onChange={(e) => onInputChange(e)}
            />
            <button className="btn-search">Find Food</button>
          </form>
        </div>
      </section>

      <div style={{ paddingBlock: "1.5rem" }} className="container">
        {/* render all data condition */}

        {restaurants?.length === 0 ? (
          <ShimmerUICards />
        ) : (
          <>
            {/* render filter data condition */}
            {filteredRestaurants.length === 0 ? (
              <h1>No Restaurant match your filter!!</h1>
            ) : (
              <RestaurantList restaurantList={filteredRestaurants} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
