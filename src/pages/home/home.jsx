import { Link } from "react-router-dom";
import styles from "../home/home.module.scss";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>
              <Link />
            </li>
          </ul>
        </nav>
        <div>
          <button>Login</button>
          <button>Empresas</button>
        </div>
      </header>
    </>
  );
}
