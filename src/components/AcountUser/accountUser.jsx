import "../AcountUser/accountUser.scss";
import usuarios_icon from "../../imagenes/icono-usuarios-nuevos-registrados.png";

export default function AccountUser() {
  return (
    <div className="container-fluid container-account rounded text-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="">
          <h1 className="">200</h1>
        </div>
        <div>
          <img
            src={usuarios_icon}
            alt="icon-person"
            className="style-icon-person"
          />
        </div>
      </div>
      <div className="col">
        <p>Usuarios nuevos registrados</p>
      </div>
    </div>
  );
}
