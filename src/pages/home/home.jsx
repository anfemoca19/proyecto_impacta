import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../home/home.module.scss";
import imagen_one from "../../imagenes/imagen-1-web-movil.png";
import imagen_two from "../../imagenes/imagen-2-web-movil.png";
import imagen_three from "../../imagenes/imagen-3-web-movil.png";
import Categorias from "../../components/Categories/categories";
import CarrucelCard from "../../components/Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";
import FooterHome from "../../components/FooterHome/FooterHome";
import ContactanosFomr from "../../components/Contactanos/Contactanos";
import Articules from "../../components/Articules/Articules";
import CardSocialComponent from "../../components/CardSocialComponent/CardSocialComponent";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <div className={clsx("mt-4", styles["container-grey"])}>
        <div className={clsx(styles["container-text-imgOne"])}>
          <div className={clsx(styles["container-wrap"])}>
            <div className={clsx("mt-3 p-5", styles["container-box"])}>
              <span>
                ¡Un viaje por el bienestar integral que eleva la energía vital
                de tus colaboradores!
              </span>
            </div>
            <div
              className={clsx(
                "d-flex  align-items-center ps-4 pe-4 mt-5",
                styles["container-btn-arrow"]
              )}
            >
              <Link
                className={clsx(
                  "container-fluid text-center justify-content-between align-items-center d-flex",
                  styles["style-upload-link"]
                )}
                to=""
              >
                <span className={clsx(styles["styles-btn-arrow"])}>
                  Haz un tour por la plataforma
                </span>
                <BsArrowRightShort className={clsx(styles["arrow-btn-icon"])} />
              </Link>
            </div>
          </div>
          <div className={clsx("", styles["container-img-one"])}>
            <img
              src={imagen_one}
              alt=""
              className={clsx(styles["style-imagen-one"])}
            />
          </div>
        </div>
      </div>
      <div className={clsx("mb-4 ", styles["container-wrappers"])}>
        <div className={clsx(styles["container-categorias"])}>
          {" "}
          <Categorias isHome className={"style-container-home"} />
        </div>
        <div className={clsx(styles["container-styles-description"])}>
          <div>
            <h4 className={clsx("mt-3 mb-4")}>
              Impacta tu vida, es la primera{" "}
              <span className={clsx(styles["styles-text"])}>
                plataforma de bienestar integral
              </span>{" "}
              para empresas.
            </h4>
          </div>
          <div className={clsx(styles["container-descripcion-number"])}>
            <div
              className={clsx(
                "col-4",
                styles["container-elements-information"],
                styles["styles-line"]
              )}
            >
              <span className={clsx(styles["styles-green-text"])}>3000</span>
              <span className={clsx(styles["text-disable-mobile"])}>
                Empleados
              </span>
            </div>
            <div
              className={clsx(
                "col-4",
                styles["container-elements-information"],
                styles["styles-line"]
              )}
            >
              <span className={clsx(styles["styles-green-text"])}>2550</span>
              <span className={clsx(styles["text-disable-mobile"])}>
                Consultas
              </span>
            </div>
            <div
              className={clsx(
                "col-4",
                styles["container-elements-information"]
              )}
            >
              <span className={clsx(styles["styles-green-text"])}>
                $214.200
              </span>
              <span className={clsx(styles["text-disable-mobile"])}>USD</span>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles["container-violet"])}>
        <div className={clsx(styles["container-text-imgOne"])}>
          <div className={clsx(styles["container-wrap"])}>
            <div>
              <h4 className={clsx("mt-3", styles["styles-green-text"])}>
                ¿Que te ofrece Impacta tu vida?{" "}
              </h4>
              {/* <span className={clsx(styles["style-text-white"])}>
                ¡Desarrolla tu mejor versión!
              </span>{" "} */}
              <div className={clsx("p-4", styles["style-text-white"])}>
                <ul className="list-group">
                  <li className="">Acceso durante todo el año.</li>
                  <li className=""> Múltiples categorías de bienestar.</li>
                  <li className="">Asequible para todos tus colaboradores.</li>
                  <li className="">Evaluación integrada de hábitos.</li>
                  <li className="">
                    Clases prácticas, concretas y especializadas en cada
                    categoría.
                  </li>
                </ul>{" "}
              </div>
            </div>
            <div
              className={clsx(
                "d-flex  align-items-center ps-4 pe-4 mt-5",
                styles["container-btn-arrow-white"]
              )}
            >
              <Link
                className={clsx(
                  "container-fluid text-center justify-content-between align-items-center d-flex",
                  styles["style-upload-link-white"]
                )}
                to=""
              >
                <span className={clsx(styles["styles-btn-arrow"])}>
                  Haz un tour por la plataforma
                </span>
                <BsArrowRightShort className={clsx(styles["arrow-btn-icon"])} />
              </Link>
            </div>
          </div>
          <div className={clsx("", styles["container-img-one"])}>
            <img
              src={imagen_two}
              alt=""
              className={clsx(styles["style-imagen-one"])}
            />
          </div>
        </div>
      </div>
      <div className={clsx(styles["container-grey"])}>
        <div className={clsx(styles["container-text-imgthree"])}>
          <div className={clsx("mb-3", styles["container-img-one"])}>
            <img
              src={imagen_three}
              alt="mockup-cel-pc
              "
              className={clsx(styles["style-imagen-mockup"])}
            />
          </div>
          <div className={clsx(styles["container-wrap"])}>
            <div className={clsx("mt-1 p-3", styles[""])}>
              <h4 className={styles["style-title-bold"]}>
                Conoce el desempeño{" "}
                <span className={clsx(styles["styles-text"])}>
                  de tu equipo
                </span>
              </h4>
              <p className={clsx("mt-4", styles["styles-paragraph"])}>
                Obtén las métricas de aprendizaje de tu organización para
                ajustar,{" "}
                <span className={clsx(styles["styles-text"])}>
                  rediseñar o cambiar los planes de estudios.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mt-3  container-fluid",
          styles["title-center-home-mobile"]
        )}
      >
        <div className={clsx(styles["container-carrusel-home"])}>
          <span
            className={clsx(
              styles["styles-text-title-social"],
              styles["style-title-sidebar"],
              styles["title-center-home-mobile"]
            )}
          >
            Programas de bienestar en distintas áreas
          </span>
          <p
            className={clsx(
              "mt-4",
              styles["style-title-sidebar"],
              styles["title-center-home-mobile"]
            )}
          >
            Desarrollar tus capacidades y habilidades relacionadas con
            nutricióny más, para tener bienestar integral
          </p>
          <CarrucelCard cursesData={cursesData} limitSlider={4} />
        </div>
      </div>
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mb-2", styles["container-title-social"])}>
          <span
            className={clsx(
              styles["styles-text-title-social"],
              styles["style-title-sidebar"],
              styles["title-center-home-mobile"]
            )}
          >
            Lo que nuestros usuarios piensan de nosotros
          </span>
        </div>
        <div>
          <CardSocialComponent limitSlider={6} />
        </div>
      </div>
      <Articules />
      <div className={clsx(styles["container-grey"])}>
        <div className={clsx("mt-4", styles["container-text-imgthree"])}>
          <div className={clsx(styles["container-tu-marca"])}>
            <p>
              Tu marca<span className={clsx(styles["styles-text"])}> +</span>{" "}
              nuestro contendido{" "}
              <span className={clsx(styles["styles-text"])}>
                = Colaboradores felices
              </span>
            </p>
          </div>
          <div
            className={clsx(
              "container-fluid text-center",
              styles["container-contactanos"]
            )}
          >
            <ContactanosFomr />
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
}
