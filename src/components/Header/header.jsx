import "./header.css";
import Icon_sarch from "../../imagenes/icon-search.png";
import logo from "../../imagenes/logo-en-color.png";
import foto_perfil from "../../imagenes/foto-perfil.jpg";
export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 container-logo divider-right">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="col-6 divider-right">
          <div className="container-data-user">
            <div className="container-foto-perfil">
              <img className="foto-perfil" src={foto_perfil} alt="" />
            </div>
            <span>Nombre Administrador / Nombre empresa</span>
          </div>
        </div>
        <div className="col-4 container-pricipal-search">
          <div className="container-search">
            <img className="icon-search" src={Icon_sarch} alt="icon-sarch" />
            <input className="input-search" type="text" placeholder="Buscar" />
          </div>
        </div>
      </div>
    </div>
  );
}
