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
import Calendar from "../../components/Calendar/Calendar";
import Categorias from "../../components/Categories/categories";
import GraphUsers from "../../components/GraphUsers/graphUsers";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import upload from "../../imagenes/icono-carga-de-archivos.png";
import usuarios_icon from "../../imagenes/icono-usuarios-activos.png";
import Layout from "../../components/Layout";
import CircleColor from "../../components/CircleColor/Circle";
import ChartPie from "../../components/ChartPie/ChartPie";
import { Link } from "react-router-dom";

const data = [
  { name: "ENE", colaboradores: 4000, cursos: 2400 },
  { name: "MAR", colaboradores: 2000, cursos: 2800 },
  { name: "FEB", colaboradores: 3000, cursos: 1398 },
  { name: "ABR", colaboradores: 2780, cursos: 2908 },
  { name: "MAY", colaboradores: 3890, cursos: 2800 },
  { name: "JUN", colaboradores: 2390, cursos: 1300 },
  { name: "JUL", colaboradores: 3490, cursos: 1300 },
  { name: "AGO", colaboradores: 3290, cursos: 2700 },
  { name: "SEP", colaboradores: 3490, cursos: 2300 },
  { name: "OCT", colaboradores: 3490, cursos: 1800 },
  { name: "NOV", colaboradores: 2490, cursos: 2300 },
  { name: "DIC", colaboradores: 5490, cursos: 2300 },
];

const dataActiveUsers = [
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const dataActiveUsersLast = [
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
let dataUserResgitrados = ["200"];
export default function Dashboard() {
  return (
    <>
      <Header />
      <Layout
        navBar={<Navbar />}
        sideBar={
          <>
            <Calendar />
            <AccountUser dataNumber={dataUserResgitrados} />
            <Categorias />
            <GraphUsers />
          </>
        }
      >
        <div className="">
          <div className="container-fluid background-color  p-4">
            <div className="mb-3 mt-3">
              <span className="style-title-chart">
                Promedio de entrenamientos cursados
              </span>
            </div>
            <div className="border-color-container mb-5">
              <div className="d-flex mt-2 mb-4">
                <div className="d-flex align-items-center justify-content-between me-3 ms-3">
                  <CircleColor className="circle-violet-sm me-2 " />
                  <span>Colaboradores</span>
                </div>
                <div className="d-flex align-items-center justify-content-between me-2">
                  <CircleColor className="circle-green-sm me-2 " />
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
                  <XAxis
                    dataKey="name"
                    tickLine="blue"
                    tick={{ stroke: "#7929e2", strokeWidth: 1 }}
                    padding={{ left: 3, right: 1 }}
                  />
                  <YAxis
                    tick={{ stroke: "#7929e2", strokeWidth: 1 }}
                    padding={{ bottom: 6 }}
                  />
                  <CartesianGrid stroke="#ebebebeb" />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Area
                    type="monotone"
                    dataKey="colaboradores"
                    stroke="#afdb00"
                    fill="#afdb00"
                    fillOpacity={1}
                    re
                  />
                  <Area
                    type="monotone"
                    dataKey="cursos"
                    stroke="#7929e2"
                    fill="#7929e2"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            className="container-fluid d-flex justify-content-between  align-items-center mt-5 mb-5
          "
          >
            <div className="background-color  col-5 text-center container-acountUser rounded ">
              <div className="style-container-user">
                <img className="user-icon" src={usuarios_icon} alt="" />
                <span className="style-number">70</span>
                <ChartPie
                  percentage="70"
                  color="#7929e2"
                  size="50px"
                  remainingColor="#abc821"
                />
              </div>
              <span className="style-text">Usuarios activos</span>
            </div>
            <div className="background-color  col-5 text-center container-acountUser rounded ">
              <div className="style-container-user">
                <img className="user-icon" src={usuarios_icon} alt="" />
                <span className="style-number">70</span>
                <ChartPie
                  percentage="70"
                  color="#abc821"
                  size="50px"
                  remainingColor="#7929e2"
                />
              </div>
              <span className="style-text">
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>
          <div className="container-consumo container-fluid d-flex justify-content-between  align-items-center background-color mt-5 rounded ">
            <div className=" col-6 style-container-pieChart">
              <ChartPie
                percentage="60"
                color="#7929e2"
                size="150px"
                remainingColor="black"
              />
              <ChartPie
                percentage="50"
                color="#abc821"
                size="150px"
                remainingColor="black"
              />
            </div>
            <div className="row">
              <div className=" container-fluid d-flex justify-content-between  align-items-center">
                <CircleColor className="circle-violet m-3 " />
                <span className="styele-text">
                  Consumo promedio de contenido por usuario
                </span>
              </div>
              <div className="container-fluid d-flex justify-content-between  align-items-center ">
                <CircleColor className="circle-green m-3" />
                <span className="styele-text">
                  {" "}
                  Total de contenido consumido por la empresa
                </span>
              </div>
            </div>
          </div>
          <div className="container-activate d-flex  align-items-center ps-4 pe-4 mt-5 rounded">
            <Link
              className="container-fluid text-center justify-content-between align-items-center  style-upload-link d-flex"
              to=""
            >
              <span>
                Da click aquí para comenzar el proceso de activar tus usuarios
              </span>
              <img className="icon-upload" src={upload} alt="icon-upload" />
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
