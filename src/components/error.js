import React from "react";
import { useRouteError,Link } from "react-router-dom";


const Error = () => {
  const err=useRouteError();
  return (
    <div className="error-container">
      <div className="error-container-child">
        <h1 className="error-code">{err.status}</h1>
        <p className="error-message">
          {err.statusText}
        </p>
        <Link to="/" className="home-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
