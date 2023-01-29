import styles from "../Courses/courses.modules.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import CardCurses from "../../components/CardCurses/CardCurses";
import { cursesData, USER_PERMISSIONS } from "../../constants/user_const";
import clsx from "clsx";

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
          <span className={clsx("mt-2", styles["title-style-curses"])}>
            Categorias
          </span>
          <Categorias className={"style-inline"} />
          {/* Card
           */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {cursesData.map((curses, index) => {
              return <CardCurses key={index} cursesData={curses} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
