import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_url } from "./config";
import Shimmer from "./shimmerui";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const items =
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards || [];
  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try{
      setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0330818&lng=72.6486334&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
    }catch(err){
      setError("Failed to fetch restaurants. Please try again.");
    }finally{
      setLoading(false);
    }
    
  }

  return (
    
    <div className="restaurant-container">
      {loading && <Shimmer/>}
      {error && <p className="error">{error}</p>}
      {/* Restaurant details */}
      <div className="restaurant-details">
        <div className="restaurant-container-info">
          <div>
            <img
              className="restaurant-img"
              src={
                image_url +
                restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
              }
              alt="Restaurant"
            />
          </div>
          <div>
          <h1 className="restaurant-name">
          {restaurant?.data?.cards[2]?.card?.card?.info?.name}
          </h1>
            <p className="restaurant-info">
              {restaurant?.data?.cards[2]?.card?.card?.info?.city}
            </p>
            <p className="restaurant-info">
              {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}
            </p>
            <p className="restaurant-rating">
              {restaurant?.data?.cards[2]?.card?.card?.info?.avgRating} ★
            </p>
            <p className="restaurant-price">
              {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-container">
        {items.map((item) => (
          <div key={item?.card?.info?.id} className="menu-item">
            <img
              className="menu-img"
              src={image_url + (item?.card?.info?.imageId || item?.card?.info?.cloudinaryImageId)}
              alt={item?.card?.info?.name}
            />
            <p className="menu-item-name">{item?.card?.info?.name}</p>
            <p className="menu-item-price">
              ₹{(item?.card?.info?.price / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
