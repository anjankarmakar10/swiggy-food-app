const filterData = (restaurant, query) => {
  return restaurant.filter((item) =>
    item?.info?.name?.toLowerCase()?.includes(query.toLowerCase())
  );
};

export { filterData };
