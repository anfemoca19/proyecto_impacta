import "../Users/users.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
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
import icon_plus_user from "../../imagenes/icono-anadir-usuarios.png";
import icon_menu from "../../imagenes/icono-todos-los-usuarios.png";
import { Link } from "react-router-dom";

export default function Users() {
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
        <div className="container">
          <div>
            <div className="row mt-3">
              <div className="col-4  d-flex container-anadir-usuario align-items-center ">
                <Button className={"btn-cuartary"}> Añadir usuario </Button>
                <img
                  className="icon-anadir-user"
                  src={icon_plus_user}
                  alt="icono-mas"
                />
              </div>
              <div className="col-8  d-flex  align-items-center ">
                <div className="nav container-fluid  ">
                  <ul className="nav  mb-3 mt-3">
                    <li className="nav-item text-center">
                      <Link
                        className={clsx("style-nav", {})}
                        to="/configuration"
                      >
                        <img
                          className="icon-menu-style"
                          src={icon_menu}
                          alt=""
                        />
                        Todos los usuarios
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx("style-nav", {})}
                        to="/personalization"
                      >
                        Referidos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={clsx("style-nav", {})} to="#">
                        Familiares
                      </Link>
                    </li>
                    <li className="nav-item">
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
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              {" "}
              <div className="card box-container">
                <div className="row no-gutters">
                  <div className="left col-md-4">
                    <img
                      src={user_img}
                      alt="foto-perfil"
                      className="img-perfil-style"
                    />
                  </div>
                  <div className="right col-md-4 mb-3">
                    <span className="style-span">Gerente</span>
                    <span className="style-span">Nombre Apellido</span>
                    <span className="style-span">jhondoe@tueempresa.com</span>
                    <span className="style-span">3005552455</span>
                    <span className="style-span">30 años</span>
                  </div>
                  <div className="right col-md-4 style-timepo-acomulado">
                    <span className="circle-green ">algo va a qui </span>
                    <span className="style-span">Tiempo acumoluado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" container-fluid d-flex ">
            {" "}
            <div className="col-4"></div>
            <div className="col-4 ">
              <dir className=" d-flex container-styles-nextPage mr-2">
                <Button className="btn-terciary">Siguiente pagina</Button>
                <img src={arrow_icon} alt="" className="icon-arrow" />
              </dir>
            </div>
            <div className="col-4 d-flex">
              <div className="col-3">
                <span>Pagina</span>
              </div>
              <div className="co-3">
                <Input className={"input-page"} />
              </div>
              <div className="col-3">
                <span>de </span>
              </div>
              <div className="col-3 d-flex">
                <img className="btn-img" src={icon_boton_anterior} />
                <img className="btn-img" src={icon_boton_siguiente} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
