import clsx from "clsx";
import styles from "../politicaPrivacidad/politicaPrivacidad.module.scss";

export default function Politicas() {
  return (
    <>
      <div className={clsx(styles["container-elements"])}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["styles-title"])}>
            Política de Privacidad y Uso de Datos
          </span>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            {" "}
            Responsable del tratamiento de datos
          </span>
          <p>
            1. La sociedad IMPACTA TU VIDA S.A.Ses responsable del tratamiento
            de los datos personales recabados a través de la plataforma
            educativa.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Finalidad del tratamiento de datos{" "}
          </span>
          <p>
            2. Los datos personales recabados a través de la plataforma
            educativa serán utilizados con las siguientes finalidades:{" "}
          </p>
          <div className={clsx("p-4")}>
            <ul className="list-group">
              <li className="">
                Gestión de la plataforma y los servicios ofrecidos a través de
                la misma.
              </li>
              <li className="">
                {" "}
                Comunicación con los usuarios para atender sus consultas o
                solicitudes.
              </li>
              <li className="">
                Análisis del comportamiento de los usuarios en la plataforma y
                obtención de información estadística sobre su uso.
              </li>
              <li className="">
                Envío de información comercial y publicidad sobre los productos
                y servicios de IMPACTA TU VIDA S.A.S, siempre que el usuario
                haya prestado su consentimiento para ello.
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Legitimación para el tratamiento de datos
          </span>
          <p>
            3. La legitimación para el tratamiento de los datos personales
            recabados a través de la plataforma educativa se basa en el
            consentimiento prestado por el usuario para la utilización de los
            mismos, así como en la necesidad del tratamiento para la prestación
            de los servicios ofrecidos en la plataforma.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Categorías de datos personales tratados
          </span>
          <p>
            4. IMPACTA TU VIDA S.A.S puede tratar las siguientes categorías de
            datos personales de los usuarios:
          </p>
          <div className={clsx("p-4")}>
            <ul className="list-group">
              <li className="">
                Datos de identificación: nombre, apellidos, correo electrónico,
                dirección postal.
              </li>
              <li className="">
                {" "}
                Datos de contacto: teléfono, dirección postal.
              </li>
              <li className="">
                Datos académicos y profesionales: formación, experiencia
                laboral.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Destinatarios de los datos personales{" "}
          </span>
          <p>
            5. Los datos personales recabados a través de la plataforma
            educativa pueden ser comunicados a terceros para la prestación de
            los servicios ofrecidos en la misma, así como para el cumplimiento
            de obligaciones legales. En todo caso, IMPACTA TU VIDA S.A.S
            garantiza la confidencialidad y seguridad de los datos personales de
            los usuarios.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mb-5", styles["styles-subtitle"])}>
            Derechos de los usuarios
          </span>
          <p>
            6. Los usuarios tienen derecho a ejercer los siguientes derechos en
            relación con sus datos personales:{" "}
          </p>
          <div className={clsx("p-4")}>
            <ul className="list-group">
              <li className="">
                Derecho de acceso: derecho a conocer qué datos personales son
                objeto de tratamiento, así como a obtener una copia de los
                mismos.
              </li>
              <li className="">
                Derecho de rectificación: derecho a solicitar la rectificación
                de los datos personales inexactos o incompletos.
              </li>
              <li className="">
                Derecho de supresión: derecho a solicitar la supresión de los
                datos personales cuando ya no sean necesarios para la finalidad
                para la que fueron recabados.
              </li>
              <li className="">
                Derecho de oposición: derecho a oponerse al tratamiento de sus
                datos personales en determinadas circunstancias.
              </li>
              <li className="">
                Derecho a la portabilidad: derecho a recibir los datos
                personales en un formato estructurado, de uso común y lectura
                mecánica, y a transmitirlos a otro responsable del tratamiento
                sin impedimentos.
              </li>
              <li className="">
                Derecho a retirar el consentimiento: derecho a retirar el
                consentimiento prestado para el tratamiento de los datos
                personales en cualquier momento.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Contacto{" "}
          </span>
          <p>
            7. Los usuarios pueden contactar con IMPACTA TU VIDA S.A.S para
            cualquier consulta o ejercicio de sus derechos en relación con sus
            datos personales a través de los medios habilitados en la plataforma
            educativa.
          </p>
        </div>
      </div>
    </>
  );
}
