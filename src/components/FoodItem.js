import { image_url } from "./config";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const FoodItem = ({ id, imageId, name, description, price, onRemove }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div
        className="cards"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          width: "200px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={image_url + imageId}
          alt={name}
          style={{
            width: "100%",
            borderRadius: "4px",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <div className="card-details" style={{ padding: "10px" }}>
          <h2 style={{ fontSize: "18px" }}>{name}</h2>
          <h4
            style={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "10px",
            }}
          >
            {description}
          </h4>
          <h5 style={{ fontWeight: "bold" }}>Rupees: {price / 100}</h5>
          <button
            onClick={() => onRemove(id)}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
