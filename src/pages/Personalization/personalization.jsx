import clsx from "clsx";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import DragAndDrop from "../../components/UI/DragAndDrop";

import styles from "../Personalization/personalization.module.scss";
import Button from "../../components/UI/Button";

import icon_user_logo from "../../imagenes/icono-editar-logo.png";
import icon_camera from "../../imagenes/icono-arrastra-una-imagen.png";
import { useState } from "react";
import Menu from "../../components/Menu/Menu";
import UploadInput from "../../components/UI/UploadInput/UploadInput";
import Label from "../../components/UI/Label/Label";

export default function Personalization() {
  const [colorValue, setColorValue] = useState("#ffff");
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [dragfiles, setDragFiles] = useState([]);

  const onChangeColorPicker = (event) => {
    const value = event.target.value;
    setColorValue(value);
  };

  const handleDrop = (files) => {
    let fileList = [];
    for (let i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }

    setDragFiles((prevState) => [...prevState, fileList]);
  };

  const cancelUpload = (e) => {
    if (e.target.name === "btnDeleteImg") setDragFiles([]);
    if (e.target.name === "btnDeleteColor") setColorValue("#ffff");
  };
  const saveImgBackground = (e) => {
    console.log(dragfiles);
  };

  return (
    <>
      {" "}
      .,.
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
        <div className={clsx("container-fluid", {})}>
          <span className={clsx("container-fluid", styles["style-title"])}>
            Perfil de la empresa
          </span>
          <Menu />
          <div
            // className="p-4 mb-5 container-fluid line-divider-boton text-center"
            className={clsx(
              "container-fluid p-4 mb-5 text-center",
              styles["line-divider-boton"]
            )}
          >
            <div className={clsx("row", {})}>
              <div
                // className=" grid-container"
                className={clsx("grid-containe", {})}
              >
                <span
                  // className="style-title-logos"
                  className={clsx(styles["style-title-logos"])}
                >
                  Logos e imágenes
                </span>
              </div>
            </div>
            <div
              // className="row mt-3"
              className={clsx("row mt-3", {})}
            >
              <div
                // className=" grid-container"
                className={clsx("grid-containe", {})}
              >
                <div>
                  <span>Editar logo</span>
                </div>
                <div
                  // className="mt-3"
                  className={clsx("mt-3", {})}
                >
                  <img
                    // className="style-img-perfil"
                    className={clsx(styles["style-img-perfil"])}
                    src={icon_user_logo}
                    alt=""
                    id="img-perfil"
                  />
                </div>
              </div>
            </div>
            <div
              // className="row
              className={clsx("row")}
            >
              <div
                // className=" grid-container mt-3 "
                className={clsx("grid-containe mt-3", {})}
              >
                <div
                  // className="container-input"
                  className={clsx(styles["container-input"])}
                >
                  <UploadInput
                    className={"iborrainputfile"}
                    // className={clsx(styles.iborrainputfile)}
                    handleDrop={handleDrop}
                  >
                    Selecionar una imagen
                  </UploadInput>
                </div>
                <span>Tamaño sugerido (1500px por 250px)</span>
              </div>
            </div>
            <div className={clsx("row")}>
              <div
                // className="col-12 mt-3"
                className={clsx("col-12 mt-3")}
              >
                <Button>Guardar</Button>
              </div>
            </div>
          </div>
          <div
            // className="p-4 box-container mb-5 container-fluid p-4"
            className={clsx("p-4 box-container mb-5 container-fluid p-4")}
          >
            <div className={clsx("row")}>
              <div
                // className="container-backgraund mt-3 p-4"
                className={clsx("mt-3 p-4", styles["container-backgraund"])}
              >
                <span
                  // className="mt-3"
                  className={clsx("mt-3")}
                >
                  Editar imagen Background del login
                </span>
                <div
                  // className="d-flex image-upload-wrap mt-4"
                  className={clsx("mt-4 d-flex", styles["image-upload-wrap"])}
                >
                  <DragAndDrop handleDrop={handleDrop} />
                </div>
                <div>
                  {dragfiles.map((file, i) => (
                    <div key={i}>{file}</div>
                  ))}
                </div>
                <div
                  // className=" d-flex col-5 mt-3"
                  className={clsx("d-flex col-5 mt-3")}
                >
                  <img
                    src={icon_camera}
                    alt="icon-photo"
                    // className="icon-photo"
                    className={clsx(styles["icon-photo"])}
                  />
                  <div
                    // className="d-flex"
                    className={clsx("d-flex")}
                  >
                    <div
                      // className=" container-upload-img ms-3"
                      className={clsx("ms-3", styles["container-upload-img"])}
                    >
                      <span>Arrastra una imagen hasta aqui o</span>
                      <UploadInput
                        // className={"iborrainputfile linea-abajo"}
                        className={clsx(
                          "ms-3",
                          styles["linea-abajo"],
                          styles.iborrainputfile
                        )}
                        handleDrop={handleDrop}
                      >
                        sube un archivo
                      </UploadInput>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // className="col-5 mt-3"
                className={clsx("col-5 mt-3")}
              >
                <Button
                  name="btnSaveImg"
                  onClick={(e) => {
                    saveImgBackground(e);
                  }}
                >
                  Guardar
                </Button>
              </div>
              <div
                // className="col-5 mt-3"
                className={clsx("col-5 mt-3")}
              >
                <Button
                  name="btnDeleteImg"
                  onClick={(e) => {
                    cancelUpload(e);
                  }}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
          <div
            // className="p-4 box-container mb-5 container-fluid p-4"
            className={clsx("p-4 mb-5 container-fluid")}
          >
            <div
              // className="row"
              className={clsx("row")}
            >
              <div
                // className="container-backgraund"
                className={clsx(styles["container-backgraund"])}
              >
                <div
                  // className="row p-3"
                  className={clsx("row p-3")}
                >
                  <Label
                    // className="mb-2"
                    className={clsx("mb-2")}
                  >
                    Elige un color para el login
                  </Label>
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={colorValue}
                    onChange={onChangeColorPicker}
                    // className="input-select-color"
                    className={clsx(styles["input-select-color"])}
                  ></input>
                </div>
                <div
                  className={clsx("col-5 mt-3")}
                  // className="col-5 mt-3"
                ></div>
              </div>
              <div
                // className="col-5 mt-3"
                className={clsx("col-5 mt-3")}
              >
                <Button>Guardar</Button>
              </div>
              <div
                // className="col-5 mt-3"
                className={clsx("col-5 mt-3")}
              >
                <Button
                  name="btnDeleteColor"
                  onClick={(e) => {
                    cancelUpload(e);
                  }}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
