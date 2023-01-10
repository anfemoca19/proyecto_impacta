import styles from "./login.module.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import LoginLayout from "../../components/LoginLayout/LoginLayout";
import clsx from "clsx";

export default function Login() {
  return (
    <LoginLayout>
      <section className={styles["container-login"]}>
        <img src={logo} alt="logo" className={styles["img-logo"]} />
        <form className={styles["form-login"]}>
          <span className={styles["tittle"]}>Inicia Sesión</span>
          <div clas="form-outline ">
            <input
              type="email"
              id="form2Example1"
              className={clsx("form-control", styles["border-input"])}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className={clsx("form-control", styles["border-input"])}
              placeholder="Contraseña"
              required
            />
          </div>

          <Button name="iniciar_seccion">Iniciar sesión</Button>

          <div className="row mb-4 mt-5 form-group">
            <div className="col justify-content-center ">
              <div className="form-check">
                <input
                  className={clsx("form-check-input", styles["check-color"])}
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label
                  className={clsx(
                    "form-check-label",
                    styles["color-text-check"]
                  )}
                  htmlFor="form2Example31"
                >
                  {" "}
                  Recuerdame
                </label>
              </div>
            </div>
          </div>

          <div className={clsx("form-group", styles["container-btn-footer"])}>
            <Link
              to="/register"
              className={clsx(styles["border-button-login"])}
              name="register"
            >
              {" "}
              Crear Cuenta
            </Link>

            <Link
              to="/forgotPass"
              className={clsx(styles["border-button-login"])}
              name="forgot-pass"
            >
              ¿Olvido su contraseña?
            </Link>
          </div>
        </form>
      </section>
    </LoginLayout>
  );
}
