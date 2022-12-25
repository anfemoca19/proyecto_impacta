import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Input from "../UI/Input/input";
import "../Star/Star.scss";

export default function Star() {
  let allStart = document.querySelectorAll("stat");

  allStart.forEach((star, i) => {
    star.onclick = () => {
      console.log(star);
      console.log(i);
    };
  });
  return (
    <div className="d-flex">
      <button className="btn-start star" id="one-star">
        <FontAwesomeIcon icon={faStar} className="star-style" />
      </button>
      <button className="btn-start star" id="two-star">
        <FontAwesomeIcon icon={faStar} className="star-style" />
      </button>
      <button className="btn-start star" id="tree-star">
        <FontAwesomeIcon icon={faStar} className="star-style" />
      </button>
      <button className="btn-start star" id="four-star">
        <FontAwesomeIcon icon={faStar} className="star-style" />
      </button>
      <button className="btn-start star" id="five-star">
        <FontAwesomeIcon icon={faStar} className="star-style" />
      </button>
    </div>
  );
}
