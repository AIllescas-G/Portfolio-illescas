import React, { useEffect, useState } from "react";

export default function AboutMe() {


  const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const titleElement = document.querySelector(".title");
        if (titleElement) {
          const rect = titleElement.getBoundingClientRect();
          setIsScrolled(rect.top <= 50); // Cambia de estilo si el título está cerca de la parte superior
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <section  id="home" className="container-about">
      <h1 className={`s1 title ${! isScrolled ? "scrolled" : ""} `}>SOBRE MÍ</h1>

      <article>
        <p className="p">
          Soy un <b>diseñador UX/UI</b> con una fuerte pasión por crear{" "}
          experiencias digitales intuitivas, funcionales y centradas en el
          usuario. Mi enfoque va más allá del diseño visual, abarcando desde la
          investigación y conceptualización hasta la implementación, asegurando
          productos con alto impacto en usabilidad y accesibilidad.
        </p>
      </article>

      <article>
        <p className="p">
          Además, cuento con un perfil híbrido como <b>frontend developer</b>,
          lo que me permite llevar mis diseños a la realidad a través de
          interfaces interactivas y eficientes. Con experiencia en{" "}
          <b>HTML, CSS, JavaScript y frameworks como React</b>, combino diseño y
          desarrollo para construir soluciones escalables y de alto rendimiento.
        </p>
      </article>

      <article>
        <p className="p">
          Trabajo bajo <b>metodologías ágiles</b>, colaborando estrechamente con
          equipos multidisciplinarios para garantizar entregas eficientes y de
          calidad. Mi objetivo es{" "}
          <b>transformar ideas en experiencias digitales memorables</b>,
          fusionando creatividad, tecnología y estrategia en cada proyecto.
        </p>
      </article>
    </section>
  );
}
