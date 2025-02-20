import React from "react";
import { pages } from "../constants/constants";
import { NavLink } from "react-router-dom";

function Navidation({ attr }) {
  return (
    <ul className={`${attr}__nav nav`}>
      {Object.keys(pages).map((item) => (
        <li key={`${attr}-${item}`} className="nav__item">
          <NavLink className="nav__link" to={pages[item]}>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navidation;
