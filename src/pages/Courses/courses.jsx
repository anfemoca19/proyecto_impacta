import { Link } from "react-router-dom";
import styles from "../Courses/courses.modules.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Star from "../../components/Star/Star";
import CardCurses from "../../components/CardCurses/CardCurses";
import { USER_PERMISSIONS } from "../../constants/user_const";

const cursesData = [
  {
    id: 1,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 2,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 3,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 4,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 5,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 7,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 0,
  },
  {
    id: 8,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
  {
    id: 9,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
  {
    id: 10,
    nombre: "Nutricón Consciente",
    creado: "Maria Isabel Valderrama",
    calificacion: 1,
  },
];

let dataUserResgitrados = ["200"];
export default function Courses() {
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
        <div className="container-fluid">
          <Categorias className={"style-inline"} />
          {/* Card
           */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {cursesData.map((curses) => {
              return <CardCurses cursesData={curses} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
