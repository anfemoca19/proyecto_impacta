import clsx from "clsx";
import "../Configuration/configuration.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/UI/Input/input";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Label from "../../components/UI/Label";

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
              <div className="col-5 grid-container">
                {/* Create a label component and then send the className to custom its height */}
                {/* 
                  <Label className="companyLabel"></Label>
                  companyLabel {
                    height: 30px
                  }
                */}
                <Label htmlFor="nombre_empresa">
                  Nombre de la empresa <span className="style-asterik">*</span>
                </Label>
                <Label htmlFor="nombre_encargadp">
                  Nombre de la empresa <span className="style-asterik">*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Cargo del encargado <span className="style-asterik">*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Email del encargado <span className="style-asterik">*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Telefono del encargado{" "}
                  <span className="style-asterik">*</span>
                </Label>
              </div>
              <div className="col-6 grid-container">
                <Input id="password" />
                <Input />
                <Input />
                <Input />
                <Input id="telefono_encargado" />
              </div>
              <div className="col-12 mt-3">
                <Button>Actualizar</Button>
              </div>
            </div>
          </div>
          <div className="container-fluid mb-5">
            <span className="style-title-actualice mt-5 mb-5">
              Actualice su contraseña
            </span>
            <p className="mt-3 style-title-pass">
              Asegure su cuenta con una contraseña fuerte
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="container box-container p-4 col-6">
                <Input placeHolder="Contraseña actual" />
                <Input placeHolder="Nueva contraseña" />
                <Input placeHolder="Confirme contraseña" />
                <Button className="mt-3">Iniciar Session</Button>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
