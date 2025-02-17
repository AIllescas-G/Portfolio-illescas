import { useEffect, useState } from "react";
import moverick from "../assets/img/moverick-p.png";
import icired from "../assets/img/icired.png";
import go from "../assets/img/go.png";
import { Link } from "react-router-dom";

export const Proyect = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Si el usuario ha llegado al final (o cerca, margen de 50px)
      setIsAtBottom(scrollPosition >= documentHeight - 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="pro" className="container-poyect">
      <p className={`title mb-x1_2 ${isAtBottom ? "scrolled" : ""}`}>PROYECTOS</p>

      <Link to="/moverick"className="proyect">
        <img src={moverick} alt="" />
        <div className="info">
          <h6>Moverick</h6>
          <p className="s1">
            Diseño de interfaz para gestión de movilidad urbana, mejorando
            accesibilidad y experiencia en el transporte público.
          </p>
        </div>
      </Link>

      <Link to="/" className="proyect">
        <img src={go} alt="" />
        <div className="info">
          <h6>GO Certius (Garrigues)</h6>
          <p className="s1">
            Optimización de interfaz y navegación para una solución de
            certificación de documentos legales mediante blockchain.
          </p>
        </div>
      </Link>

      <Link to="/" className="proyect">
        <img src={icired} alt="" />
        <div className="info">
          <h6>ICIRED</h6>
          <p className="s1">
            Mejora de la experiencia de usuario en una plataforma de gestión de
            impagos, facilitando la interacción con los clientes.
          </p>
        </div>
      </Link>

    </div>
  );
};
