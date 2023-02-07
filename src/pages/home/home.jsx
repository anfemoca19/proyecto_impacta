import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../home/home.module.scss";
import imagen_one from "../../imagenes/imagen-1-web-movil.png";
import imagen_two from "../../imagenes/imagen-2-web-movil.png";
import imagen_tree from "../../imagenes/imagen-3-web-movil.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";
import logo_blanco from "../../imagenes/logo-en-blanco.png";
import icon_facebook from "../../imagenes/icono-facebook.png";
import icon_instagram from "../../imagenes/icono-instagram.png";
import icon_youtube from "../../imagenes/icono-you-tube.png";
import icon_twiter from "../../imagenes/icono-twiter.png";
import Categorias from "../../components/Categories/categories";
import CarrucelCard from "../../components/Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button";
import CardSocial from "../../components/CardSocial/CardSocial";
import CardArticules from "../../components/CardArticules/CardArticules";
import LoginLayout from "../../components/LoginLayout/LoginLayout";

export default function Home() {
  return (
    <>
      <div className={clsx("container-fluid mt-2")}>
        <HeaderHome />
        <div className={clsx("mt-4 p-4", styles["container-grey"])}>
          <div className={clsx(styles["container-text-imgOne"])}>
            <div className={clsx(styles["container-wrap"])}>
              <div className={clsx("mt-5 p-5", styles["container-box"])}>
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
            <div className={clsx("mb-5", styles["container-img-one"])}>
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
            <div className={clsx("d-flex ")}>
              <div
                className={clsx(
                  "col-4",
                  styles["container-elements-information"],
                  styles["styles-line"]
                )}
              >
                <span className={clsx(styles["styles-green-text"])}>3000</span>
                <span>Empleados</span>
              </div>
              <div
                className={clsx(
                  "col-4",
                  styles["container-elements-information"],
                  styles["styles-line"]
                )}
              >
                <span className={clsx(styles["styles-green-text"])}>2550</span>
                <span>Consultas</span>
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
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("p-4", styles["container-violet"])}>
          <div className={clsx(styles["container-text-imgOne"])}>
            <div className={clsx(styles["container-wrap"])}>
              <div>
                <h4 className={clsx("mt-3 mb-4", styles["styles-green-text"])}>
                  Aprende cuando y donde quieras{" "}
                </h4>
                <span className={clsx("style-text-black")}>
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
            <div className={clsx("mb-5", styles["container-img-one"])}>
              <img
                src={imagen_tree}
                alt=""
                className={clsx(styles["style-imagen-one"])}
              />
            </div>
            <div className={clsx(styles["container-wrap"])}>
              <div className={clsx("mt-5 p-5", styles[""])}>
                <h4>
                  Conoce el desempeño
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
        <div className={clsx("mt-5 container-fluid", styles.fixPosition)}>
          <span
            className={clsx(
              "mb-5",
              styles["styles-text"],
              styles["style-title-sidebar"]
            )}
          >
            {" "}
            Programas de bienestar en distintas áreas
          </span>
          <CarrucelCard cursesData={cursesData} limitSlider={4} />
        </div>
        <div className={clsx("p-4", styles["container-grey"])}>
          <div className={clsx("mb-4")}>
            <span className={clsx(styles["styles-name"])}>
              Lo que nuestro usuarios piensan de nosotros
            </span>
          </div>
          <div
            className={
              ("p-4", clsx(styles["container-box"], styles.containerSocial))
            }
          >
            <CardSocial />
            <CardSocial />
            <CardSocial />
            <CardSocial />
            <CardSocial />
            <CardSocial />
            <CardSocial />
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
              <div className={clsx("row")}>
                <div
                  className={clsx(
                    "container p-5 col",
                    styles["container-box"],
                    styles["container-login"]
                  )}
                >
                  <div className={clsx("mb-3")}>
                    <span
                      className={clsx(
                        "mb-3",
                        styles["styles-text-login"],
                        styles
                      )}
                    >
                      Déjanos tus datos y nos pondremos en contacto contigo.
                    </span>
                  </div>
                  <Input
                    placeholder="Contraseña actual "
                    className="mb-2 input-data-configuration"
                  />
                  <Input
                    placeholder="Nueva contraseña"
                    className="mb-2 input-data-configuration"
                  />
                  <Input
                    placeholder="Confirme contraseña"
                    className="mb-2 input-data-configuration"
                  />
                  <div className="row mb-4 mt-5 form-group">
                    <div className="col justify-content-center ">
                      <div className="form-check">
                        <input
                          className={clsx(
                            "form-check-input",
                            styles["check-color"]
                          )}
                          type="checkbox"
                          value=""
                          id="form2Example31"
                        />
                        <label
                          className={clsx(
                            "form-check-label",
                            styles["color-text-check"]
                          )}
                          htmlFor="form2Example31"
                        >
                          {" "}
                          Acepto los términos y condiciones, el Aviso de
                          privacidad y la Política de datos de navegación
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    className={clsx("mt-3 mb-3", styles["styles-btn-login"])}
                  >
                    Enviar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginLayout className={"home-img"}>
          <div className="container-fluid ">
            <div className={clsx("row ")}>
              <div className={clsx("col-4 p-4", styles["container-logo"])}>
                <div className={clsx()}>
                  <img
                    src={logo_blanco}
                    alt="logo-blanco"
                    className={clsx(styles["styles-icon-logo"])}
                  />
                </div>
              </div>
              <div
                className={clsx("col-4 p-4", styles["container-social-media"])}
              >
                {/* <div className={clsx(styles["container-social-media"])}> */}
                <img src={icon_facebook} alt="icon-facebook" />
                <img src={icon_instagram} alt="icon-instagram" />
                <img src={icon_youtube} alt="icon-youtube" />
                <img src={icon_twiter} alt="icon-twiter" />
                {/* </div> */}
              </div>
              <div
                className={clsx("col-4 p-4", styles["container-wrap-links"])}
              >
                {/* <div className={clsx(styles["container-wrap-links"])}> */}
                <div>
                  <img src="" alt="" />
                  <Link className={clsx(styles["style-upload-link"])}>
                    Politica de privacidad
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link className={clsx(styles["style-upload-link"])}>
                    Terminos y condiciones
                  </Link>
                </div>
                <div>
                  <img src="" alt="" />
                  <Link className={clsx(styles["style-upload-link"])}>
                    Preguntas frecuentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </LoginLayout>
        <div className={clsx(styles["container-derechos"])}>
          <span>@Impacta tu vida 2023</span>
        </div>
      </div>
    </>
  );
}