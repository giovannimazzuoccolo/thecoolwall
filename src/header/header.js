import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <ul className="header_titles">
        <li className="header_titles__sun">
          Seriously
          <br /> un-cool
        </li>
        <li className="header_titles__uc">
          <span>Un cool</span>
        </li>
        <li className="header_titles__cl">COOL</li>
        <li className="header_titles__sc">
          SUB
          <br />
          ZERO
        </li>
      </ul>
    </header>
  );
}
