import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./dashboart.scss";
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

import upload from "../../imagenes/icono-carga-de-archivos.png";
import usuarios_icon from "../../imagenes/icono-usuarios-activos.png";
import violet_porcentaje from "../../imagenes/violet-porcentaje.png";

import Layout from "../../components/Layout";
const data = [
  { name: "ENE", area1: 4000, area2: 2400 },
  { name: "FEB", area1: 3000, area2: 1398 },
  { name: "MAR", area1: 2000, area2: 2800 },
  { name: "ABR", area1: 2780, area2: 2908 },
  { name: "MAY", area1: 3890, area2: 2800 },
  { name: "JUN", area1: 2390, area2: 1300 },
  { name: "JUL", area1: 3490, area2: 1300 },
  { name: "AGO", area1: 3290, area2: 2700 },
  { name: "SEP", area1: 3490, area2: 2300 },
  { name: "OCT", area1: 3490, area2: 1800 },
  { name: "NOV", area1: 2490, area2: 2300 },
  { name: "DIC", area1: 5490, area2: 2300 },
];
export default function Dashboard() {
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
        <div className="">
          <div className="container-fluid background-color rounded p-3">
            <div className="d-flex">
              <div>
                <span className="circle-violet"></span>
                <span>Colaboradores</span>
              </div>
              <div>
                <span className="circle-green"></span>
                <span>Cursos</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="area1"
                  stroke="abc821"
                  fill="#abc821"
                />
                <Area
                  type="monotone"
                  dataKey="area2"
                  stroke="#7929e2"
                  fill="#7929e2"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="container-fluid d-flex justify-content-between  align-items-center mt-5">
            <div className="background-color  col-5 text-center container-acountUser rounded ">
              <div className="row ">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img className="user-icon" src={usuarios_icon} alt="" />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="style-number">70</span>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="circle-violet"></span>
                </div>
              </div>
              <span className="style-text">Usuarios activos</span>
            </div>
            <div className="background-color  col-5 text-center container-acountUser rounded ">
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img className="user-icon" src={usuarios_icon} alt="" />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="style-number">70</span>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <span className="circle-violet"></span>
                </div>
              </div>
              <span className="style-text">
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>
          <div className="container-consumo container-fluid d-flex justify-content-between  align-items-center background-color mt-5 rounded ">
            <div className="container d-flex">
              <div>
                <img
                  className="style-circle-chart "
                  src={violet_porcentaje}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="style-circle-chart "
                  src={violet_porcentaje}
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className=" container-fluid d-flex justify-content-between  align-items-center">
                <span className="circle-violet me-3"></span>
                <span>Consumo promedio de contenido por usuario</span>
              </div>
              <div className="container-fluid d-flex justify-content-between  align-items-center ">
                <span className="circle-green me-3"></span>
                <span> Total de contenido consumido por la empresa</span>
              </div>
            </div>
          </div>
          <div className="container-activate d-flex justify-content-between align-items-center ps-4 pe-4 mt-5 rounded">
            <span>
              Da click aquí para comenzar el proceso de activar tus usuarios
            </span>
            <img className="icon-upload" src={upload} alt="icon-upload" />
          </div>
        </div>
      </Layout>
    </>
  );
}
