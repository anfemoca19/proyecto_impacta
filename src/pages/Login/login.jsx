import "./login.css";
import logo from "../../imagenes/logo-en-blanco.png";
import LongButton from "../../components/button/longButton";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="container-login">
      <img src={logo} alt="logo" className="img-logo" />
      <form className="form-login">
        <p className="tittle">Inicia Sesión</p>
        <div clas="form-outline mb-">
          <input
            type="email"
            id="form2Example1"
            className="form-control border-input"
            placeholder="Email"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control border-input"
            placeholder="Contraseña"
          />
        </div>

        <LongButton labelText="Iniciar sección" name="iniciar_seccion" />

        <div className="row mb-4">
          <div className="col justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input check-color"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label
                className="form-check-label color-text-check "
                for="form2Example31"
              >
                {" "}
                Recuerdame
              </label>
            </div>
          </div>
        </div>

        <div className="container-btn-footer">
          <Link to="/register" className="border-button-login">
            {" "}
            Crear Cuenta
          </Link>

          <Link to="/forgotPass" className="border-button-login" name="">
            ¿Olvido su contraseña?
          </Link>
        </div>
      </form>
    </section>
  );
}
