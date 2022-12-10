import "../Categories/categories.scss";
import { Link } from "react-router-dom";

export default function Categorias() {
  return (
    <>
      <div className="container  mb-5 mt-5">
        <span className="title-style">Categorias</span>

        <div className="row mt-3">
          <div className="col text-center style-container container-icon">
            <Link className="nav-link">
              <span className="rounded style-icon icon-nutricion-blanco" />
              <h6 className="card-subtitle mb-2 text-muted">Nutricón</h6>
            </Link>
          </div>
          <div className="col text-cente container-icon">
            <Link className="nav-link">
              <span className="rounded style-icon icon-estilo-vida-blanco " />
              <h6 className="card-subtitle mb-2 text-muted">Estilo de vida</h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link">
              <span className="rounded style-icon icon-actividad-fisica-blanco" />
              <h6 className="card-subtitle mb-2 text-muted">
                Actividad fisica
              </h6>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span className="rounded style-icon icon-yoga-blanco" />
              <h6 className="card-subtitle mb-2 text-muted">Yoga</h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span className="rounded style-icon icon-inteligencia-blanco" />
              <h6 className="card-subtitle mb-2 text-muted">
                Inteligencia emocional
              </h6>
            </Link>
          </div>
          <div className="col text-center container-icon">
            <Link className="nav-link" to="">
              <span className="rounded style-icon icon-finanzas-blanco" />
              <h6 className="card-subtitle mb-2 text-muted">Finanzas</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
