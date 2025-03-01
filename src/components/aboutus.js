import React from "react";
import ProfileClass from "./ProfileClass";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to our platform, where innovation meets excellence. We are
          committed to delivering high-quality solutions tailored to your needs.
          Our team consists of dedicated professionals who believe in
          continuous improvement and customer satisfaction.
        </p>
        <p className="about-text lighter">
          Our mission is to bridge the gap between technology and creativity,
          ensuring seamless experiences for our users. With a strong focus on
          integrity and efficiency, we strive to exceed expectations in every
          project we undertake.
        </p>
        <p className="about-text lightest">
          Join us on this journey as we explore new horizons and redefine the
          standards of excellence.
        </p>
        <Link to="profileclass">View Profile From Class Component</Link><br/>
        <Link to="profile">View Profile From Functional Component</Link>
        <Outlet/>

      </div>
    </div>
  );
};

export default About;
