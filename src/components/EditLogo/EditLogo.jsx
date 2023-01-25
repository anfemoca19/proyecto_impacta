import clsx from "clsx";
import styles from "../EditLogo/EditLogo.module.scss";
import icon_user_logo from "../../imagenes/icono-editar-logo.png";
import UploadInput from "../UI/UploadInput/UploadInput";
import Button from "../UI/Button";
import { useState } from "react";

export default function EditLogo() {
  const [dragfiles, setDragFiles] = useState([]);

  const handleDrop = (files) => {
    let fileList = [];
    for (let i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }

    setDragFiles((prevState) => [...prevState, fileList]);
  };

  return (
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
  );
}
