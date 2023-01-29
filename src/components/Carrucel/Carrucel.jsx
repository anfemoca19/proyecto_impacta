import clsx from "clsx";
import { useState } from "react";
import CardCurses from "../CardCurses/CardCurses";
import styles from "../Carrucel/Carrucel.module.scss";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import icon_next_rigth from "../../imagenes/icono-siguiente.png";
// import icon_next_left from "../../imagenes/icono-anterior.png";
export default function CarrucelCard({ cursesData, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const limitSlider = 3;
  const handlePrevius = () => {
    setCurrentIndex(
      currentIndex - limitSlider < 0
        ? cursesData.length - limitSlider
        : currentIndex - limitSlider
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevState) => {
      return prevState + limitSlider >= cursesData.length
        ? 0
        : prevState + limitSlider;
    });
  };
  const imagesToShow = cursesData.slice(
    currentIndex,
    currentIndex + limitSlider
  );

  return (
    <>
      <div id="carouselExample" className={clsx("carousel slide")}>
        <div
          className={clsx("carousel-inner", styles["carousel-inner-number"])}
        >
          {imagesToShow.map((curses) => {
            return <CardCurses key={curses.id} cursesData={curses} />;
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
