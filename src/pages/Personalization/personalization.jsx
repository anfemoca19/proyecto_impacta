import clsx from "clsx";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";

import "../Personalization/personalization.scss";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input/input";

import icon_user_logo from "../../imagenes/icono-editar-logo.png";

export default function Personalization() {
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
        <div className="container-fluid ">
          <span className="style-title ">Perfil de la empresa</span>
          <div className="nav container-fluid  ">
            <ul className="nav  mb-3 mt-3">
              <li className="nav-item text-center">
                <Link className={clsx("style-nav", {})} to="/configuration">
                  Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link className={clsx("style-nav", {})} to="/personalization">
                  Personalización
                </Link>
              </li>
              <li className="nav-item">
                <Link className={clsx("style-nav", {})} to="#">
                  Estilos login
                </Link>
              </li>
              <li className="nav-item">
                <Link className={clsx("style-nav", {})}>
                  Estilos Administracón
                </Link>
              </li>
              <li className="nav-item">
                <Link className={clsx("style-nav", {})}>Estilos Academica</Link>
              </li>
            </ul>
          </div>
          <div className="p-4 box-container mb-5 container-fluid">
            <div className="row">
              <div className=" grid-container">
                <span className="">Logos e imágenes</span>
              </div>
              <div className=" grid-container">
                <span>Editar logo</span>
                <img className="style-img-perfil" src={icon_user_logo} alt="" />
              </div>
              <div className=" grid-container">
                <Input type="file" />
                <span>Tamaño sugerido (1500px por 250px)</span>
              </div>
              <div className="col-12 mt-3">
                <Button>Guardar</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
