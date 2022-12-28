import "../AcountUser/accountUser.scss";
import usuarios_icon from "../../imagenes/icono-usuarios-nuevos-registrados.png";

export default function AccountUser() {
  return (
    <div className="container-fluid container-account rounded text-center">
      <div className="container-fluid style-container-nubmer-icon">
        <span className="style-number-user-register">200</span>
        <img
          src={usuarios_icon}
          alt="icon-person"
          className="style-icon-person"
        />
      </div>
      <div className="col">
        <span>Usuarios nuevos registrados</span>
      </div>
    </div>
  );
}
