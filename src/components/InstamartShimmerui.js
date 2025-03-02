import React from "react";

const InstaMartShimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-header">
        <div className="shimmer-search"></div>
      </div>
      <div className="shimmer-categories">
        <div className="shimmer-btn"></div>
        <div className="shimmer-btn"></div>
        <div className="shimmer-btn"></div>
        <div className="shimmer-btn"></div>
      </div>
      <div className="shimmer-grid">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-title"></div>
              <div className="shimmer-price"></div>
              <div className="shimmer-btn-sm"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstaMartShimmer;
