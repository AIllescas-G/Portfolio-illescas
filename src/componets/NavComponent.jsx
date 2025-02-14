import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import photo from "../assets/svg/foto.svg";

export const NavComponent = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Función para hacer scroll a la sección al cambiar de ruta
  useEffect(() => {
    const sectionId = location.hash.replace("#", ""); // Obtiene la ancla de la URL
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 200; // Ajustar distancia de desplazamiento
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100); // Retraso pequeño para asegurar que la página cargue primero
    }
  }, [location]);

  return (
    
    <nav className={`navbar md:hidden ${visible ? "visible" : "plus"}`}>
      <div className="container nav">
        <Link to="/">
          <img className={`logo ${visible ? "visible" : "plusLogo"}`} src={photo} alt="Logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/#home">
              <b>01.</b> Acerca de mí
            </Link>
          </li>
          <li>
            <Link to="/#ex">
              <b>02.</b> Experiencia
            </Link>
          </li>
          <li>
            <Link to="/#tra">
              <b>04.</b> Formación
            </Link>
          </li>
          <li>
            <Link to="/#pro">
              <b>05.</b> Proyectos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
