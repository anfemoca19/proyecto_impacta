import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

import upload from "../../imagenes/icono-carga-de-archivos.png";
import usuarios_icon from "../../imagenes/icono-usuarios-activos.png";
import violet_porcentaje from "../../imagenes/violet-porcentaje.png";

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
          <div className="container-fluid d-flex justify-content-between  align-items-center">
            <div className="background-color  col text-center rounded container-acountUser">
              <div className="row ">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img className="user-icon" src={usuarios_icon} alt="" />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="style-number">70</span>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="circle-violet"></span>
                </div>
              </div>
              <span className="style-text">Usuarios activos</span>
            </div>
            <div className="background-color  col text-center rounded container-acountUser">
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img className="user-icon" src={usuarios_icon} alt="" />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="style-number">70</span>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="circle-violet"></span>
                </div>
              </div>
              <span className="style-text">
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>
          <div className=" container-fluid d-flex justify-content-between  align-items-center background-color mt-3">
            <div className="container d-flex">
              <div>
                <img src={violet_porcentaje} alt="" />
              </div>
              <div>
                <img src={violet_porcentaje} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="row">
                <span className="circle-violet"></span>
                <span>Consumo promedio de contenido por usuario</span>
              </div>
              <div className="row ">
                <span className="circle-green"></span>
                <span> total de contenido consumido por la empresa</span>
              </div>
            </div>
          </div>
          <div className="container-activate d-flex justify-content-between align-items-center ps-4 pe-4">
            <span>
              Da click aquí para comenzar el proceso de activar tus usuarios
            </span>
            <img className="icon-upload" src={upload} alt="icon-upload" />
          </div>
        </div>
      </Layout>
    </>
  );
}
