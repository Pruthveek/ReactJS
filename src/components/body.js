import React from "react";
import { useState, useEffect } from "react";
import { RestaurantsList } from "./config";
import Card from "./restaurantCard";

const Body = () => {
  // const searchText="Pizza";
  const [searchInput, setSearchInput] = useState();
  const [toggleValue, setToggleValue] = useState("true");
  const [restaurants, setRestaurants] = useState(RestaurantsList);

  useEffect(() => {
    getRestaurants();
  });
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.0330818&lng=72.6486334&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log("render");
  function filterData(searchInput) {
    const filterData = RestaurantsList.filter((restorent) =>
      restorent.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  }
  return (
    <>
      <div class="search-container">
        <input
          type="text"
          id="serch-box"
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
          return <Card {...restaurants?.info} key={restaurants?.info?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
