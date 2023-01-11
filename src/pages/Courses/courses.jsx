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

const cursesData = [
  { id: 1, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 2, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 3, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 4, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 5, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 7, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 8, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 9, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
  { id: 10, nombre: "Nutricón Consciente", creado: "Maria Isabel Valderrama" },
];
export default function Courses() {
  return (
    <>
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
