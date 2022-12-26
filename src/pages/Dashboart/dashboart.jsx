// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Area,
// } from "recharts";
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
import AccountUser from "../../components/AcountUser/accountUser";
import Calendar from "../../components/Calendar/calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

import upload from "../../imagenes/icono-carga-de-archivos.png";
import usuarios_icon from "../../imagenes/icono-usuarios-activos.png";
import violet_porcentaje from "../../imagenes/violet-porcentaje.png";

import "./dashboart.css";
import Layout from "../../components/Layout";
const data = [
  { name: "Page A", area1: 4000, area2: 2400 },
  { name: "Page B", area1: 3000, area2: 1398 },
  { name: "Page C", area1: 2000, area2: 9800 },
  { name: "Page D", area1: 2780, area2: 3908 },
  { name: "Page E", area1: 1890, area2: 4800 },
  { name: "Page F", area1: 2390, area2: 3800 },
  { name: "Page G", area1: 3490, area2: 4300 },
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
          <div className="container-promedio background-color rounded">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="area1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="area2"
                  stroke="#82ca9d"
                  fill="#82ca9d"
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
