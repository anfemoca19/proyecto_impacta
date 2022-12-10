import icon_nutricion_blanco from "../../imagenes/icono-categoria-nutricion-blanco.png";
import icon_estilo_vida_blanco from "../../imagenes/icono-categoria-estilo-de-vida-blanco.png";
import icon_actividad_fisica_blanco from "../../imagenes/icono-categoria-actividad-fisica-blanco.png";
import icon_yoga_blanco from "../../imagenes/icono-categoria-yoga-blanco.png";
import icon_inteligencia_blanco from "../../imagenes/icono-categoria-actividad-fisica-blanco.png";
import icon_finanzas_blanco from "../../imagenes/icono-categoria-actividad-fisica-blanco.png";

import "../Categories/categories.css";
import { Link } from "react-router-dom";

export default function Categorias() {
  return (
    <>
      <div className="container  mb-5 mt-5">
        <span className="title_style">Categorias</span>

        <div className="row mt-3">
          <div className="col text-center style-container container-icon">
            <Link className="nav-link">
              <span
                src={icon_nutricion_blanco}
                alt="icon_nutricion"
                className="rounded style-icon icon-nutricion"
              />
              <h6 className="card-subtitle mb-2 text-muted">Nutricón</h6>
            </Link>
          </div>
          <div className="col text-cente container-icon">
            <Link className="nav-link">
              <span
                src={icon_estilo_vida_blanco}
                alt="icon_estilo_de_vida"
                className="rounded style-icon icon_estilo_vida_blanco "
              />
              <h6 className="card-subtitle mb-2 text-muted">Estilo de vida</h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link">
              <span
                src={icon_actividad_fisica_blanco}
                alt="icon_actividad_fisica"
                className="rounded style-icon icon_actividad_fisica_blanco"
              />
              <h6 className="card-subtitle mb-2 text-muted">
                Actividad fisica
              </h6>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span
                src={icon_yoga_blanco}
                alt="icon_yoga"
                className="rounded style-icon icon_yoga_blanco"
              />
              <h6 className="card-subtitle mb-2 text-muted">Yoga</h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span
                src={icon_inteligencia_blanco}
                alt="icon_inteligencia"
                className="rounded style-icon icon_inteligencia_blanco"
              />
              <h6 className="card-subtitle mb-2 text-muted">
                Inteligencia emocional
              </h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span
                src={icon_finanzas_blanco}
                alt="icon_finanzas"
                className="rounded style-icon icon_finanzas_blanco"
              />
              <h6 className="card-subtitle mb-2 text-muted">Finanzas</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
