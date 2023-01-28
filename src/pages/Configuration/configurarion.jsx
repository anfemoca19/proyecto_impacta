import clsx from "clsx";
import styles from "../Configuration/configuration.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/UI/Input/input";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Label from "../../components/UI/Label";
import Menu from "../../components/Menu/Menu";
import { USER_PERMISSIONS } from "../../constants/user_const";

let dataUserResgitrados = ["200"];

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
            {!USER_PERMISSIONS.isAdmin && (
              <AccountUser dataNumber={dataUserResgitrados} />
            )}
            <Categorias />
            {!USER_PERMISSIONS.isAdmin && <GraphUsers />}
          </>
        }
      >
        <div className={clsx("container-fluid ")}>
          <span className={clsx(styles["style-title"])}>
            Perfil de la empresa
          </span>
          <Menu />

          <div
            className={clsx(
              "container-fluid p-5 mb-5",
              styles["box-container"]
            )}
          >
            <div className={clsx("row")}>
              <div className={clsx("col-5", styles["grid-container"])}>
                <Label htmlFor="nombre_empresa ">
                  Nombre de la empresa{" "}
                  <span className={clsx(styles["style-asterik"])}>*</span>
                </Label>
                <Label htmlFor="nombre_encargadp">
                  Nombre del encargado
                  <span className={clsx(styles["style-asterik"])}>*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Cargo del encargado{" "}
                  <span className={clsx(styles["style-asterik"])}>*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Email del encargado{" "}
                  <span className={clsx(styles["style-asterik"])}>*</span>
                </Label>
                <Label htmlFor="telefono_encargado">
                  Telefono del encargado{" "}
                  <span className={clsx(styles["style-asterik"])}>*</span>
                </Label>
              </div>
              <div className={clsx("col-7", styles["grid-container"])}>
                <Input
                  id="password "
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2 ", styles["input-data-configuration"])}
                />
                <Input
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
                <Input
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
                <Input
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
                <Input
                  id="telefono_encargado"
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
              </div>
              <div
                // className="col-12 mt-3"
                className={clsx("col-12 mt-3")}
              >
                <Button>Actualizar</Button>
              </div>
            </div>
          </div>
          <div
            // className="container-fluid mb-5"
            className={clsx("container-fluid mb-5")}
          >
            <span
              // className="style-title-actualice mt-5 mb-5"
              className={clsx("mt-5 mb-5", styles["style-title-actualice"])}
            >
              Actualice su contraseña
            </span>
            <p
              // className="mt-3 style-title-pass"
              className={clsx("mb-3", styles["style-title-pass"])}
            >
              Asegure su cuenta con una contraseña fuerte
            </p>
          </div>
          <div
            // className="container-fluid"
            className={clsx("container-fluid")}
          >
            <div className={clsx("row")}>
              <div
                // className="container box-container p-4 col-6"
                className={clsx("container p-5 col", styles["box-container"])}
              >
                <Input
                  placeholder="Contraseña actual "
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
                <Input
                  placeholder="Nueva contraseña"
                  className="mb-2 input-data-configuration"
                  // className={clsx("mb-2", styles["input-data-configuration"])}
                />
                <Input
                  placeholder="Confirme contraseña"
                  className="mb-2 input-data-configuration"
                />
                <Button className={clsx("mt-3 mb-3")}>Iniciar Session</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
