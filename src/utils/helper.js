export function filterData(searchText) {
    const filteredRestaurants=restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurants;
  }