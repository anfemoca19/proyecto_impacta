import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import "../Configuration/configuration.css";
export default function Configruation() {
  return (
    <>
      {" "}
      <Header />
      <Layout
        navBar={<Navbar />}
        sideBar={
          <>
            <Calendar />
            <AccountUser />
            <Categorias />
            <GraphUsers />
          </>
        }
      >
        <div className="">
          <span>Perfil de la empresa</span>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Perfil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Personalización
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Estilos login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Estilos Administracón</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Estilos Academica</a>
            </li>
          </ul>
          <div className="container-promedio background-color ">
            <div class="mb-3">
              <label class="btn" type="text">
                Nombres de la empresa<span>*</span>
              </label>
              <input type="text" class="styles-input" />
            </div>
            <div class="mb-3">
              <label class="btn" type="text">
                Nombre del encargado <span>*</span>
              </label>
              <input type="text" class="styles-input" />
            </div>
            <div class="mb-3">
              <label class="btn" type="text">
                Cargo del encargado<span>*</span>
              </label>
              <input type="text" class="styles-input" />
            </div>
            <div class="mb-3">
              <label class="btn" type="text">
                Email del encargado<span>*</span>
              </label>
              <input type="text" class="styles-input" />
            </div>
            <div class="mb-3">
              <label class="btn" type="text">
                Telefono del encargado<span>*</span>
              </label>
              <input type="text" class="styles-input" />
            </div>
            <button>Actualizar </button>
          </div>
          <div className="container-acountUser">
            <div className="background-color  container-element">
              <div className="row">
                <div className="col-5">
                  <img src="" alt="" />
                  aca
                </div>
                <div className="col-5">aca</div>
                <div className="col-5">aca</div>
              </div>
              <span>Usuarios activos</span>
            </div>
            <div className="background-color  container-element">
              <div className="row">
                <div className="col-5">
                  <img src="" alt="" />
                  imagen
                </div>
                <div className="col-5">aca</div>
                <div className="col-5">aca</div>
              </div>
              <span>Usuarios activos la ultima semana</span>
            </div>
          </div>
          <div className="container-progres background-color "></div>
          <div className="container-progres background-color "></div>
          <div className="container-activate">
            <span>
              Da click aquí para comenzar el proceso de activar tus usuarios
            </span>
            <img src="https://iconos8.es/icon/368/subir" alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
}
