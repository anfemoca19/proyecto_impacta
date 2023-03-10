import clsx from "clsx";
import styles from "../Cookies/cookies.module.scss";

export default function Cookies() {
  return (
    <>
      <div className={clsx(styles["container-elements"])}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["styles-title"])}>
            Política de Cookies
          </span>
        </div>

        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            {" "}
            Definición y función de las cookies
          </span>
          <p>
            1. Una cookie es un pequeño archivo de texto que se almacena en el
            ordenador o dispositivo móvil del usuario al acceder a determinadas
            páginas web o aplicaciones. Las cookies permiten a la página o
            aplicación reconocer al usuario, facilitar su navegación y
            personalizar la experiencia de uso.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Tipos de cookies utilizadas
          </span>
          <p>
            2. La sociedad IMPACTA TU VIDA S.A.S utiliza cookies propias y de
            terceros en la plataforma educativa, con las siguientes finalidades:
          </p>
          <div className={clsx("p-4")}>
            <ul className="list-group">
              <li className="">
                Cookies técnicas: permiten al usuario la navegación a través de
                la plataforma y la utilización de las diferentes opciones o
                servicios que se ofrecen.
              </li>
              <li className="">
                {" "}
                Cookies de análisis: permiten analizar el comportamiento de los
                usuarios en la plataforma y obtener información estadística
                sobre su uso para mejorar los servicios y contenidos ofrecidos.
              </li>
              <li className="">
                servicios y contenidos ofrecidos. Cookies publicitarias:
                permiten mostrar anuncios personalizados en función de la
                información recabada sobre los intereses y hábitos de navegación
                del usuario.
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Consentimiento para la utilización de cookies
          </span>
          <p>
            3. Al acceder a la plataforma educativa de IMPACTA TU VIDA S.A.S, se
            informa al usuario sobre la utilización de cookies y se le solicita
            su consentimiento para ello. El usuario puede aceptar o rechazar la
            utilización de cookies mediante las opciones de configuración del
            navegador.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Desactivación de las cookies
          </span>
          <p>
            4. El usuario puede desactivar la utilización de cookies en
            cualquier momento mediante las opciones de configuración del
            navegador, si bien es posible que esta acción afecte al
            funcionamiento de la plataforma educativa.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Duración de las cookies
          </span>
          <p>
            5. Las cookies utilizadas en la plataforma educativa tienen una
            duración temporal que puede variar en función de su finalidad. En
            todo caso, la duración no será superior a 24 meses.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mb-5", styles["styles-subtitle"])}>
            La sociedad IMPACTA TU VIDA S.A.S utiliza cookies de terceros en la
            plataforma educativa, con las siguientes finalidades:
          </span>
          <p>
            6. La sociedad Impacta Tu Vida S.A.S no será responsable de los
            posibles daños o perjuicios que puedan derivarse del uso de la
            plataforma educativa por parte del usuario, incluyendo, entre otros,
            los causados por errores en los contenidos o recursos,
            interrupciones en el servicio, virus informáticos o fallos en el
            sistema.
          </p>
          <div className={clsx("p-4")}>
            <ul className="list-group">
              <li className="">
                Google Analytics: servicio de análisis de tráfico web
                proporcionado por Google, Inc. Google Analytics utiliza cookies
                para recopilar información anónima sobre el uso de la plataforma
                por parte de los usuarios.
              </li>
              <li className="">
                {" "}
                Google AdSense: servicio de publicidad proporcionado por Google,
                Inc. Google AdSense utiliza cookies para mostrar anuncios
                personalizados en función de los intereses y hábitos de
                navegación del usuario.
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Modificaciones de la Política de Cookies
          </span>
          <p>
            7. La sociedad IMPACTA TU VIDA S.A.S se reserva el derecho de
            modificar en cualquier momento la presente Política de Cookies,
            siempre que existan cambios en la normativa aplicable o en las
            finalidades de utilización de las cookies. En caso de
            modificaciones, se informará a los usuarios a través de la
            plataforma educativa.
          </p>
        </div>
      </div>
    </>
  );
}
