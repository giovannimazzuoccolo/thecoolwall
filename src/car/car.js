import React from "react";
import PropTypes from "prop-types";
import "./car.css";

//animations
import { useSpring, animated, config } from "react-spring";

export default function Car(props) {
  const animProps = useSpring({
    from: { bottom: -500, transform: "rotate(0deg)" },
    to: {
      bottom: Math.floor(Math.random() * 50) + 1,
      transform: `rotate(${Math.floor(Math.random() * 8) + 1}deg)`
    },
    delay: 500,
    config: config.wobbly
  });

  return (
    <animated.div className="car" style={animProps} draggable>
      <img src={"/images/" + props.image} alt={props.model} draggable="false" />
      <p>{props.model}</p>
    </animated.div>
  );
}

Car.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
};
