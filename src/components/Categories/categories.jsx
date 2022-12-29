import "../Categories/categories.scss";
import { Link } from "react-router-dom";

export default function Categorias() {
  return (
    <>
      <div className="container-fluid  mb-4 mt-5">
        <span className="title-style">Categorias</span>
        <div className="row mt-2">
          <div className="col text-center ">
            <Link className="">
              <span className="rounded style-icon icon-nutricion-blanco" />
              <span className="card-subtitle text-muted mt-5">Nutricón</span>
            </Link>
          </div>
          <div className="col text-cente">
            <Link className="">
              <span className="rounded style-icon icon-estilo-vida-blanco " />
              <span className="card-subtitle text-muted mt-2">
                Estilo de vida
              </span>
            </Link>
          </div>
          <div className="col text-center">
            <Link className="">
              <span className="rounded style-icon icon-actividad-fisica-blanco " />
              <span className="card-subtitle text-muted mt-2">
                Actividad fisica
              </span>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <Link className="" to="">
              <span className="rounded style-icon icon-yoga-blanco" />
              <span className="card-subtitle  text-muted mt-2">Yoga</span>
            </Link>
          </div>
          <div className="col text-center">
            <Link className="" to="">
              <span className="rounded style-icon icon-inteligencia-blanco" />
              <span className="card-subtitle  text-muted mt-2">
                Inteligencia emocional
              </span>
            </Link>
          </div>
          <div className="col text-center">
            <Link className="" to="">
              <span className="rounded style-icon icon-finanzas-blanco" />
              <span className="card-subtitle  text-muted mt-2">Finanzas</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
