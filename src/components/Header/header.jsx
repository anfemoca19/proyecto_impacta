import "./header.scss";
import Icon_search from "../../imagenes/icono-buscador.png";
import Logo from "../../imagenes/logo-en-color.png";
import Foto_perfil from "../../imagenes/foto-perfil.jpg";
import Input from "../UI/Input/input";
export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 container-logo divider-right p-2">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="col-6 divider-right p-2 d-flex align-items-center">
          <div className="container-data-user">
            <div className="container-foto-perfil">
              <img className="foto-perfil" src={Foto_perfil} alt="" />
            </div>
            <span>Nombre Administrador / Nombre empresa</span>
          </div>
        </div>
        <div className="col-4 container-pricipal-search p-2">
          <div className="container-search">
            <img className="icon-search" src={Icon_search} alt="icon-sarch" />
            {/* <input className="input-search" type="text" placeholder="Buscar" /> */}
            <Input
              className="input-search-header border-0"
              type="text"
              placeholder="Buscar"
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
