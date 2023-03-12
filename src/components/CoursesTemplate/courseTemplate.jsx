import React from "react";
import AcordionComponent from "../AcordionModule/AcordionModule";
import LayoutCureses from "../LayoutCurses/LayoutCurses";
import styles from "../CoursesTemplate/coursesTemplate.module.scss";
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
import CardAportes from "../CardAportes/CardAportes";
import MenuMobile from "../MenuHeaderMobile/MenuHeaderMobile";
import MenuTab from "../MenuTabs/ManuTabs";
import icono_anterior from "../../imagenes/icono-anterior.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";

export default function CoursesTemplate({ children, ...props }) {
  const routeParams = useParams();

  let courseDetails = cursesData.find((item) => {
    return item?.id.toString() === routeParams?.id.toString();
  });

  return (
    <>
      <MenuMobile />
      <LayoutBackgroundCurses>
        <header className={clsx("p-4", styles["style-header"])}>
          <div
            className={clsx(
              "col-12 col-sm-4  col-sm-12 col-md-8 ",
              styles["container-header"]
            )}
          >
            <div className={clsx("col-4 text-center")}>
              <img
                src={logo_blanco}
                alt=""
                className={clsx(styles["icon-impacta"])}
              />
            </div>
            <div className={clsx("col-8", styles["container-title"])}>
              <span className={clsx("", styles["styles-tittle-curso"])}>
                {courseDetails.nombre}
              </span>
            </div>
          </div>
          <div
            className={clsx(
              "col-4 p-4 container-fluid ",
              styles["styles-banner"]
            )}
          >
            <img
              src={courseDetails?.img || banner_comida_saludable}
              className={clsx(styles["banner-styles"])}
              alt="comida-saludable"
            />
          </div>
        </header>

        <LayoutCureses
          sideBar={
            <>
              <AcordionComponent title="Modulo 1"></AcordionComponent>
              <RankinComponent courseDetails={courseDetails.calificacion} />
              <div
                className={clsx("mt-3", styles["container-styles-elements"])}
              >
                <div className={clsx(styles.wrapper)}>
                  <div
                    className={clsx("mt-3 mb-3", styles["container-valorar"])}
                  >
                    <span>Valorar curso</span>
                    <Star
                      className={styles.valorarStars}
                      colorBorder={"#afdb00"}
                      colorRelleno={"#afdb00"}
                    />
                    <Button typeButton="cuartary">Guardar</Button>
                  </div>
                  <div className={clsx(styles["container-aporte"])}>
                    <div>
                      <img src="" alt="" />
                      <span className={clsx(styles["styles-text-aporte"])}>
                        Escribe un aporte
                      </span>
                    </div>
                    <Input typeInput="terciary" />
                  </div>
                </div>
                <div
                  className={clsx(
                    "mt-3 mb-3",
                    styles["container-valorar"],
                    styles.wrapper
                  )}
                >
                  <span>Ordenar por:</span>
                  <div className={clsx(styles["me-3 styles-btn-ativa"])}>
                    <input
                      type="checkbox"
                      className={clsx("btn-check")}
                      id="btncheck1"
                      autoComplete="off"
                    />
                    <label
                      className={clsx(styles["styles-btn-check"])}
                      htmlFor="btncheck1"
                    >
                      Nuevo{" "}
                    </label>
                  </div>
                  <div className={clsx(styles["me-3 styles-btn-activa"])}>
                    <input
                      type="checkbox"
                      className={clsx("btn-check")}
                      id="btncheck1"
                      autoComplete="off"
                    />
                    <label
                      className={clsx(styles["styles-btn-check"])}
                      htmlFor="btncheck1"
                    >
                      Más votados{" "}
                    </label>
                  </div>
                </div>
                <div
                  className={clsx(styles.wrapper, styles["style-line"])}
                ></div>
                <div className={clsx("mt-3", styles.wrapper)}>
                  <span>Aporte</span>
                  <div className={clsx("mt-4")}>
                    <CardAportes />
                  </div>
                  <div className={clsx("mt-3")}>
                    <CardAportes />
                  </div>
                </div>
              </div>
            </>
          }
        >
          <div>
            <div className={clsx("", styles["container-video"])}>
              <video
                className={clsx("object-fit-contain", styles["styles-video"])}
                controls
                src={
                  "https://player.vimeo.com/progressive_redirect/playback/697590375/rendition/1080p/file.mp4?loc=external&signature=b2dfcce3fa0229f1a03011666046b5a1ea4791c659180084a49d8c4bb89fa2dd"
                }
              ></video>
            </div>
            <div className={clsx("mt-3", styles["container-instructor"])}>
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
            <div className={clsx("mt-4")}>
              <MenuTab courseDetails={courseDetails} />
            </div>
            <div className={clsx("mt-4", styles["container-btn-next"])}>
              <div className={clsx(styles["container-icon-btn"])}>
                <img
                  src={icono_anterior}
                  alt=""
                  className={clsx(styles["styles-icon"])}
                />
                <button
                  typeButton={"next"}
                  className={clsx(styles["styles-next-btn"])}
                >
                  Modulo anterior
                </button>
              </div>
              <div className={clsx(styles["container-icon-btn"])}>
                <button
                  typeButton={"next"}
                  className={clsx(styles["styles-next-btn"])}
                >
                  Modulo siguiente
                </button>
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
    </>
  );
}
