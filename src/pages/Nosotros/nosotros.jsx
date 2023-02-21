import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../Nosotros/nosotros.module.scss";
import imagen_for from "../../imagenes/imagen-4-web-movil.png";
import imagen_five from "../../imagenes/imagen-5-web-movil.png";
import imagen_six from "../../imagenes/imagen-6-web-movil.png";
import icono_siguiente from "../../imagenes/icono-siguiente.png";
import icon_ejercicio from "../../imagenes/icono-twiter.png";
import icon_corazon from "../../imagenes/icono-twiter.png";
import icon_estudiado from "../../imagenes/icono-twiter.png";
import icon_ganador from "../../imagenes/icono-twiter.png";
import FooterHome from "../../components/FooterHome/FooterHome";
import ContactanosFomr from "../../components/Contactanos/Contactanos";
import CardSocialComponent from "../../components/CardSocialComponent/CardSocialComponent";

export default function Nosotros() {
  return (
    <>
      <HeaderHome />
      <div className={clsx("mt-4 p-4", styles["container-grey"])}>
        <div className={clsx(styles["container-text-imgOne"])}>
          <div className={clsx(styles["container-wrap"])}>
            <div className={clsx("mt-3 p-5", styles["container-box"])}>
              <p>
                Tu marca
                <span className={clsx(styles["styles-text"])}> +</span> nuestro
                contendido{" "}
                <span className={clsx(styles["styles-text"])}>
                  = Colaboradores felices
                </span>
              </p>
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
            <h2 className={styles["style-title-bold"]}>
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
              <h4 className={clsx("", styles["styles-green-text"])}>
                Estamos seguros que crear una cultura de bienestar,{" "}
                <span className={clsx(styles["style-text-white"])}>
                  genera multiples beneficios para las empresas
                </span>{" "}
              </h4>
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
            <div className={clsx("mt-5", styles["container-metodologia-wrap"])}>
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
                    Todos nuestros maestros enseñan prácticas que han funcionado
                    para sus vidas.
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
        </div>
      </div>

      {/* container violeta */}
      <div className={clsx("p-4", styles["container-violet"])}>
        <div className={styles["container-wrap-info-violeta"]}>
          <div
            className={clsx(
              styles["container-violet-box"],
              styles["container-elemento-violeta"]
            )}
          >
            <div className={clsx(styles["container-interior-green"])}>
              <span>3000</span>
              <span>Empleados</span>
            </div>
            <div className={clsx(styles["container-texto-violet"])}>
              <span>Empleados felices y productivos.</span>
            </div>
          </div>
          <div
            className={clsx(
              styles["container-violet-box"],
              styles["container-elemento-violeta"]
            )}
          >
            <div className={clsx(styles["container-interior-green"])}>
              <span>2550</span>
              <span>Consultas</span>
            </div>
            <div className={clsx(styles["container-texto-violet"])}>
              <span>
                Utilizan el beneficio de atención médica, psicologica y de
                nutrición en un mes.
              </span>
            </div>
          </div>
          <div
            className={clsx(
              styles["container-violet-box"],
              styles["container-elemento-violeta"]
            )}
          >
            <div className={clsx(styles["container-interior-green"])}>
              <span>$214.200</span>
              <span>USD</span>
            </div>
            <div className={clsx(styles["container-texto-violet"])}>
              <span>
                Ahorro estimado por reduccion de ausentismo laboral en un año.
              </span>
            </div>
          </div>
        </div>
        <div className={styles["container-web"]}>
          <div
            className={clsx(
              "d-flex  align-items-center ps-4 pe-4 mt-5",
              styles["container-btn-arrow-green"]
            )}
          >
            <Link
              className={clsx(
                "container-fluid text-center justify-content-between align-items-center d-flex",
                styles["style-upload-link-violet"]
              )}
              to=""
            >
              <span>Agenda demostración</span>
              <img
                src={icono_siguiente}
                alt="arro-raight"
                className={clsx(styles["icon-upload"])}
              />
            </Link>
          </div>
          <div className={clsx(styles["container-paragrap"])}>
            <p>
              Según artículos publicados por la OMS los programas de bienestar
              en el lugar de trabajo pueden contribuir a reducir el absentismo
              por enfermedad general en un 27% y los costos de atención
              sanitaria para las empresas en un 26%
            </p>
          </div>
        </div>
      </div>
      {/*  */}
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
              "mb-5 container-fluid text-center",
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
