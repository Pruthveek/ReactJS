import UserContext from "../utils/userContext";
import { image_url } from "./config";
import { useContext } from "react";
const Card = ({ cloudinaryImageId, name, cuisines, avgRatingString }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="cards">
      <img src={image_url + cloudinaryImageId}></img>
      <div className="card-details">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRatingString} star</h4>
        <h5>
          {user.name}
        </h5>
        <h5>{user.email}</h5>
      </div>
    </div>
  );
};

export default Card;
