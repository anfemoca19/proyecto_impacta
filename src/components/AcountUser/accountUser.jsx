import "../AcountUser/accountUser.css";
import usuarios_icon from "../../imagenes/icono-usuarios-nuevos-registrados.png";

export default function AccountUser() {
  return (
    <div class="container-fluid container-account rounded text-center">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="">
          <h1 class="">200</h1>
        </div>
        <div>
          <img
            src={usuarios_icon}
            alt="icon-person"
            className="style-icon-person"
          />
        </div>
      </div>
      <div class="col">
        <p>Usuarios nuevos registrados</p>
      </div>
    </div>
  );
}
