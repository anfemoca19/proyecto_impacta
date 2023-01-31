import { useState } from "react";
import clsx from "clsx";
import styles from "../Personalization/personalization.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import DragAndDrop from "../../components/UI/DragAndDrop";

import Button from "../../components/UI/Button";

import icon_camera from "../../imagenes/icono-arrastra-una-imagen.png";

import Menu from "../../components/Menu/Menu";
import UploadInput from "../../components/UI/UploadInput/UploadInput";
import Label from "../../components/UI/Label/Label";
import { USER_PERMISSIONS } from "../../constants/user_const";
import EditLogo from "../../components/EditLogo/EditLogo";

export default function Personalization() {
  const [colorValue, setColorValue] = useState("#ffff");
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

  let dataUserResgitrados = ["200"];
  return (
    <>
      {" "}
      <Header />
      <Layout
        navBar={<Navbar />}
        sideBar={
          <>
            <Calendar />
            {!USER_PERMISSIONS.isAdmin && (
              <AccountUser dataNumber={dataUserResgitrados} />
            )}
            <Categorias />
            {!USER_PERMISSIONS.isAdmin && <GraphUsers />}
          </>
        }
      >
        <div className={clsx("container-fluid", {})}>
          <span className={clsx("container-fluid", styles["style-title"])}>
            Perfil de la empresa
          </span>
          <Menu />
          <EditLogo />
          <div
            // className="p-4 box-container mb-5 container-fluid p-4"
            className={clsx(
              "p-5 mb-5 container-fluid",
              styles["box-container"]
            )}
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
              <div className={clsx("mt-3", styles["container-bottom"])}>
                <div
                  // className="col-5 mt-3"
                  className={clsx("col-5 mt-3 text-center")}
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
                  className={clsx("col-5 mt-3 text-center")}
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
          </div>
          <div
            // className="p-4 box-container mb-5 container-fluid p-4"
            className={clsx(
              "p-5 mb-5 container-fluid",
              styles["box-container"]
            )}
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
              <div className={clsx("mt-3", styles["container-bottom"])}>
                <div
                  // className="col-5 mt-3"
                  className={clsx("col-5 mt-3 text-center")}
                >
                  <Button>Guardar</Button>
                </div>
                <div
                  // className="col-5 mt-3"
                  className={clsx("col-5 mt-3 text-center")}
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
        </div>
      </Layout>
    </>
  );
}
