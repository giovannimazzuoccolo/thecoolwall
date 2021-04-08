import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Car(props) {
  return (
    <StyledCar draggable>
      <StyledCarImage src={"/images/" + props.image} alt={props.model} />
      <StyledCarText>{props.model}</StyledCarText>
    </StyledCar>
  );
}

const StyledCar = styled.div`
  width: 18%;
  position: absolute;
  z-index: 1;
  bottom: 4px;
  left: 40%;
  background: #fff;
  box-shadow: 1px 1px 3px #000;
  border-radius: 8px;
  cursor: move;
  padding: 0.5%;
`;

const StyledCarImage = styled.img`
  width: 100%;
  float: left;
  padding-bottom: 0.4%;
`;

const StyledCarText = styled.p`
  text-align: center;
  width: 100%;
`;

Car.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};
