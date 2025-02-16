import React from "react";
import { useState } from "react";
import { RestaurantsList } from "./config";
import Card from "./restaurantCard";


const Body = () => {
  // const searchText="Pizza";
  const [searchInput, setSearchInput] = useState();
  const [toggleValue, setToggleValue] = useState("true");
  const [restaurants, setRestaurants] = useState(RestaurantsList);
  function filterData(searchInput) {
    const filterData = RestaurantsList.filter((restorent) =>
      (restorent.info.name).toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  }
  return (
    <>
      <div class="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            const data = filterData(searchInput);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="toggle-container">
        <h1>{toggleValue}</h1>
        <button
          type="Toggle"
          className="toggle-button"
          onClick={() => {
            if (toggleValue === "true") {
              setToggleValue("false");
            } else {
              setToggleValue("true");
            }
          }}
        >
          Toggle
        </button>
      </div>
      <div className="BodyPart">
        {restaurants.map((restaurants) => {
          return <Card {...restaurants.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
