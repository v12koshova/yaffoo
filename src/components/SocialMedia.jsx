import React from "react";
import { socialMedia } from "../constants/constants";

function SocialMedia({ attr }) {
  return (
    <div className={`${attr}__social social`}>
      {Object.keys(socialMedia).map((sm) => (
        <a
          key={`${attr}-${sm}`}
          className={`social__item social__item--${sm}`}
          href={socialMedia[sm]}
        ></a>
      ))}
    </div>
  );
}

export default SocialMedia;
