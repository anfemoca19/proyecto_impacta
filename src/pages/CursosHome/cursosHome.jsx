import clsx from "clsx";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import styles from "../CursosHome/cursosHome.module.scss";
import Categorias from "../../components/Categories/categories";
import CarrucelCard from "../../components/Carrucel/Carrucel";
import { cursesData } from "../../constants/user_const";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button";
import CardSocial from "../../components/CardSocial/CardSocial";
import CardArticules from "../../components/CardArticules/CardArticules";
import FooterHome from "../../components/FooterHome/FooterHome";

export default function CursosHome() {
  return (
    <>
      <div className={clsx("container-fluid mt-2")}>
        <HeaderHome />

        <div
          className={clsx("mt-4 p-4", styles["container-wrapper-categories"])}
        >
          <span
            className={clsx(
              "mt-2",
              styles["title-style-curses-web"],
              styles["styles-text"],
              styles["style-title-sidebar"]
            )}
          >
            Categorias
          </span>{" "}
          <Categorias className={"style-inline"} />
        </div>
        <div>
          <span></span>
          <p></p>
        </div>
        <div className={clsx("mt-5 p-4 container-fluid", styles.fixPosition)}>
          <span
            className={clsx(
              "mb-5",
              styles["styles-text"],
              styles["style-title-sidebar"]
            )}
          >
            {" "}
            Programas de bienestar en Nutrición
          </span>
          <p className={clsx("mt-4", styles["style-title-sidebar"])}>
            Desarrollar tus capacidades y habilidades relacionadas con
            nutricióny más, para tener bienestar integral
          </p>
          <CarrucelCard cursesData={cursesData} limitSlider={4} />
        </div>
        <div className={clsx("p-4", styles["container-grey"])}>
          <div className={clsx("mb-4")}>
            <span
              className={clsx(
                styles["styles-text"],
                styles["style-title-sidebar"]
              )}
            >
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
                "mb-4 container-fluid text-center",
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
        <FooterHome />
      </div>
    </>
  );
}
