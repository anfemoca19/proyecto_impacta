import { Link } from "react-router-dom";
import "../Courses/courses.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/navbar";
import Star from "../../components/Star/Star";

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
          <span className="title-style">Categorias</span>
          <div className="row mt-3">
            <div className="col text-center style-container container-icon">
              <Link className="nav-link">
                <span className="rounded style-icon icon-nutricion-blanco" />
                <h6 className="card-subtitle mb-2 text-muted">Nutricón</h6>
              </Link>
            </div>
            <div className="col text-cente container-icon">
              <Link className="nav-link">
                <span className="rounded style-icon icon-estilo-vida-blanco " />
                <h6 className="card-subtitle mb-2 text-muted">
                  Estilo de vida
                </h6>
              </Link>
            </div>
            <div className="col text-center container-icon">
              <Link className="nav-link">
                <span className="rounded style-icon icon-actividad-fisica-blanco" />
                <h6 className="card-subtitle mb-2 text-muted">
                  Actividad fisica
                </h6>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col text-center container-icon">
              <Link className="nav-link" to="">
                <span className="rounded style-icon icon-yoga-blanco" />
                <h6 className="card-subtitle mb-2 text-muted">Yoga</h6>
              </Link>
            </div>
            <div className="col text-center container-icon">
              <Link className="nav-link" to="">
                <span className="rounded style-icon icon-inteligencia-blanco" />
                <h6 className="card-subtitle mb-2 text-muted">
                  Inteligencia emocional
                </h6>
              </Link>
            </div>
            <div className="col text-center container-icon">
              <Link className="nav-link" to="">
                <span className="rounded style-icon icon-finanzas-blanco" />
                <h6 className="card-subtitle mb-2 text-muted">Finanzas</h6>
              </Link>
            </div>
          </div>
          {/* Card
           */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="container-imag-card">
                  {" "}
                  <img src="..." className="card-img-top" alt="..." />
                </div>

                <div className="card-body">
                  <h5 className="card-title style-title-card">
                    Nutricón Consciente
                  </h5>
                  <p className="card-text">Por: Maria Isabel Valderrama</p>
                  <Star></Star>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
