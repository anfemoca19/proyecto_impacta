import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../Nosotros/nosotros.module.scss";
import imagen_for from "../../imagenes/imagen-4-web-movil.png";
import imagen_five from "../../imagenes/imagen-5-web-movil.png";
import imagen_six from "../../imagenes/imagen-6-web-movil.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";
import logo_blanco from "../../imagenes/logo-en-blanco.png";
import icon_facebook from "../../imagenes/icono-facebook.png";
import icon_instagram from "../../imagenes/icono-instagram.png";
import icon_youtube from "../../imagenes/icono-you-tube.png";
import icon_twiter from "../../imagenes/icono-twiter.png";
import icon_ejercicio from "../../imagenes/icono-twiter.png";
import icon_corazon from "../../imagenes/icono-twiter.png";
import icon_estudiado from "../../imagenes/icono-twiter.png";
import icon_ganador from "../../imagenes/icono-twiter.png";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button";
import CardSocial from "../../components/CardSocial/CardSocial";
import LoginLayout from "../../components/LoginLayout/LoginLayout";

export default function Nosotros() {
  return (
    <>
      <div className={clsx("container-fluid mt-2")}>
        <HeaderHome />
        <div className={clsx("mt-4 p-4", styles["container-grey"])}>
          <div className={clsx(styles["container-text-imgOne"])}>
            <div className={clsx(styles["container-wrap"])}>
              <div className={clsx("mt-5 p-5", styles["container-box"])}>
                <div className={clsx(styles["container-tu-marca"])}>
                  <p>
                    Tu marca
                    <span className={clsx(styles["styles-text"])}> +</span>{" "}
                    nuestro contendido{" "}
                    <span className={clsx(styles["styles-text"])}>
                      = Colaboradores felices
                    </span>
                  </p>
                </div>
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
                src={imagen_for}
                alt=""
                className={clsx(styles["style-imagen-one"])}
              />
            </div>
          </div>
        </div>
        <div className={clsx(" p-4", styles["container-grey"])}>
          <div className="d-flex row text-center">
            <div className={clsx("mt-4 mb-4")}>
              <h2>
                Impulsamos la cultura{" "}
                <span className={clsx(styles["styles-text"])}>
                  del aprendizaje
                </span>
              </h2>
            </div>
            <div className={clsx()}>
              <p className={clsx(styles["styles-text-paragraph"])}>
                <span className={clsx(styles["styles-text"])}>
                  Somos Impacta Tu vida
                </span>{" "}
                la plataforma de bienestar integral apasionada por ayudar a las
                empresas a elevar la energía vital de sus colaboradores a través
                de programas de hábitos saludables que impactan positivamente en
                sus vidas.
              </p>
            </div>
          </div>
        </div>
        <div className={clsx("p-4", styles["container-violet"])}>
          <div className={clsx(styles["container-text-imgOne"])}>
            <div className={clsx(styles["container-wrap"])}>
              <div>
                <h4 className={clsx("mt-3 mb-4", styles["styles-green-text"])}>
                  Estamos seguros que crear una cultura de bienestar,
                </h4>
                <span className={clsx("style-text-black")}>
                  genera multiples beneficios para las empresas
                </span>{" "}
              </div>
            </div>
            <div className={clsx("", styles["container-img-one"])}>
              <img
                src={imagen_five}
                alt=""
                className={clsx(styles["style-imagen-one"])}
              />
            </div>
          </div>
        </div>
        <div className={clsx("p-4", styles["container-grey"])}>
          <div className={clsx("mt-4", styles["container-text-imgtree"])}>
            <div className={styles["container-metodologia"]}>
              <div className={clsx("", styles["container-title-metodologia"])}>
                <span>
                  Una metodología que motiva a tu equipo a{" "}
                  <span className={clsx(styles["styles-text"])}>
                    {" "}
                    seguir aprendiendo
                  </span>
                </span>
              </div>
              <div className={clsx(styles["container-metodologia-wrap"])}>
                <div className={clsx(styles["container-box-metodologia"])}>
                  <img src={icon_ejercicio} alt="icono haciendo enercicio " />
                  <div>
                    <h2 className={styles["style-tittle-card"]}>
                      Aprende desde cualquier lugar
                    </h2>
                    <p className={clsx(styles["styles-paragraph-card"])}>
                      Comenzar a practicar y aprender{" "}
                      <span className={clsx(styles["styles-text"])}>
                        {" "}
                        desde cualquier lugar 24/7,
                      </span>
                      y empezar a mejorar tu calidad de vida y la salud de tus
                      colaboradores.
                    </p>
                  </div>
                </div>
                <div className={clsx(styles["container-box-metodologia"])}>
                  <img src={icon_corazon} alt="icono haciendo enercicio " />
                  <div>
                    <h2 className={styles["style-tittle-card"]}>
                      Desarrollar hábitos saludables para el mundo de hoy.
                    </h2>
                    <p className={clsx(styles["styles-paragraph-card"])}>
                      Integrarse al bienestar, elevar la energía, prevenir
                      enfermedades y mejorar el autoestima,{" "}
                      <span className={clsx(styles["styles-text"])}>
                        {" "}
                        es crucial para ganar el juego en la vida actual.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={clsx("mt-5", styles["container-metodologia-wrap"])}
              >
                <div className={clsx(styles["container-box-metodologia"])}>
                  <img src={icon_estudiado} alt="icono haciendo enercicio " />
                  <div>
                    <h2 className={styles["style-tittle-card"]}>
                      Entrenarse con maestros en cada área.
                    </h2>
                    <p className={clsx(styles["styles-paragraph-card"])}>
                      La información de alta calidad proviene de
                      <span className={clsx(styles["styles-text"])}>
                        {" "}
                        coach, mentores y especialistas en cada área.
                      </span>
                      Todos nuestros maestros enseñan prácticas que han
                      funcionado para sus vidas.
                    </p>
                  </div>
                </div>
                <div className={clsx(styles["container-box-metodologia"])}>
                  <img src={icon_ganador} alt="icono haciendo enercicio " />
                  <div>
                    <h2 className={styles["style-tittle-card"]}>
                      Avanzar paso a paso.
                    </h2>
                    <p className={clsx(styles["styles-paragraph-card"])}>
                      Los programas son diversos y están{" "}
                      <span className={clsx(styles["styles-text"])}>
                        {" "}
                        disponibles para poderlos ver y repetir las veces que se
                        requieran,
                      </span>
                      hasta apropiarlos y comprenderlos plenamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={clsx(styles["container-box"])}></div>
            </div>
          </div>
        </div>
        <div className={clsx("p-4", styles["container-grey"])}>
          <div className={clsx("mb-4")}>
            <span className={clsx(styles["styles-text-title-social"])}>
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
          <div className={clsx("p-4", styles["container-empleados-felices"])}>
            <div className={clsx(styles["container-violet-box"])}>
              <span className={clsx(styles["styles-simbol"])}>+</span>
              <span>Empleados felices y productivos</span>
            </div>
            <div className={clsx("mb-2 mt-3")}>
              <img
                src={imagen_six}
                alt=""
                className={clsx(styles["img-mujer-pc"])}
              />
            </div>
            <div className={clsx(styles["container-violet-box"])}>
              <span className={clsx(styles["styles-simbol"])}>=</span>
              <span>Data y análitica programas de bienstar integral </span>
            </div>
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
            <div className={clsx("row", styles["container-mobile"])}>
              {/* <div className={clsx("col-4 p-4", styles["container-logo"])}> */}
              <div
                className={clsx(
                  "col-4 col-sm-4 col-sm-8 col-md-4 ",
                  styles["container-logo"]
                )}
              >
                <div className={clsx()}>
                  <img
                    src={logo_blanco}
                    alt="logo-blanco"
                    className={clsx(styles["styles-icon-logo"])}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  "col-4 col-sm-4 col-sm-8 col-md-4 ",
                  styles["container-social-media"]
                )}
              >
                {/* <div
                className={clsx("col-4 p-4", styles["container-social-media"])}
              > */}
                <img src={icon_facebook} alt="icon-facebook" />
                <img src={icon_instagram} alt="icon-instagram" />
                <img src={icon_youtube} alt="icon-youtube" />
                <img src={icon_twiter} alt="icon-twiter" />
              </div>
              <div
                className={clsx(
                  "col-4 col-sm-4 col-sm-8 col-md-4 ",
                  styles["container-wrap-links"]
                )}
              >
                {/* <div
                className={clsx("col-4 p-4", styles["container-wrap-links"])}
              > */}
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
