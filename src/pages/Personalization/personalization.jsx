import clsx from "clsx";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
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
import icon_camera from "../../imagenes/icono-arrastra-una-imagen.png";
import { useState } from "react";
import Menu from "../../components/Menu/Menu";

export default function Personalization() {
  const [colorValue, setColorValue] = useState("#000");
  const onChangeColorPicker = (event) => {
    const value = event.target.value;
    setColorValue(value);
  };
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
          <Menu />
          <div className="p-4 mb-5 container-fluid line-divider-boton">
            <div className="row">
              <div className=" grid-container">
                <span className="style-title-logos">Logos e imágenes</span>
              </div>
            </div>
            <div className="row">
              <div className=" grid-container">
                <span>Editar logo</span>
                <img className="style-img-perfil" src={icon_user_logo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className=" grid-container">
                <Input type="file" />
                <span>Tamaño sugerido (1500px por 250px)</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <Button>Guardar</Button>
              </div>
            </div>
          </div>
          <div className="p-4 box-container mb-5 container-fluid p-4">
            <div className="row">
              <div className="container-arrastra">
                <div>
                  <span>Editar imagen Background del login</span>
                </div>
                <div className="col-5 mt-3">
                  <img src={icon_camera} alt="" />
                  <div>
                    <div>
                      <span>Arrastra una imagen hasta aqui o</span>
                      <span>sube un archivo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 mt-3">
                <Button>Guardar</Button>
              </div>
              <div className="col-5 mt-3">
                <Button>Eliminar</Button>
              </div>
            </div>
          </div>
          <div className="p-4 box-container mb-5 container-fluid p-4">
            <div className="row">
              <div className="container-arrastra">
                <div className="row p-3">
                  <label for="favcolor" className="mb-2">
                    Elige un color para el login
                  </label>
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={colorValue}
                    onChange={onChangeColorPicker}
                    className="input-select-color"
                  ></input>
                </div>
                <div className="col-5 mt-3"></div>
              </div>
              <div className="col-5 mt-3">
                <Button>Guardar</Button>
              </div>
              <div className="col-5 mt-3">
                <Button>Eliminar</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
