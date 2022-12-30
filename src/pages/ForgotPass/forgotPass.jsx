import "./forgotPass.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";

export default function ForgotPass() {
  return (
    <section className="container-login">
      <div className="imagen-fondo"></div>

      <img src={logo} alt="logo" className="img-logo" />
      <form className="form-forgot">
        <p className="tittle-style">¿Olvido su contraseña?</p>
        <p className="parrafo-style">
          No hay problema, permitanos conocer su correo y le enviaremos un
          correo con el link para que pueda actualizar su clave.
        </p>
        <div clas="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control style-input"
            placeholder="Email"
          />
        </div>

        <Button labelText="Iniciar sección" name="iniciar_seccion" />
      </form>
    </section>
  );
}
