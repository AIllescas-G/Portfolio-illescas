import photo from "../assets/svg/foto.svg";


export const NavComponent = () => {
  return (
    <div className=" container">
      <nav className="nav container-nav ">

        <a href="" className="brand-logo">
          <img src={photo} alt="Logo" />
        </a>

        <ul className="nav-mobile ">
          <li className="nav-link">
            <a href="#!">01. A cerca de mi</a>
          </li>
          <li className="nav-link">
            <a href="#!">02. Experiencia</a>
          </li>
          <li className="nav-link">
            <a href="#!">03. Proyectos</a>
          </li>
          <li className="nav-link">
            <a href="#!">04. Contacto</a>
          </li>
        </ul>

      </nav>
    </div>
  );
};
