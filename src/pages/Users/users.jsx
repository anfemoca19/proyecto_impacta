import styles from "./users.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/input";
import clsx from "clsx";

import arrow_icon from "../../imagenes/icono-siguiente.png";
import user_img from "../../imagenes/foto-perfil.jpg";
import icon_boton_anterior from "../../imagenes/icono-boton-anterior.png";
import icon_boton_siguiente from "../../imagenes/icono-boton-siguiente.png";
import Icon_search from "../../imagenes/icono-buscador.png";
import icon_plus_user from "../../imagenes/icono-anadir-usuarios.png";
import icon_menu from "../../imagenes/icono-todos-los-usuarios.png";
import { Link } from "react-router-dom";
import CardUserData from "../../components/PerfiluserComponent/PerfilUserComponent";
import { USER_PERMISSIONS } from "../../constants/user_const";

const userData = [
  {
    id: 1,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 2,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 3,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 4,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 5,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
  {
    id: 6,
    cargo: "Gerente",
    nombre: "Santiago Cardenas",
    correo: "jhondoe@tueempresa.com",
    telefono: 3005552455,
    edad: 30,
  },
];

let dataUserResgitrados = ["200"];
export default function Users() {
  return (
    <>
      <Header />
      <Layout
        navBar={<Navbar />}
        sideBar={
          <>
            <Calendar />
            {!USER_PERMISSIONS.isAdmin && (
              <AccountUser dataNumber={dataUserResgitrados} />
            )}
            <div
              className={clsx(
                "mt-5 mb-4",
                styles["styles-background-categories"]
              )}
            >
              <Categorias />
            </div>
            {!USER_PERMISSIONS.isAdmin && <GraphUsers />}
          </>
        }
      >
        <div className="container">
          <div>
            <div
              className={clsx(
                "p-2 col-4 ",
                styles["container-pricipal-search"]
              )}
            >
              <div className={clsx(styles["container-search"])}>
                <img
                  className={clsx(styles["icon-search"])}
                  src={Icon_search}
                  alt="icon-sarch"
                />
                {/* <input className="input-search" type="text" placeholder="Buscar" /> */}
                <Input
                  className={clsx("border-0", styles["input-search"])}
                  type="text"
                  placeholder="Buscar"
                ></Input>
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div
                className={clsx("col-3  ", styles["container-anadir-usuario"])}
              >
                {/* <Button
                  variant="primary"
                  className={"btn-cuartary"}
                  to="/addUser"
                >
                  {" "}
                  Añadir usuario{" "}
                </Button> */}
                <Link to="/addUser" className={clsx(styles["styles-anadir"])}>
                  {" "}
                  Añadir usuario
                </Link>
                <img
                  className={clsx(styles["icon-anadir-user"])}
                  src={icon_plus_user}
                  alt="icono-mas"
                />
              </div>
              <div className="col-9  d-flex  align-items-center ">
                <div className={clsx(styles["container-menu"])}>
                  <ul
                    className={clsx("nav  mb-3 mt-3", styles["container-menu"])}
                  >
                    <li className={clsx("nav-item text-center", {})}>
                      <Link className={clsx("style-nav", {})} to="/users">
                        <img
                          className={clsx("me-2", styles["icon-menu-style"])}
                          src={icon_menu}
                          alt=""
                        />
                        Todos los usuarios
                      </Link>
                    </li>
                    <li className={clsx("nav-item text-center", {})}>
                      <Link className={clsx("style-nav", {})} to="#">
                        Referidos
                      </Link>
                    </li>
                    <li className={clsx("nav-item text-center", {})}>
                      <Link className={clsx("style-nav", {})} to="#">
                        Familiares
                      </Link>
                    </li>
                    <li className={clsx("nav-item text-center", {})}>
                      <Link className={clsx("style-nav", {})}>
                        Empresariales
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
            {userData.map((user, index) => {
              return (
                <CardUserData
                  key={index}
                  imagenPerfil={user_img}
                  userData={user}
                />
              );
            })}
          </div>
          <div className={clsx("container-fluid d-flex mt-4 me-4", {})}>
            {" "}
            <div className={clsx("col-3", styles["container-vacio"])}></div>
            <div className={clsx("col-4 ", styles["container-btn-siguiente"])}>
              <div
                className={clsx(
                  " d-flex mr-2 align-items-center",
                  styles["container-styles-nextPage"]
                )}
              >
                <Button className="btn-terciary">Siguiente pagina</Button>
                <img
                  src={arrow_icon}
                  alt=""
                  className={clsx("me-3", styles["icon-arrow"])}
                />
              </div>
            </div>
            <div className={clsx("col-5 d-flex", styles["container-pages"])}>
              <div className={clsx("col-3 ", styles["container-pagina"])}>
                <span>Pagina</span>
              </div>
              <div className={clsx("col-3 ", {})}>
                <Input className={"input-page"} />
              </div>
              <div className={clsx("col-3 ", {})}>
                <span>de {userData.length}</span>
              </div>
              <div className={clsx("col-3 d-flex", {})}>
                <img
                  className={clsx("col-4", styles["btn-img"])}
                  src={icon_boton_anterior}
                />
                <img
                  className={clsx("col-4", styles["btn-img"])}
                  src={icon_boton_siguiente}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
