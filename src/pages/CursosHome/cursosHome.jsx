import clsx from "clsx";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../CursosHome/cursosHome.module.scss";
import Categorias from "../../components/Categories/categories";
import CarrucelCard from "../../components/Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";
import FooterHome from "../../components/FooterHome/FooterHome";
import ContactanosFomr from "../../components/Contactanos/Contactanos";
import Articules from "../../components/Articules/Articules";
import CardSocialComponent from "../../components/CardSocialComponent/CardSocialComponent";
import CardCurses from "../../components/CardCurses/CardCurses";

export default function CursosHome() {
  return (
    <>
      <HeaderHome />

      <div className={clsx("mt-4 p-4", styles["container-wrapper-categories"])}>
        <span
          className={clsx(
            "mt-2",
            styles["title-style-curses-web"],
            styles["styles-text"],
            styles["style-title-sidebar"]
          )}
        >
          Categorias
        </span>{" "}
        <Categorias className={"style-inline"} />
      </div>
      <div>
        <span></span>
        <p></p>
      </div>
      <div className={clsx("mt-3 p-4 container-fluid", styles.fixPosition)}>
        <span
          className={clsx(
            styles["styles-text-title-social"],
            styles["style-title-sidebar"],
            styles["title-center-home-mobile"]
          )}
        >
          Programas de bienestar en distintas áreas
        </span>
        <p
          className={clsx(
            "mt-4",
            styles["style-title-sidebar"],
            styles["title-center-home-mobile"]
          )}
        >
          Desarrollar tus capacidades y habilidades relacionadas con nutricióny
          más, para tener bienestar integral
        </p>
        {/* <CarrucelCard cursesData={cursesData} limitSlider={4} /> */}
        <div className={styles["container-coruses"]}>
          <div className={"col-1"}></div>
          <div
            className="row row-cols-1 row-cols-md-4 g-5 mt-2 
          "
          >
            {cursesData.map((curses, index) => {
              return <CardCurses key={index} isHome cursesData={curses} />;
            })}
          </div>
          <div className={"col-1"}></div>
        </div>
      </div>
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mb-4", styles["container-title-social"])}>
          <span
            className={clsx(
              styles["styles-text-title-social"],
              styles["style-title-sidebar"],
              styles["title-center-home-mobile"]
            )}
          >
            Lo que nuestros usuarios piensan de nosotros
          </span>
        </div>
        <div>
          <CardSocialComponent limitSlider={6} />
        </div>
      </div>
      <Articules />
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mt-4", styles["container-text-imgtree"])}>
          <div className={clsx(styles["container-tu-marca"])}>
            <p>
              Tu marca<span className={clsx(styles["styles-text"])}> +</span>{" "}
              nuestro contendido{" "}
              <span className={clsx(styles["styles-text"])}>
                = Colaboradores felices
              </span>
            </p>
          </div>
          <div
            className={clsx(
              "mb-4 container-fluid text-center",
              styles["container-contactanos"]
            )}
          >
            <ContactanosFomr />
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
}
