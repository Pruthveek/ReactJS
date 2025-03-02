import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_url } from "./config";
import Shimmer from "./shimmerui";
import useRestaurantMenu from "../hook/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantMenu(id);

  const items = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
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
              src={
                image_url +
                restaurantInfo?.cloudinaryImageId
              }
              alt="Restaurant"
            />
          </div>
          <div>
            <h1 className="restaurant-name">
              {restaurantInfo?.name}
            </h1>
            <p className="restaurant-info">
              {restaurantInfo?.city}
            </p>
            <p className="restaurant-info">
              {restaurantInfo?.areaName}
            </p>
            <p className="restaurant-rating">
              {restaurantInfo?.avgRating} ★
            </p>
            <p className="restaurant-price">
              {restaurantInfo?.costForTwoMessage}
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
              src={
                image_url +
                (item?.card?.info?.imageId ||
                  item?.card?.info?.cloudinaryImageId)
              }
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
