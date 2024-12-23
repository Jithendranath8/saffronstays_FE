import React from "react";
import "../styles/location.css";

const Location = () => {
  return (
    <section className="location">
      <h2 className="location-title">Location</h2>
      <div className="map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9145394344613!2d72.8770569!3d18.7484114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9bdbfffefc6a3%3A0xa02dd7b7b90c6a6f!2sNandaidevi%20Temple!5e0!3m2!1sen!2sin!4v1672224444444!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <button className="directions-button"> Get Directions</button>
    </section>
  );
};

export default Location;
