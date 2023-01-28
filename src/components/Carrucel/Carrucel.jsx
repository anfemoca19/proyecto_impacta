import clsx from "clsx";
import { useState } from "react";
import CardCurses from "../CardCurses/CardCurses";
import styles from "../Carrucel/Carrucel.module.scss";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import icon_next_rigth from "../../imagenes/icono-siguiente.png";
// import icon_next_left from "../../imagenes/icono-anterior.png";
export default function CarrucelCard({ cursesData, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevius = () => {
  //   setCurrentIndex(currentIndex - 1);
  // };

  // const handleNext = () => {
  //   setCurrentIndex(currentIndex + 1);
  // };

  // const imagesToShow = cursesData.slice(currentIndex, currentIndex + 3);

  const handlePrevius = () => {
    setCurrentIndex(
      currentIndex - 1 < 0 ? cursesData.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex + 1 >= cursesData.length ? 0 : currentIndex + 1
    );
  };
  const imagesToShow = cursesData.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div id="carouselExample" className={clsx("carousel slide")}>
        <div
          className={clsx("carousel-inner", styles["carousel-inner-number"])}
        >
          {imagesToShow.map((curses) => {
            return <CardCurses cursesData={curses} />;
          })}
        </div>
        <button
          className={clsx("carousel-control-prev")}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          onClick={() => {
            handlePrevius();
          }}
        >
          <AiOutlineLeft
            color="#afdb00"
            style={{ fontSize: "50px", marginLeft: "-158px" }}
          />
        </button>
        <button
          className={clsx("carousel-control-next")}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          onClick={() => {
            handleNext();
          }}
        >
          <AiOutlineRight
            color="#afdb00"
            style={{ fontSize: "50px", marginLeft: "70px" }}
          />
        </button>
      </div>
    </>
  );
}
