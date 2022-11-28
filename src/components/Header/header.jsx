import "./header.css";

export default function Header() {
  return (
    <div className="container-header">
      <div className="row">
        <div className="col container-logo">
          <img src="" alt="logo" />
        </div>
        <div className="col-6">
          <div className="container-data-user">
            <div className="radius-foto">
              <img src=".." alt="" />
            </div>
            <span>Nombre Administrador / Nombre empresa</span>
          </div>
        </div>
        <div className="col container-pricipal-search">
          <div className="container-search">
            <img className="icon-search" src="../" alt="icon-sarch" />
            <input className="input-search" type="text" placeholder="Buscar" />
          </div>
        </div>
      </div>
    </div>
  );
}
