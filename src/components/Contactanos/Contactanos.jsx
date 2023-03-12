import clsx from "clsx";
import styles from "../Contactanos/Contactanos.module.scss";
import Button from "../UI/Button";
import Input from "../UI/Input/input";
export default function ContactanosFomr() {
  return (
    <div className={clsx("")} id={"sesion-contactame"}>
      <div
        className={clsx(
          "container p-4 col",
          styles["container-box"],
          styles["container-login"]
        )}
      >
        <div className={clsx("mb-3")}>
          <span className={clsx("mb-3", styles["styles-text-login"], styles)}>
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
        <div className="row mb-4 mt-2 form-group">
          <div className="col justify-content-center ">
            <div className="form-check">
              <input
                className={clsx("form-check-input", styles["check-color"])}
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label
                className={clsx("form-check-label", styles["color-text-check"])}
                htmlFor="form2Example31"
              >
                {" "}
                Acepto los términos y condiciones, el Aviso de privacidad y la
                Política de datos de navegación
              </label>
            </div>
          </div>
        </div>
        <Button className={clsx("mt-1 ", styles["styles-btn-login"])}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
