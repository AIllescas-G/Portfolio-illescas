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
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100); // Retraso pequeño para asegurar que la página cargue primero
    }
  }, [location]);

  return (
    <nav className={`navbar  ${visible ? "visible" : "plus"}`}>
      <div className="container nav">
        <Link to="/">
          <h5 className="logo">
            <span className="acent">{"{"}</span>
            Antonio Illescas
            <span className="acent">{"}"}</span>
          </h5>
        </Link>

        <ul className="nav-links">
          {location.pathname === "/" ? (
            <li>
              <Link to="/illescas">
                <h6>Acerca de mí</h6>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/">
                <h6>Trabajos</h6>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
