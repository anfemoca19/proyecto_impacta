import clsx from "clsx";
import styles from "../EditLogo/EditLogo.module.scss";
import icon_user_logo from "../../imagenes/icono-editar-logo.png";
import UploadInput from "../UI/UploadInput/UploadInput";
import Button from "../UI/Button";
import { useState } from "react";

export default function EditLogo() {
  const [, setDragFiles] = useState([]);

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
      className={clsx(
        "container-fluid p-4 mb-5 text-center",
        styles["line-divider-boton"]
      )}
    >
      <div className={clsx("row", {})}>
        <div className={clsx("grid-containe", {})}>
          <span className={clsx(styles["style-title-logos"])}>
            Logos e imágenes
          </span>
        </div>
      </div>
      <div className={clsx("row mt-3", {})}>
        <div className={clsx("grid-containe", {})}>
          <div>
            <span>Editar logo</span>
          </div>
          <div className={clsx("mt-3", {})}>
            <img
              className={clsx(styles["style-img-perfil"])}
              src={icon_user_logo}
              alt=""
              id="img-perfil"
            />
          </div>
        </div>
      </div>
      <div className={clsx("row")}>
        <div className={clsx("grid-containe mt-3", {})}>
          <div className={clsx(styles["container-input"])}>
            <UploadInput className={"iborrainputfile"} handleDrop={handleDrop}>
              Selecionar una imagen
            </UploadInput>
          </div>
          <span>Tamaño sugerido (1500px por 250px)</span>
        </div>
      </div>
      <div className={clsx("row")}>
        <div className={clsx("col-12 mt-3")}>
          <Button>Guardar</Button>
        </div>
      </div>
    </div>
  );
}
