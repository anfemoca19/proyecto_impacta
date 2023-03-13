import styles from "../Courses/courses.module.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import CardCurses from "../../components/CardCurses/CardCurses";
import icon_edit from "../../imagenes/icono-editar.png";
import { cursesData, USER_PERMISSIONS } from "../../constants/user_const";
import clsx from "clsx";
import { FaEye, FaPlus, FaList, FaTrash } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

let dataUserResgitrados = ["200"];

export default function Courses() {
  const navigate = useNavigate();

  const handleClick = (key) => {
    navigate("/courses/coursesTemplate/" + `${cursesData[key].id}` + "/");
  };
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
            <div className={clsx(styles["styles-background-categories"])}>
              <Categorias />
            </div>
            {!USER_PERMISSIONS.isAdmin && <GraphUsers />}
          </>
        }
      >
        <span className={clsx("mt-2", styles["title-style-curses-web"])}>
          Categorias
        </span>
        <Categorias className={"style-inline"} />
        <div
          className={clsx(
            "row row-cols-1 row-cols-md-3 g-4 mt-5",
            styles["container-categories-card"]
          )}
        >
          {cursesData.map((curses, index) => {
            return <CardCurses key={index} cursesData={curses} />;
          })}
        </div>

        <table className={clsx("table mt-4", styles["categorias-tablet"])}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Imagen</th>
              <th scope="col">Titulo</th>
              <th scope="col">Instructor</th>
              <th scope="col">Categoria</th>
              <th scope="col">Slug</th>
              <th scope="col">Posicion</th>
              <th scope="col">Destacado</th>
              <th scope="col">Activo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cursesData.map((curses, key) => {
              return (
                <tr>
                  <th scope="row">{curses.posicion}</th>
                  <td>
                    <img
                      src={curses.img}
                      alt="img-curso"
                      className={clsx(styles["styles-curses-img"])}
                    />
                  </td>
                  <td>{curses.nombre}</td>
                  <td>{curses.creado}</td>
                  <td>{curses.categoria}</td>
                  <td>Zumba</td>
                  <td>
                    <div className={clsx(styles["container-edit-options"])}>
                      {curses.posicion}
                      <img
                        src={icon_edit}
                        alt="icon-editar"
                        className={clsx(styles["img-icon-edit"])}
                      />
                    </div>
                  </td>
                  <td className={clsx(styles[""])}>
                    <input
                      type="radio"
                      className={clsx(styles["styles-btn-tablet"])}
                    />
                  </td>
                  <td className={clsx(styles[""])}>
                    <input
                      type="radio"
                      className={clsx(styles["styles-btn-tablet"])}
                    />
                  </td>
                  <td className={clsx(styles["container-accions"])}>
                    <a
                      className="dropdown-item"
                      // href={
                      //   "/courses/coursesTemplate/" + `${cursesData.id}` + "/"
                      // }
                      placeholder="Ver curso"
                      title="Ver curso"
                      onClick={(e) => {
                        handleClick(key);
                      }}
                    >
                      <FaEye color="#c3c3c3" style={{ fontSize: "15px" }} />
                    </a>
                    <a className="dropdown-item" href="#" title="Saber Más">
                      <FaPlus color="#c3c3c3" style={{ fontSize: "15px" }} />
                    </a>
                    <a className="dropdown-item" href="#" title="Contenido">
                      <FaList color="#c3c3c3" style={{ fontSize: "15px" }} />
                    </a>
                    <a className="dropdown-item" href="#" title="Editar">
                      <img
                        src={icon_edit}
                        alt="icon-editar"
                        className={clsx(styles["img-icon-edit"])}
                      />
                    </a>
                    <a className="dropdown-item" href="#" title="Borrar">
                      <FaTrash color="#ff000066" style={{ fontSize: "15px" }} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layout>
    </>
  );
}
