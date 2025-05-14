import React from "react";
import { useParams } from "react-router-dom";
import { image_url } from "./config";
import Shimmer from "./shimmerui";
import useRestaurantMenu from "../hook/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addToCart(item));
  };

  const items =
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
  const restaurantInfo = restaurant?.data?.cards[2]?.card?.card?.info;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      {/* Restaurant details */}
      <div className="restaurant-details">
        <div className="restaurant-container-info">
          <div>
            <img
              className="restaurant-img"
              src={image_url + restaurantInfo?.cloudinaryImageId}
              alt="Restaurant"
            />
          </div>
          <div>
            <h1 className="restaurant-name">{restaurantInfo?.name}</h1>
            <p className="restaurant-info">{restaurantInfo?.city}</p>
            <p className="restaurant-info">{restaurantInfo?.areaName}</p>
            <p className="restaurant-rating">{restaurantInfo?.avgRating} ★</p>
            <p className="restaurant-price">{restaurantInfo?.costForTwoMessage}</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-container">
        {items.map((item) => {
          const info = item?.card?.info;
          return (
            <div key={info?.id} className="menu-item">
              <img
                className="menu-img"
                src={image_url + (info?.imageId || info?.cloudinaryImageId)}
                alt={info?.name}
              />
              <p className="menu-item-name">{info?.name}</p>
              <p className="menu-item-price">
                ₹{((info?.price || info?.defaultPrice) / 100).toFixed(2)}
              </p>
              <button className="login-out" onClick={() => addFoodItem(info)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;