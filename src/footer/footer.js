import React from "react";
import propTypes from "prop-types";
import "./footer.css";

const THE_STIG = "/images/stig.png";

export default function Footer({ points, lives }) {
  const createStigs = (lives) => {
    const stigs = [];
    for (let i = 0; i < lives; i++) {
      stigs.push(
        <img src={THE_STIG} key={i} alt="The stig" className="stigs" />
      );
    }
    return stigs;
  };

  return (
    <footer>
      <p>{points} points</p>
      {<div className="stigs_holder">{createStigs(lives)} </div>}
    </footer>
  );
}

Footer.propTypes = {
  points: propTypes.number.isRequired,
  lives: propTypes.number.isRequired,
};
