import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./dashboard.module.scss";
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
import clsx from "clsx";

import {
  cursesData,
  data,
  dataUserResgitrados,
  USER_PERMISSIONS,
} from "../../constants/user_const";

import CarrucelCard from "../../components/Carrucel/Carrucel";

export default function Dashboard() {
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
        <div className="">
          <div
            className={clsx("container-fluid p-4", styles["styles-background"])}
          >
            <div className={clsx("mb-3 mt-3")}>
              <span className={clsx(styles["style-title-chart"])}>
                Promedio de entrenamientos cursados
              </span>
            </div>
            <div className={clsx("mb-5", styles["border-color-container"])}>
              <div className={clsx("d-flex mt-2 mb-4")}>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-between me-3 ms-3"
                  )}
                >
                  <CircleColor className={clsx("me-2", "circle-violet")} />
                  <span>Colaboradores</span>
                </div>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-between me-2"
                  )}
                >
                  <CircleColor className={clsx("me-2", "circle-green")} />
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
          {/* WEB */}
          <div
            className={clsx(
              "container-fluid d-flex justify-content-between align-items-center mt-5 mb-5",
              styles["container-web"]
            )}
          >
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#7929e2"
                  size="60px"
                  remainingColor="#afdb00"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos
              </span>
            </div>
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#afdb00"
                  size="60px"
                  remainingColor="#7929e2"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>

          <div
            className={clsx(
              "container-fluid d-flex justify-content-between align-items-center mt-5 mb-5",
              styles["container-mobile"]
            )}
          >
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#7929e2"
                  size="30px"
                  remainingColor="#afdb00"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos
              </span>
            </div>
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#afdb00"
                  size="30px"
                  remainingColor="#7929e2"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>

          <div
            className={clsx(
              "container-fluid d-flex justify-content-between align-items-center mt-5 mb-5",
              styles["container-tablet"]
            )}
          >
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#7929e2"
                  size="60px"
                  remainingColor="#afdb00"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos
              </span>
            </div>
            <div
              className={clsx(
                "col-5 text-center",
                styles["styles-background-active"],
                styles["container-acountUser"]
              )}
            >
              <div className={clsx(styles["style-container-user"])}>
                <img
                  className={clsx(styles["user-icon"])}
                  src={usuarios_icon}
                  alt=""
                />
                <span className={clsx(styles["style-number"])}>70</span>
                <ChartPie
                  percentage="70"
                  color="#afdb00"
                  size="60px"
                  remainingColor="#7929e2"
                />
              </div>
              <span className={clsx(styles["style-text"])}>
                Usuarios activos la ultima semana
              </span>
            </div>
          </div>

          {/*  */}
          {!USER_PERMISSIONS.isAdmin && (
            <div
              className={clsx(
                "container-fluid d-flex justify-content-between  align-items-center mt-5",
                styles["container-consumo"],
                styles["styles-background"],
                styles["container-circleChart-web"]
              )}
            >
              <div
                className={clsx("col-6", styles["style-container-pieChart"])}
              >
                <ChartPie
                  percentage="60"
                  color="#7929e2"
                  size="150px"
                  remainingColor="black"
                />
                <ChartPie
                  percentage="50"
                  color="#afdb00"
                  size="150px"
                  remainingColor="black"
                />
              </div>
              <div className="row">
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between  align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-violet m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    Consumo promedio de contenido por usuario
                  </span>
                </div>
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-green m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    {" "}
                    Total de contenido consumido por la empresa
                  </span>
                </div>
              </div>
            </div>
          )}
          {!USER_PERMISSIONS.isAdmin && (
            <div
              className={clsx(
                "container-fluid d-flex justify-content-between  align-items-center mt-5",
                styles["container-consumo"],
                styles["styles-background"],
                styles["container-circleChart-tablet"]
              )}
            >
              <div
                className={clsx("col-6", styles["style-container-pieChart"])}
              >
                <ChartPie
                  percentage="60"
                  color="#7929e2"
                  size="90px"
                  remainingColor="black"
                />
                <ChartPie
                  percentage="50"
                  color="#afdb00"
                  size="90px"
                  remainingColor="black"
                />
              </div>
              <div className="row me-4">
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between  align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-violet m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    Consumo promedio de contenido por usuario
                  </span>
                </div>
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-green m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    {" "}
                    Total de contenido consumido por la empresa
                  </span>
                </div>
              </div>
            </div>
          )}
          {!USER_PERMISSIONS.isAdmin && (
            <div
              className={clsx(
                "container-fluid d-flex justify-content-between  align-items-center mt-5",
                styles["container-consumo"],
                styles["styles-background"],
                styles["container-circleChart-mobile"]
              )}
            >
              <div
                className={clsx("col-6", styles["style-container-pieChart"])}
              >
                <ChartPie
                  percentage="60"
                  color="#7929e2"
                  size="60px"
                  remainingColor="black"
                />
                <ChartPie
                  percentage="50"
                  color="#afdb00"
                  size="60px"
                  remainingColor="black"
                />
              </div>
              <div className="row me-4">
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between  align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-violet m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    Consumo promedio de contenido por usuario
                  </span>
                </div>
                <div
                  className={clsx(
                    "container-fluid d-flex justify-content-between align-items-center"
                  )}
                >
                  <CircleColor className={clsx("circle-green m-3")} />
                  <span className={clsx(styles["style-text"])}>
                    {" "}
                    Total de contenido consumido por la empresa
                  </span>
                </div>
              </div>
            </div>
          )}
          {!USER_PERMISSIONS.isAdmin && (
            <div
              className={clsx(
                "d-flex  align-items-center ps-4 pe-4 mt-5",
                styles["container-activate"]
              )}
            >
              <Link
                className={clsx(
                  "container-fluid text-center justify-content-between align-items-center d-flex",
                  styles["style-upload-link"]
                )}
                to=""
              >
                <span>
                  Da click aquí para comenzar el proceso de activar tus usuarios
                </span>
                <img
                  className={clsx(styles["icon-upload"])}
                  src={upload}
                  alt="icon-upload"
                />
              </Link>
            </div>
          )}
          {USER_PERMISSIONS.isAdmin && (
            <div className={clsx("container-fluid", styles.fixPosition)}>
              <CarrucelCard cursesData={cursesData} limitSlider={3} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
