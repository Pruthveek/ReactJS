import {image_url} from "./config";
const Card=({cloudinaryImageId,name,cuisines,avgRatingString}) =>{
    return (
        <div className="cards">
            <img src={image_url+cloudinaryImageId}></img>
            <div className="card-details">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRatingString} star</h4>
            </div>
        </div>
    );
};

export default Card;