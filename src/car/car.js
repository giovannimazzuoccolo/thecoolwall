import React from "react";
import PropTypes from "prop-types";
import "./car.css";

export default function Car(props) {
  return (
    <div className="car" draggable>
      <img src={"/images/" + props.image} alt={props.model} />
      <p>{props.model}</p>
    </div>
  );
}

Car.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};
