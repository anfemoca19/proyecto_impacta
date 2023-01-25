import clsx from "clsx";
import styles from "../StylesLogin/styleLogin.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Menu from "../../components/Menu/Menu";
import Button from "../../components/UI/Button";
import { USER_PERMISSIONS } from "../../constants/user_const";

export default function StyleAdmin() {
  let dataUserResgitrados = ["200"];
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
            <Categorias />
            {!USER_PERMISSIONS.isAdmin && <GraphUsers />}
          </>
        }
      >
        <div className={clsx("container-fluid", {})}>
          <span className={clsx("container-fluid", styles["style-title"])}>
            Estilos Administración
          </span>
          <Menu />
          <div
            // className="container-backgraund mt-3 p-4"
            className={clsx(
              "container-fluid p-4 mb-5",
              styles["box-container"]
            )}
          >
            <div className={clsx("row")}>
              <textarea
                class="form-control"
                className={clsx("form-control", styles["style-textarea"])}
                aria-label="With textarea"
              ></textarea>
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
                <Button name="btnDeleteColor">Eliminar</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
