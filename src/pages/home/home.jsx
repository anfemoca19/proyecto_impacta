import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../home/home.module.scss";
import imagen_one from "../../imagenes/imagen-1-web-movil.png";
import imagen_two from "../../imagenes/imagen-2-web-movil.png";
import imagen_tree from "../../imagenes/imagen-3-web-movil.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";
import Categorias from "../../components/Categories/categories";
import CarrucelCard from "../../components/Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";
import CardSocial from "../../components/CardSocial/CardSocial";
import CardArticules from "../../components/CardArticules/CardArticules";
import FooterHome from "../../components/FooterHome/FooterHome";
import { useState } from "react";
import { useEffect } from "react";
import ContactanosFomr from "../../components/Contactanos/Contactanos";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevSlideIndex) =>
        prevSlideIndex === slides.length - 1 ? 0 : prevSlideIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      content: <CardSocial />,
    },
    {
      content: <CardSocial />,
    },
    {
      content: <CardSocial />,
    },
    {
      content: <CardSocial />,
    },
    {
      content: <CardSocial />,
    },
    {
      content: <CardSocial />,
    },
  ];

  return (
    <>
      <HeaderHome />
      <div className={clsx("mt-4 p-4", styles["container-grey"])}>
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
                <span>Haz un tour por la plataforma</span>
                <img
                  src={icono_siguiente}
                  alt="arro-raight"
                  className={clsx(styles["icon-upload"])}
                />
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
      <div className={clsx("mb-4 p-4", styles["container-wrappers"])}>
        <div className={clsx(styles["container-categorias"])}>
          {" "}
          <Categorias isHome className={"style-container-home"} />
        </div>
        <div className={clsx(styles["container-styles-description"])}>
          <div>
            <h4 className={clsx("mt-3 mb-4")}>
              Impacta tu vida, es la primera{" "}
              <span className={clsx(styles["styles-text"])}>
                agencia de bienestar integral
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
      <div className={clsx("p-4", styles["container-violet"])}>
        <div className={clsx(styles["container-text-imgOne"])}>
          <div className={clsx(styles["container-wrap"])}>
            <div>
              <h4 className={clsx("mt-3", styles["styles-green-text"])}>
                Aprende cuando y donde quieras.{" "}
              </h4>
              <span className={clsx(styles["style-text-white"])}>
                ¡Desarrolla tu mejor versión!
              </span>{" "}
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
                <span>Haz un tour por la plataforma</span>
                <img
                  src={icono_siguiente}
                  alt="arro-raight"
                  className={clsx(styles["icon-upload"])}
                />
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
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mt-4", styles["container-text-imgtree"])}>
          <div className={clsx("mb-3", styles["container-img-one"])}>
            <img
              src={imagen_tree}
              alt=""
              className={clsx(styles["style-imagen-one"])}
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
          "mt-3 p-4 container-fluid",
          styles["title-center-home-mobile"]
        )}
      >
        <span
          className={clsx(
            "mb-5",
            styles["styles-text-title-social"],
            styles["style-title-sidebar"]
          )}
        >
          {" "}
          Programas de bienestar en distintas áreas
        </span>
        <CarrucelCard isHome cursesData={cursesData} limitSlider={4} />
      </div>
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mb-4")}>
          <span
            className={clsx(
              styles["styles-text-title-social"],
              styles["style-title-sidebar"],
              styles["title-center-home-mobile"]
            )}
          >
            Lo que nuestro usuarios piensan de nosotros
          </span>
        </div>
        <div
          className={
            ("p-4",
            clsx(styles["container-box-social"], styles.containerSocial))
          }
        >
          <CardSocial limitSlider={6} />
          {/* <CardSocial />
          <CardSocial />
          <CardSocial />
          <CardSocial />
          <CardSocial />
          <CardSocial />  */}
        </div>
      </div>
      <div className={clsx(styles["container-violet"])}>
        <h3 className={styles.title}>Articulos de interes</h3>
        <div className={styles.cardVioletContainer}>
          <CardArticules />
          <CardArticules />
          <CardArticules />
          <CardArticules />
          <CardArticules />
          <CardArticules />
          <CardArticules />
          <CardArticules />
        </div>
      </div>
      <div className={clsx("p-4", styles["container-grey"])}>
        <div className={clsx("mt-4", styles["container-text-imgtree"])}>
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
