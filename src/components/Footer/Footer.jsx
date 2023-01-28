import clsx from "clsx";
import CardCurses from "../CardCurses/CardCurses";
import styles from "../Footer/Footer.module.scss";

import icon_boton_anterior from "../../imagenes/icono-boton-anterior.png";
import icon_boton_siguiente from "../../imagenes/icono-boton-siguiente.png";

const cursesData = [
  {
    id: 1,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 2,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 3,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
];

export default function FooterComponenet() {
  return (
    <>
      <div className="container-fluid p-5">
        {/* Card
         */}
        <div>
          <span className={clsx(styles["style-title"])}>
            Cursos relacionados
          </span>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {cursesData.map((curses) => {
            return <CardCurses cursesData={curses} />;
          })}
        </div>
        <div className={clsx("col mt-4", styles["container-btn-next"])}>
          <img
            className={clsx("", styles["btn-img"])}
            src={icon_boton_anterior}
          />
          <img
            className={clsx("", styles["btn-img"])}
            src={icon_boton_siguiente}
          />
        </div>
      </div>
    </>
  );
}
