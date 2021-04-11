import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const THE_STIG = "/images/stig.png";

export default function Footer({ points, lives, drawCard }) {
  const createStigs = (lives) => {
    const stigs = [];
    for (let i = 0; i < lives; i++) {
      stigs.push(<Stig src={THE_STIG} key={i} alt="The stig" />);
    }
    return stigs;
  };

  return (
    <StyledFooter>
      <ButtonPointsContainer>
        <Button onClick={drawCard}>Draw Card</Button>
        <p>{points} points</p>
      </ButtonPointsContainer>
      <StigContainer>{createStigs(lives)} </StigContainer>
    </StyledFooter>
  );
}

Footer.propTypes = {
  points: propTypes.number.isRequired,
  lives: propTypes.number.isRequired,
};

const ButtonPointsContainer = styled.div`
  display: flex;
  min-width: 310px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.7rem;
  line-height: 1.7rem;
  font-family: "Staatliches", cursive;
  color: #c71e1e;
  background-color: #222;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  max-height: 44px;
  outline: none;
`;

const StyledFooter = styled.footer`
  height: 8%;
  width: 99%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(-180deg, #eaeaea 100%, #9e9e9e 0%);
  font-family: "Staatliches", cursive;
  text-transform: uppercase;
  align-items: center;
  padding: 0px 20px;
  font-size: 1.7rem;
`;

const Stig = styled.img`
  height: 260%;
`;

const StigContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;
