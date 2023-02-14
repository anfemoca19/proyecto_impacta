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
import Icon_search from "../../imagenes/icono-buscador.png";
import icon_plus_user from "../../imagenes/icono-anadir-usuarios.png";
import icon_menu from "../../imagenes/icono-todos-los-usuarios.png";
import { Link, useLocation } from "react-router-dom";
import CardUserData from "../../components/PerfiluserComponent/PerfilUserComponent";
import {
  dataUserResgitrados,
  userData,
  USER_PERMISSIONS,
} from "../../constants/user_const";

export default function Users() {
  const location = useLocation();
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
                    <li
                      className={clsx(" text-center", styles["nav-item"], {
                        [styles.active]: location.pathname === "/users",
                      })}
                    >
                      <Link className={clsx(styles["style-nav"])} to="/users">
                        <img
                          className={clsx("me-2", styles["icon-menu-style"])}
                          src={icon_menu}
                          alt=""
                        />
                        Todos los usuarios
                      </Link>
                    </li>
                    <li
                      className={clsx("text-center", styles["nav-item"], {
                        [styles.active]: location.pathname === "/#",
                      })}
                    >
                      <Link className={clsx(styles["style-nav"])} to="#">
                        Referidos
                      </Link>
                    </li>
                    <li
                      className={clsx("text-center", styles["nav-item"], {
                        [styles.active]: location.pathname === "/#",
                      })}
                    >
                      <Link className={clsx(styles["style-nav"])} to="#">
                        Familiares
                      </Link>
                    </li>
                    <li
                      className={clsx("text-center", styles["nav-item"], {
                        [styles.active]: location.pathname === "/#",
                      })}
                    >
                      <Link className={clsx(styles["style-nav"])}>
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
          <div
            className={clsx("container-fluid", styles["container-btn-next"])}
          >
            <div className={clsx(styles["container-styles-nextPage"])}>
              <Button className="btn-terciary">Siguiente pagina</Button>
              <img
                src={arrow_icon}
                alt=""
                className={clsx("me-3", styles["icon-arrow"])}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
