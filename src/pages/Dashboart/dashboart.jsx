import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import "./dashboart.css";
import Layout from "../../components/Layout";

export default function Dashboard() {
  return (
    <>
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
          <div className="container-promedio background-color "></div>
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
