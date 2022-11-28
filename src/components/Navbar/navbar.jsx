import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <img src="" alt="" />
        <a class="navbar-brand" href="#">
          Inicio
        </a>
      </nav>

      <nav class="navbar navbar-light bg-light">
        <img src="" alt="" />
        <Link class="navbar-brand mb-0 h1">Configuración</Link>
      </nav>

      <nav class="navbar navbar-light bg-light">
        <img src="" alt="" />
        <Link class="navbar-brand" href="#">
          Usuarios
        </Link>
      </nav>

      <nav class="navbar navbar-light bg-light">
        <img src="" alt="" />
        <Link class="navbar-brand mb-0 h1">Cursos</Link>
      </nav>
    </>
  );
}
