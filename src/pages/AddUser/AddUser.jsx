import clsx from "clsx";
import styles from "../AddUser/addUser.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Input from "../../components/UI/Input/input";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/UI/Button";
import Label from "../../components/UI/Label";
import { USER_PERMISSIONS } from "../../constants/user_const";

let dataUserResgitrados = ["200"];

export default function AddUser() {
  const location = useLocation();
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
          <span className={clsx(styles["style-title"])}>Crear usuarios</span>
          <div className="d-flex  align-items-center ">
            <div
              className={clsx(
                "col-9    align-items-center",
                styles["container-menu"]
              )}
            >
              <ul className={clsx("nav  mb-3 mt-3", styles["container-ul"])}>
                <li
                  className={clsx(" text-center", styles["nav-item"], {
                    [styles.active]: location.pathname === "/users",
                  })}
                >
                  <Link className={clsx(styles["style-nav"])} to="/users">
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
                    [styles.active]: location.pathname === "/courses",
                  })}
                >
                  <Link className={clsx(styles["style-nav"])}>
                    Empresariales
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={clsx(
              "container-fluid p-4 mb-5",
              styles["box-container"]
            )}
          >
            <div className={clsx("row")}>
              <div className={clsx("col-5", styles["grid-container"])}>
                <Label htmlFor="nombre">Nombre </Label>
                <Label htmlFor="apellido">Apellido</Label>
                <Label htmlFor="telefono_encargado">Email </Label>
                <Label htmlFor="telefono_encargado">Subdominio </Label>
                <Label htmlFor="telefono_encargado">Empresa </Label>
                <Label htmlFor="telefono_encargado">País </Label>
                <Label htmlFor="telefono_encargado">Nit </Label>
                <Label htmlFor="telefono_encargado">Direccion </Label>
              </div>
              <div className={clsx("col-7", styles["grid-container"])}>
                <Input
                  id="password "
                  className="mb-2 input-data-configuration"
                />
                <Input className="mb-2 input-data-configuration" />
                <Input className="mb-2 input-data-configuration" />
                <Input className="mb-2 input-data-configuration" />
                <Input
                  id="telefono_encargado"
                  className="mb-2 input-data-configuration"
                />
                <Input
                  id="telefono_encargado"
                  className="mb-2 input-data-configuration"
                />
                <Input
                  id="telefono_encargado"
                  className="mb-2 input-data-configuration"
                />
                <Input
                  id="telefono_encargado"
                  className="mb-2 input-data-configuration"
                />
              </div>
              <div className={clsx("col-12 mt-3")}>
                <Button>Actualizar</Button>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "container-fluid mb-5",
              styles["container-actualice-contraseña"]
            )}
          >
            <span
              className={clsx("mt-5 mb-5", styles["style-title-actualice"])}
            >
              Actualice su contraseña
            </span>
            <p className={clsx("mb-3", styles["style-title-pass"])}>
              Asegure su cuenta con una contraseña fuerte
            </p>
          </div>
          <div className={clsx("container-fluid")}>
            <div className={clsx("row")}>
              <div className={clsx("container p-4 ", styles["box-container"])}>
                <Input
                  placeholder="Contraseña actual "
                  className="mb-2 input-data-configuration"
                />
                <Input
                  placeholder="Nueva contraseña"
                  className="mb-2 input-data-configuration"
                />
                <Input
                  placeholder="Confirme contraseña"
                  className="mb-2 input-data-configuration"
                />
                <Button className={clsx("mt-3 mb-3 ", styles["btn-style"])}>
                  Iniciar Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
