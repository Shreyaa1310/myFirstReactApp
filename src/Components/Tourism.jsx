import React from "react";
import Footer from "./Footer";
import "./Tourism.css";
import placesData from "../placesData";

const Tourism = () => {
  return (
    <div>
      <div className="heading text-center">
        <h4>Best Places to Explore in France</h4>
      </div>
      <div className="container outer-container py-4">
        {placesData.map((place) => (
          <div
            key={place.id}
            className="row align-items-center mb-4 shadow-sm p-3 rounded bg-light"
          >
            <div className="col-md-4 text-center">
              <img
                src={place.image}
                alt={place.name}
                className="img-fluid rounded"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-8">
              <h5 className="text-primary">{place.name}</h5>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Tourism;
