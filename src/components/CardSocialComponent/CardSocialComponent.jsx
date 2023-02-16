import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { socialComment } from "../../constants/user_const";
import CardSocial from "../CardSocial/CardSocial";
import styles from "../CardSocialComponent/CardSocialComponent.module.scss";

export default function CardSocialComponent({ ...props }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const limitSlider = props.limitSlider;

  const imagesToShow = socialComment.slice(
    currentIndex,
    currentIndex + limitSlider
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      containerRef.current.scrollLeft += 100;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={
          ("p-4", clsx(styles["container-box-social"], styles.containerSocial))
        }
        ref={containerRef}
      >
        {imagesToShow.map((coment) => {
          return <CardSocial key={coment.id} comentSocial={coment} />;
        })}
      </div>
    </>
  );
}
