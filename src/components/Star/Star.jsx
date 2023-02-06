import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {} from "@fortawesome/free-regular-svg-icons";

import "../Star/Star.scss";
import React from "react";

export default function Star({ score, colorBorder, fontSize, colorRelleno }) {
  return (
    <div className="stars">
      {[...new Array(5)].map((star, index) => {
        return (
          <React.Fragment key={index}>
            {index < score ? (
              <AiFillStar color={colorBorder} style={{ fontSize }} />
            ) : (
              <AiOutlineStar color={colorRelleno} style={{ fontSize }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
