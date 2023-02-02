import AcordionComponent from "../AcordionModule/AcordionModule";
import FooterComponenet from "../Footer/Footer";
import LayoutCureses from "../LayoutCurses/LayoutCurses";
import styles from "../CoursesTemplate/coursesTemplate.module.scss";
import ReactPlayer from "react-player";
import banner_comida_saludable from "../../imagenes/banner_comida_saludable.jpeg";
import logo_blanco from "../../imagenes/logo-en-blanco.png";
import clsx from "clsx";
import LayoutBackgroundCurses from "../LayoutBackgroundCurses/LayoutBackgroundCurses";
import RankinComponent from "../Ranking/Ranking";
import Input from "../UI/Input/input";
import Button from "../UI/Button/Button";
import Star from "../Star/Star";
import { useParams } from "react-router-dom";
import { cursesData } from "../../constants/user_const";
import { BsCheckCircle } from "react-icons/bs";
import icono_anterior from "../../imagenes/icono-anterior.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";

export default function CoursesTemplate({ children, ...props }) {
  const routeParams = useParams();

  console.log("route", routeParams);
  console.log("data", cursesData);
  let courseDetails = cursesData.find((item) => {
    return item?.id.toString() === routeParams?.id.toString();
  });

  return (
    <>
      <LayoutBackgroundCurses>
        <header className="p-5">
          <img
            src={logo_blanco}
            alt=""
            className={clsx(styles["icon-impacta"])}
          />
        </header>

        <LayoutCureses
          sideBar={
            <>
              <div className={clsx("container-fluid mb-5")}>
                <img
                  src={courseDetails?.img || banner_comida_saludable}
                  className={clsx(styles["banner-styles"])}
                  alt="comida-saludable"
                />
              </div>

              <AcordionComponent title="Modulo 1"></AcordionComponent>
              <RankinComponent courseDetails={courseDetails.calificacion} />
              <div className={clsx("mt-3", styles["container-styles-number"])}>
                <div className={clsx("", styles["container-valorar-all"])}>
                  <div
                    className={clsx("mt-3 mb-3", styles["container-valorar"])}
                  >
                    <span>Valorar curso</span>
                    <Star colorBorder={"#afdb00;"} colorRelleno={"#afdb00"} />
                    <Button typeButton="cuartary">Guardar</Button>
                  </div>
                  <div className={clsx(styles["container-aporte"])}>
                    <div>
                      <img src="" alt="" />
                      <span className={clsx(styles["styles-title-nombre"])}>
                        Escribe un aporte
                      </span>
                    </div>
                    <Input typeInput="terciary" />
                  </div>
                </div>
                <div className={clsx("mt-3 mb-3", styles["container-valorar"])}>
                  <div></div>
                  <span>Ordenar por:</span>
                  <Button typeButton="fifth">Nuevo</Button>
                  <Button typeButton="fifth">Mas votados</Button>
                </div>
                <div>
                  <span>Aporte</span>
                  <div className={clsx("mt-2", styles["container-aporte"])}>
                    <div className={clsx(styles["container-comentary"])}>
                      <img src="" alt="" />
                      <span className={clsx(styles["styles-title-nombre"])}>
                        Nombre del usuario
                      </span>
                    </div>
                    <Input typeInput="terciary" />
                  </div>
                  <div className={clsx("mt-3", styles["container-aporte"])}>
                    <div className={clsx(styles["container-comentary"])}>
                      <img src="" alt="" />
                      <span className={clsx(styles["styles-title-nombre"])}>
                        Nombre del usuario
                      </span>
                    </div>
                    <Input typeInput="terciary" />
                  </div>
                </div>
              </div>
            </>
          }
        >
          <div>
            <div className={clsx("mb-4", styles["container-title"])}>
              <span className={clsx("", styles["styles-tittle-curso"])}>
                {courseDetails.nombre}
              </span>
            </div>
            <div className={clsx("mt-3")}>
              <span className={clsx(styles["styles-subttitle"])}>
                Acerca del instructor
              </span>
              <div className={clsx(styles["container-acerca-instructor"])}>
                <div className={clsx(styles["container-foto-perfil"])}>
                  <img
                    className={clsx(styles["foto-perfil"])}
                    src={courseDetails.foto_perfil}
                    alt="foto de perfil"
                  />
                </div>
                <div
                  className={clsx(
                    "mb-3",
                    styles["contaienr-descripcion-instructor"]
                  )}
                >
                  <span
                    className={clsx("mb-2", styles["styles-tittle-instructor"])}
                  >
                    {courseDetails.creado}
                  </span>
                  <p>{courseDetails.descripcion_creador}</p>
                </div>
              </div>
            </div>
            <div className={clsx("mt-4", styles["container-video"])}>
              <span>Module</span>
              <video
                className={clsx("object-fit-contain", styles["styles-video"])}
                width={800}
                height={400}
                // borderRadius={"10px"}
                controls
                src={
                  "https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd"
                }
              ></video>
              {/* <ReactPlayer
                url="https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd"
                controls
                width="100%"
                height="100%"
                className={"react-player"}
              /> */}
            </div>
            <div className={clsx("mt-5 mb-4", styles["line-styles"])}>
              <span className={clsx("mb-5", styles["styles-subttitle"])}>
                {" "}
                Beneficios:
              </span>
              {
                <div
                  className={clsx("mb-3", styles["container-beneficios-all"])}
                >
                  <div className={clsx(styles["container-beneficios"])}>
                    {" "}
                    {courseDetails.beneficios.map((curses, item) => {
                      return <BsCheckCircle key={item} color={"#afdb00"} />;
                    })}
                  </div>
                  <div className={clsx(styles["container-beneficios"])}>
                    {" "}
                    {courseDetails.beneficios.map((beneficios, item) => {
                      return <span key={item}>{beneficios.beneficio}</span>;
                    })}
                  </div>
                </div>
              }
            </div>
            <div
              className={clsx(
                "mb-5",
                styles["container-descripcion"],
                styles["line-styles"]
              )}
            >
              <span className={clsx("mb-3", styles["styles-subttitle"])}>
                Descripción
              </span>
              <p className={clsx("mb-3")}>{courseDetails.descripcion_curso}</p>
            </div>
            <div>
              <span className={clsx(styles["line-styles"])}></span>
            </div>
            <div
              className={clsx(
                "mt-4 mb-4",
                styles["line-styles"],
                styles["container-requerimientos"]
              )}
            >
              <span className={clsx("mb-3", styles["styles-subttitle"])}>
                Requerimientos
              </span>
              <p className={clsx("mt-3 ")}>{courseDetails.requerimientos}</p>
            </div>
            <div className={clsx(styles["container-btn-next"])}>
              <div className={clsx(styles["container-icon-btn"])}>
                <img
                  src={icono_anterior}
                  alt=""
                  className={clsx("ms-3", styles["styles-icon"])}
                />
                <Button typeButton={"next"}>Modulo anterior</Button>
              </div>
              <div className={clsx(styles["container-icon-btn"])}>
                <Button typeButton={"next"} className={clsx("me-4")}>
                  Modulo siguiente
                </Button>
                <img
                  src={icono_siguiente}
                  alt=""
                  className={clsx(styles["styles-icon"])}
                />
              </div>
            </div>
          </div>
        </LayoutCureses>
      </LayoutBackgroundCurses>
      <FooterComponenet />
    </>
  );
}
