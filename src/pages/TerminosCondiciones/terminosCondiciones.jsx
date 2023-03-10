import clsx from "clsx";
import styles from "../TerminosCondiciones/terminosCondiciones.module.scss";

export default function Terminos() {
  return (
    <>
      <div className={clsx(styles["container-elements"])}>
        <div className={clsx(styles["container-title"])}>
          <span className={clsx(styles["styles-title"])}>
            TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA EDUCATIVA IMPACTA TU
            VIDA S.A.S
          </span>
        </div>

        <div className={clsx("mb-4")}>
          <p className={clsx("mb-4")}>
            La utilización de la plataforma educativa IMPACTA TU VIDA S.A.S,
            propiedad de la sociedad Impacta Tu Vida S.A.S, implica la
            aceptación de los siguientes términos y condiciones de uso:
          </p>
          <span className={clsx(styles["styles-subtitle"])}>
            {" "}
            Objeto de la plataforma educativa
          </span>
          <p>
            1. La plataforma educativa IMPACTA TU VIDA S.A.S tiene como objetivo
            principal ofrecer cursos, talleres y recursos educativos en línea a
            usuarios interesados en adquirir conocimientos en diferentes áreas
            del conocimiento.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Acceso a la plataforma
          </span>
          <p>
            2. El acceso a la plataforma educativa es gratuito y está disponible
            para cualquier usuario que cuente con conexión a internet. Para
            acceder a algunos contenidos y recursos, se podrá requerir el
            registro en la plataforma.
          </p>
          {/* <div className={clsx("p-4")}>
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
          </div> */}
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Registro en la plataforma
          </span>
          <p>
            3. Para registrarse en la plataforma, el usuario deberá proporcionar
            sus datos personales, incluyendo su nombre completo, dirección de
            correo electrónico, país de residencia, entre otros. Los datos
            proporcionados por el usuario serán tratados de acuerdo con la
            política de privacidad de la plataforma.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Propiedad intelectual
          </span>
          <p>
            4. Los contenidos y recursos disponibles en la plataforma educativa
            IMPACTA TU VIDA S.A.S son propiedad exclusiva de la sociedad Impacta
            Tu Vida S.A.S o de sus respectivos autores, y están protegidos por
            las leyes de propiedad intelectual. Queda prohibido el uso,
            reproducción, distribución o cualquier otra forma de explotación de
            los mismos sin autorización previa y por escrito de la sociedad
            Impacta Tu Vida S.A.S.
          </p>
          {/* <div className={clsx("p-4")}>
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
          </div> */}
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx(styles["styles-subtitle"])}>
            Uso de la plataforma
          </span>
          <p>
            5. El usuario se compromete a hacer un uso adecuado y lícito de la
            plataforma educativa IMPACTA TU VIDA S.A.S, respetando en todo
            momento las leyes y normativas aplicables, así como los derechos de
            propiedad intelectual de la sociedad Impacta Tu Vida S.A.S y de
            terceros.
          </p>
        </div>
        <div className={clsx("mb-4")}>
          <span className={clsx("mb-5", styles["styles-subtitle"])}>
            Exclusión de responsabilidad
          </span>
          <p>
            6. La sociedad Impacta Tu Vida S.A.S no será responsable de los
            posibles daños o perjuicios que puedan derivarse del uso de la
            plataforma educativa por parte del usuario, incluyendo, entre otros,
            los causados por errores en los contenidos o recursos,
            interrupciones en el servicio, virus informáticos o fallos en el
            sistema.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Modificaciones de los términos y condiciones
          </span>
          <p>
            7. La sociedad Impacta Tu Vida S.A.S se reserva el derecho de
            modificar los términos y condiciones de uso de la plataforma
            educativa en cualquier momento, sin necesidad de previo aviso. Los
            usuarios serán notificados de cualquier modificación mediante la
            publicación de la nueva versión de los términos y condiciones en la
            plataforma.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Ley aplicable y jurisdicción
          </span>
          <p>
            8. Los presentes términos y condiciones se regirán e interpretarán
            de acuerdo con las leyes de la República de Colombia. Cualquier
            controversia que pudiera derivarse del acceso o uso de la plataforma
            educativa IMPACTA TU VIDA S.A.S será resuelta por los tribunales
            competentes de la ciudad de Bogotá, Colombia.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Obligaciones del usuario
          </span>
          <p>
            9. El usuario se compromete a hacer uso de la plataforma educativa
            de manera responsable y diligente, respetando los derechos de
            propiedad intelectual y la privacidad de los demás usuarios.
            Asimismo, se obliga a no utilizar la plataforma con fines ilícitos o
            que puedan perjudicar a la sociedad Impacta Tu Vida S.A.S o a
            terceros.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Cancelación de la cuenta
          </span>
          <p>
            10. La sociedad Impacta Tu Vida S.A.S se reserva el derecho de
            cancelar la cuenta de cualquier usuario que incumpla los términos y
            condiciones de uso de la plataforma educativa o que realice un uso
            inadecuado de la misma.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Enlaces externos
          </span>
          <p>
            11. La sociedad Impacta Tu Vida S.A.S se reserva el derecho de
            cancelar la cuenta de cualquier usuario que incumpla los términos y
            condiciones de uso de la plataforma educativa o que realice un uso
            inadecuado de la misma.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Disponibilidad del servicio
          </span>
          <p>
            12. La sociedad Impacta Tu Vida S.A.S se reserva el derecho de
            suspender temporalmente el acceso a la plataforma educativa por
            motivos de mantenimiento, actualización, reparación o mejora del
            sistema, sin que ello genere derecho a compensación por parte de los
            usuarios.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Limitación de responsabilidad
          </span>
          <p>
            13. La sociedad Impacta Tu Vida S.A.S se reserva el derecho de
            suspender temporalmente el acceso a la plataforma educativa por
            motivos de mantenimiento, actualización, reparación o mejora del
            sistema, sin que ello genere derecho a compensación por parte de los
            usuarios.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Protección de datos personales
          </span>
          <p>
            14. La sociedad Impacta Tu Vida S.A.S se compromete a cumplir con la
            normativa aplicable en materia de protección de datos personales, y
            a tratar los datos de los usuarios de la plataforma educativa de
            manera confidencial y segura.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Aceptación de los términos y condiciones
          </span>
          <p>
            15. La utilización de la plataforma educativa IMPACTA TU VIDA S.A.S
            implica la aceptación de estos términos y condiciones de uso. Si el
            usuario no está de acuerdo con los mismos, deberá abstenerse de
            utilizar la plataforma.
          </p>
        </div>
        <div className={clsx("mb-4 mt-3")}>
          <span className={clsx("mt-5", styles["styles-subtitle"])}>
            Contacto
          </span>
          <p>
            16. Para cualquier consulta o reclamación relacionada con la
            plataforma educativa IMPACTA TU VIDA S.A.S, los usuarios pueden
            contactar con la sociedad a través del correo electrónico o el
            formulario de contacto disponible en la plataforma.
          </p>
        </div>
      </div>
    </>
  );
}
