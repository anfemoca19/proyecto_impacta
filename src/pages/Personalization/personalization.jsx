import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";

import "../Personalization/personalization.css";
import { Link } from "react-router-dom";

export default function Personalization() {
  return (
    <>
      {" "}
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
        <div className="">
          <div className="mb-3">
            <span className="style-title">Perfil de la empresa</span>
            <ul className="nav justify-content-center mb-5">
              <Link class="nav-link" to="/configuration">
                Perfil
              </Link>
              <li class="nav-item">
                <Link class="nav-link" to="/personalization">
                  Personalización
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Estilos login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">Estilos Administracón</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">Estilos Academica</Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
