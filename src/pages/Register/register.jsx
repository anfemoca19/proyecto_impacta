import "./register.scss";
import logo from "../../imagenes/logo-en-blanco.png";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="container-login">
      <img src={logo} alt="logo" className="img-logo" />
      <form>
        <p className="tittle">Crear cuenta</p>
        <div clas="form-outline ">
          <input
            type="text"
            id="form2Example1"
            className="form-control style-input"
            placeholder="Nombre Completo"
          />
        </div>

        <div clas="form-outline ">
          <input
            type="text"
            id="form2Example1"
            className="form-control style-input"
            placeholder="Empresa"
          />
        </div>

        <div clas="form-outline ">
          <input
            type="number"
            id="form2Example1"
            className="form-control style-input"
            placeholder="Telefono"
          />
        </div>

        <div clas="form-outline ">
          <input
            type="email"
            id="form2Example1"
            className="form-control style-input"
            placeholder="Email"
          />
        </div>

        <div className="form-outline ">
          <input
            type="password"
            id="form2Example2"
            className="form-control style-input"
            placeholder="Contraseña"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control style-input"
            placeholder="Confirmar contraseña"
          />
        </div>

        <Button labelText="Crear cuenta" name="iniciar_seccion" />

        <div className="d-sm-flex">
          <Link to="/login" className="border-button-register">
            {" "}
            Ya tengo cuenta{" "}
          </Link>
        </div>
      </form>
    </section>
  );
}
