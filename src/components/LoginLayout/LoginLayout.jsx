import styles from "./LoginLayout.module.scss";

export default function LoginLayout({ className, children }) {
  return (
    <div className={(styles["backgroun-img"], styles[className])}>
      {children}
    </div>
  );
}
