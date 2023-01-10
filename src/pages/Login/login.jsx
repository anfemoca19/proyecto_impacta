import "./login.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import LoginLayout from "../../components/LoginLayout/LoginLayout";

export default function Login() {
  return (
    <section className="container-login">
      {/* <LoginLayout /> */}
      <img src={logo} alt="logo" className="img-logo" />
      <form className="form-login">
        <span className="tittle">Inicia Sesión</span>
        <div clas="form-outline mb-">
          <input
            type="email"
            id="form2Example1"
            className="form-control border-input"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control border-input"
            placeholder="Contraseña"
            required
          />
        </div>

        <Button name="iniciar_seccion">Iniciar sesión</Button>

        <div className="row mb-4 mt-5 form-group">
          <div className="col justify-content-center ">
            <div className="form-check">
              <input
                className="form-check-input check-color"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label
                className="form-check-label color-text-check  "
                for="form2Example31"
              >
                {" "}
                Recuerdame
              </label>
            </div>
          </div>
        </div>

        <div className="container-btn-footer form-group">
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
