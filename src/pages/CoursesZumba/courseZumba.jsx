import AcordionComponent from "../../components/AcordionModule/AcordionModule";
import FooterComponenet from "../../components/Footer/Footer";
import LayoutCureses from "../../components/LayoutCurses/LayoutCurses";
import styles from "../CoursesZumba/coursesZumba.module.scss";

import banner_comida_saludable from "../../imagenes/banner_comida_saludable.jpeg";
import logo_blanco from "../../imagenes/logo-en-blanco.png";
import clsx from "clsx";
import LayoutBackgroundCurses from "../../components/LayoutBackgroundCurses/LayoutBackgroundCurses";
import RankinComponent from "../../components/Ranking/Ranking";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/Button";
import Star from "../../components/Star/Star";
import Foto_perfil from "../../imagenes/foto-perfil.jpg";
import { useParams } from "react-router-dom";

export default function CurseZumba({ children, ...props }) {
  const routeParams = useParams();
  return (
    <>
      <LayoutBackgroundCurses>
        <header className="p-5">
          <img src={logo_blanco} alt="" />
        </header>

        <LayoutCureses
          sideBar={
            <>
              <div className={clsx("container-fluid mb-5")}>
                <img
                  src={banner_comida_saludable}
                  className={clsx(styles["banner-styles"])}
                  alt="comida-saludable"
                />
              </div>

              <AcordionComponent title="Modulo 1"></AcordionComponent>
              <RankinComponent />
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
            <div className={clsx("mb-5", styles["container-title"])}>
              <span className={clsx("", styles["styles-tittle-curso"])}>
                Nutrición conciente
              </span>
            </div>
            <div className={clsx("mt-3")}>
              <span className={clsx("mb-5", styles["styles-tittle-acerca"])}>
                Acerca del instructor
              </span>
              <div className={clsx(styles["container-acerca-instructor"])}>
                <div className={clsx(styles["container-foto-perfil"])}>
                  <img
                    className={clsx(styles["foto-perfil"])}
                    src={Foto_perfil}
                    alt=""
                  />
                </div>
                <div
                  className={clsx(styles["contaienr-descripcion-instructor"])}
                >
                  <span className={clsx(styles["styles-tittle-instructor"])}>
                    Maria Isabel Valderrama
                  </span>
                  <p>
                    Nutricionista dietista, por más de 10 años fue presentadora
                    y realizadora de de programas de nutrición y gastronomía, le
                    apasiona ser fuente de bienestar.
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx(styles["contaienr-video"])}>
              <span>Module</span>
              <video
                src="https://player.vimeo.com/video/697591769"
                className="object-fit-contain"
                autoplay
              ></video>
            </div>
            <div className={clsx(styles["line-styles"])}>
              <span> Beneficios</span>
            </div>
            <div className={clsx(styles["line-styles"])}>
              <span>Descripcion</span>
              <span>
                Existe evidencia sólida que demuestra que comer una alimentación
                balanceada y saludable puede reducir el riesgo de obesidad y
                enfermedades tales como diabetes, cardiopatía, accidentes
                cerebro-vasculares, osteoporosis y algunos tipos de cáncer. El
                programa de nutrición consciente esta diseñado para mostarte el
                camino hacia una alimentación adecuada, suficiente, variada,
                equilibrada y enriquecida con alimentos nutritivos. Aprende de
                la mano de Maria Isabel Valderrama, nutricionista dietista, la
                importancia de una alimentación saludable. "Aliméntate bien y
                vive mejor"
              </span>
            </div>
            <div className={clsx("mt-4 mb-4", styles["line-styles"])}>
              <span>Requerimientos</span>
              <p>
                No hay un requerimiento especial, sin embargo sugerimos
                acompañar el programa de nutrición consciente con los programas
                de actividad física.
              </p>
            </div>
          </div>
        </LayoutCureses>
      </LayoutBackgroundCurses>
      <FooterComponenet />
    </>
  );
}
