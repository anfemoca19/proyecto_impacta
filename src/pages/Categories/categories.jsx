import clsx from "clsx";
import styles from "../Categories/categories.module.scss";
import { Calendar } from "react-calendar";
import AccountUser from "../../components/AcountUser/accountUser";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import { USER_PERMISSIONS } from "../../constants/user_const";
import EditCategories from "../../components/EditCategories/EditCategories";

import icon_nutricion from "../../imagenes/icono-categoria-nutricion-color.png";
import icon_estilo_vida from "../../imagenes/icono-categoria-estilo-de-vida-color.png";
import icon_actividad_fisica from "../../imagenes/icono-categoria-actividad-fisica-color.png";
import icon_yoga from "../../imagenes/icono-categoria-yoga-color.png";
import icon_inteligencia_emocional from "../../imagenes/icono-categoria-inteligencia-emocional-color.png";
import icon_finanzas from "../../imagenes/icono-categoria-finanzas-color.png";
import Modal from "../../components/UI/Modal/Modal";
import { useState } from "react";

let dataUserResgitrados = ["200"];
export default function CategoriasPages() {
  const [estadoModalEdit, setEstadoModalEdit] = useState(false);
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
        <div className={clsx("container-fluid")}>
          <span className={clsx("mb-5", styles["style-title"])}>
            Categorias
          </span>
          <div className={clsx("mt-5 container-fluid")}>
            <EditCategories
              span="Nutricion"
              icon={icon_nutricion}
              onClick={({ type }) => {
                setEstadoModalEdit(true);
                switch (type) {
                  case "edit":
                    console.log("editing");
                    // setData(type)
                    break;
                  case "position":
                    console.log("posistion");
                    // setData(positio)
                    break;
                }
              }}
            />
            <EditCategories span="Estilo de vida" icon={icon_estilo_vida} />
            <EditCategories
              span="Actividad fisica"
              icon={icon_actividad_fisica}
            />
            <EditCategories span="Yoga" icon={icon_yoga} />
            <EditCategories
              span="Inteligencia emocional"
              icon={icon_inteligencia_emocional}
            />
            <EditCategories span="Finanzas" icon={icon_finanzas} />
          </div>
          {estadoModalEdit && (
            <Modal closeModal={setEstadoModalEdit}>
              <div>Hello data.name</div>
              <button onClick={() => setEstadoModalEdit(false)}>
                close modal{" "}
              </button>
            </Modal>
          )}
        </div>
      </Layout>
    </>
  );
}
