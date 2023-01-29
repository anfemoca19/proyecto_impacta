import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {} from "@fortawesome/free-regular-svg-icons";

import "../Star/Star.scss";
import React from "react";

export default function Star(props) {
  return (
    <div className="stars">
      {[...new Array(5)].map((star, index) => {
        return (
          <React.Fragment key={index}>
            {index < props.score ? (
              <AiFillStar
                color={props.colorBorder}
                style={{ fontSize: props.fontSize }}
              />
            ) : (
              <AiOutlineStar
                color={props.colorRelleno}
                style={{ fontSize: props.fontSize }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
