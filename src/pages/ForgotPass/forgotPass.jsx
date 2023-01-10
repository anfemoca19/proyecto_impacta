import styles from "./forgotPass.module.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";
import clsx from "clsx";

export default function ForgotPass() {
  return (
    <section className={styles["container-forgot-pass"]}>
      <div className="imagen-fondo"></div>

      <img src={logo} alt="logo" className="img-logo" />
      <form className={styles["form-forgot"]}>
        <span className={clsx("mb-4", styles["title-style"])}>
          ¿Olvido su contraseña?
        </span>
        <p className={clsx("mt-3", styles["parrafo-style"])}>
          No hay problema, permitanos conocer su correo y le enviaremos un
          correo con el link para que pueda actualizar su clave.
        </p>
        <div clas="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className={clsx("form-control mb-4", styles["style-input"])}
            placeholder="Email"
          />
        </div>
        <Button labelText="Iniciar sección" name="iniciar_sesión">
          Iniciar Sesión{" "}
        </Button>
      </form>
    </section>
  );
}
