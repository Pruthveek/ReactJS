import React, { useState, useEffect } from "react";
import Card from "./restaurantCard";
import Shimmer from "./shimmerui";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [toggleValue, setToggleValue] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);
      const fetchedRestaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (err) {
      setError("Failed to fetch restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function filterData(searchText) {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function handleSearch() {
    if (!searchInput.trim()) {
      setFilteredRestaurants(restaurants);
    } else {
      setFilteredRestaurants(filterData(searchInput));
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search-box"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="toggle-container">
        <h1>{toggleValue ? "ON" : "OFF"}</h1>
        <button
          className="toggle-button"
          onClick={() => setToggleValue((prev) => !prev)}
        >
          Toggle
        </button>
      </div>

      {loading && <Shimmer />}
      {error && <p className="error">{error}</p>}

      <div className="BodyPart">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="card-link">
              <Card {...restaurant.info}  />
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};

export default Body;
