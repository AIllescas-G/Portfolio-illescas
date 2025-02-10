import { useEffect, useState } from "react";
import photo from "../assets/svg/foto.svg";

export const NavComponent = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);    32      
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar md:hidden ${visible ? "visible" : "hidden"}`}>
      <div className="container nav">
        <a href="#home" className="logo">
          <img src={photo} alt="" />
        </a>
        
        <ul className="nav-links">
          <li>
            <a href="#about"> <b>01.</b> A cerca de mi</a>
          </li>
          <li>
            <a href="#projects"><b>02.</b> Experiencia</a>
          </li>
          <li>
            <a href="#projects"> <b>04.</b> Formación</a>
          </li>
          <li>
            <a href="#contact"> <b>05.</b> Proyectos</a>
          </li>
        </ul>
      </div>
      
    </nav>
    
  );
};
