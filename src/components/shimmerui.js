import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-text shimmer-subtitle"></div>
            <div className="shimmer-text shimmer-rating"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
