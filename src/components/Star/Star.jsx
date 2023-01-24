import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThin, faStar } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {} from "@fortawesome/free-regular-svg-icons";

import "../Star/Star.scss";

export default function Star(props) {
  return (
    <div className="stars">
      {[...new Array(5)].map((star, index) => {
        return index < props.score ? (
          <AiFillStar color="#7929e2" />
        ) : (
          <AiOutlineStar color="#7929e2" />
        );
      })}
    </div>
  );
}
